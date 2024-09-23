document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('zmanim-form');
    const outputSection = document.getElementById('output-section');
    const conversionMessage = document.getElementById('conversion-message');
    const downloadButton = document.getElementById('download-ics');
    const getLocationButton = document.getElementById('get-location');

    getLocationButton.addEventListener('click', function() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                document.getElementById('latitude').value = position.coords.latitude.toFixed(4);
                document.getElementById('longitude').value = position.coords.longitude.toFixed(4);
            }, function(error) {
                alert("Error: " + error.message);
            });
        } else {
            alert("Geolocation is not supported by your browser");
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        fetchZmanim(latitude, longitude, startDate, endDate);
    });

    async function fetchZmanim(latitude, longitude, startDate, endDate) {
        const apiUrl = `https://www.hebcal.com/zmanim?cfg=json&latitude=${latitude}&longitude=${longitude}&start=${startDate}&end=${endDate}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (!data.items || !Array.isArray(data.items)) {
                throw new Error('Unexpected API response format');
            }

            const icsData = convertZmanimToICS(data.items);
            conversionMessage.textContent = 'Conversion successful!';
            outputSection.style.display = 'block';
            downloadButton.onclick = function() {
                downloadICS(icsData);
            };
        } catch (error) {
            conversionMessage.textContent = 'Error: ' + error.message;
            console.error('API Response:', error);
            outputSection.style.display = 'block';
        }
    }

    function convertZmanimToICS(zmanimData) {
        if (!zmanimData || zmanimData.length === 0) {
            throw new Error('No zmanim data available for the specified date range and location');
        }

        let icsEvents = zmanimData.map(item => {
            if (!item.title || !item.date) {
                console.warn('Invalid item:', item);
                return null;
            }
            return createICSEvent(item.title, new Date(item.date));
        }).filter(event => event !== null);

        if (icsEvents.length === 0) {
            throw new Error('No valid events could be created from the data');
        }

        return generateICSContent(icsEvents);
    }

    function createICSEvent(summary, date) {
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
