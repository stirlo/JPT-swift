document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('zmanim-form');
    const zmanimInput = document.getElementById('zmanim-input');
    const outputSection = document.getElementById('output-section');
    const conversionMessage = document.getElementById('conversion-message');
    const downloadButton = document.getElementById('download-ics');

    const MAX_FILE_SIZE = 1024 * 1024; // 1 MB

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputData = zmanimInput.value;
        const language = document.getElementById('language-select').value;

        if (inputData.length > MAX_FILE_SIZE) {
            conversionMessage.textContent = 'Error: Input data is too large. Please limit to 1 MB.';
            outputSection.style.display = 'block';
            return;
        }

        processZmanimData(inputData, language);
    });

    function processZmanimData(inputData, language) {
        try {
            let zmanimData;
            if (inputData.trim().startsWith('<?xml') || inputData.trim().startsWith('<rss')) {
                zmanimData = parseRssData(inputData);
            } else {
                zmanimData = parseMonthlyViewData(inputData);
            }
            const icsData = convertZmanimToICS(zmanimData, language);
            conversionMessage.textContent = 'Conversion successful!';
            outputSection.style.display = 'block';
            downloadButton.onclick = function() {
                downloadICS(icsData);
            };
        } catch (error) {
            conversionMessage.textContent = 'Error: ' + error.message;
            outputSection.style.display = 'block';
        }
    }

    function parseRssData(rssData) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(rssData, "text/xml");

        const items = xmlDoc.getElementsByTagName("item");
        let zmanimData = [];

        for (let item of items) {
            const title = item.getElementsByTagName("title")[0].textContent;
            const [zman, dateTime] = title.split(" - ");
            const [date, time] = dateTime.split(", ");
            zmanimData.push({ zman: zman.trim(), date: date.trim(), time: time.trim() });
        }

        return zmanimData;
    }

    function parseMonthlyViewData(inputData) {
        const lines = inputData.trim().split('\n');
        const headers = lines[0].split(/\s+/).filter(h => h.trim() !== '');
        const zmanimData = [];

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(/\s+/).filter(v => v.trim() !== '');
            if (values.length < 3) continue;

            const date = `${values[2]} ${headers[2]} ${new Date().getFullYear()}`;

            for (let j = 3; j < headers.length; j++) {
                zmanimData.push({ 
                    zman: headers[j], 
                    date: date, 
                    time: values[j] 
                });
            }
        }

        return zmanimData;
    }

    function convertZmanimToICS(zmanimData, language) {
        let icsEvents = [];

        for (let data of zmanimData) {
            const dateTime = new Date(`${data.date} ${data.time}`);
            icsEvents.push(createICSEvent(data.zman, dateTime, language));
        }

        return generateICSContent(icsEvents);
    }

    function createICSEvent(summary, date, language) {
        const dtstart = date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
        const dtend = new Date(date.getTime() + 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

        return `BEGIN:VEVENT
SUMMARY:${summary}
DTSTART:${dtstart}
DTEND:${dtend}
END:VEVENT`;
    }

    function generateICSContent(events) {
        return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Zmanim to ICS Converter//EN
CALSCALE:GREGORIAN
${events.join('\n')}
END:VCALENDAR`;
    }

    function downloadICS(icsData) {
        const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'zmanim.ics';
        link.click();
    }
});
