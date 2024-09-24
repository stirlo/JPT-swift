document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('zmanim-form');
    const outputSection = document.getElementById('output-section');
    const conversionMessage = document.getElementById('conversion-message');
    const previewContent = document.getElementById('preview-content');
    const downloadButton = document.getElementById('download-ics');
    const getLocationButton = document.getElementById('get-location');

    getLocationButton.addEventListener('click', function() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                document.getElementById('latitude').value = position.coords.latitude.toFixed(4);
                document.getElementById('longitude').value = position.coords.longitude.toFixed(4);
            }, function(error) {
                alert("Error: Unable to retrieve location.");
            });
        } else {
            alert("Geolocation is not supported by your browser");
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const latitude = parseFloat(document.getElementById('latitude').value);
        const longitude = parseFloat(document.getElementById('longitude').value);
        const startDate = new Date(document.getElementById('start-date').value + 'T00:00:00');
        const endDate = new Date(document.getElementById('end-date').value + 'T23:59:59');
        const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;

        console.log('Form submitted with:', { latitude, longitude, startDate, endDate, tzid });

        generateZmanim(latitude, longitude, tzid, startDate, endDate);
    });

    function generateZmanim(latitude, longitude, tzid, startDate, endDate) {
        try {
            console.log('Generating Zmanim for:', { latitude, longitude, tzid, startDate, endDate });

            if (typeof hebcal === 'undefined') {
                throw new Error('Hebcal library is not loaded');
            }

            const { GeoLocation, Zmanim } = hebcal;

            const gloc = new GeoLocation(null, latitude, longitude, 0, tzid);
            console.log('GeoLocation created:', gloc);

            const events = [];
            const previewData = [];

            for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
                console.log('Processing date:', date);

                const zmanim = new Zmanim(gloc, date, false);
                console.log('Zmanim object created for', date);

                const dailyZmanim = [
                    {name: "Alot HaShachar", time: zmanim.alotHaShachar()},
                    {name: "Sunrise", time: zmanim.sunrise()},
                    {name: "Sof Zman Shma GRA", time: zmanim.sofZmanShma()},
                    {name: "Sof Zman Tfilla GRA", time: zmanim.sofZmanTfilla()},
                    {name: "Chatzot", time: zmanim.chatzot()},
                    {name: "Mincha Gedola", time: zmanim.minchaGedola()},
                    {name: "Mincha Ketana", time: zmanim.minchaKetana()},
                    {name: "Plag HaMincha", time: zmanim.plagHaMincha()},
                    {name: "Candle Lighting", time: zmanim.sunsetOffset(-18, true)},
                    {name: "Sunset", time: zmanim.sunset()},
                    {name: "Tzeit Hakochavim", time: zmanim.tzeit()}
                ];

                console.log('Daily Zmanim:', dailyZmanim);

                previewData.push({date: date, zmanim: dailyZmanim});

                dailyZmanim.forEach(({name, time}) => {
                    if (time) {
                        events.push(createICSEvent(name, time, tzid));
                    }
                });
            }

            const icsData = generateICSContent(events);
            displayPreview(previewData);
            conversionMessage.textContent = 'Conversion successful!';
            outputSection.style.display = 'block';
            downloadButton.onclick = function() {
                downloadICS(icsData);
            };
        } catch (error) {
            console.error('Error in generateZmanim:', error);
            conversionMessage.textContent = `Error: ${error.message}. Please check your inputs and try again.`;
            outputSection.style.display = 'block';
        }
    }

    function createICSEvent(summary, date, tzid) {
        if (!date) return null;
        const dtstart = hebcal.Zmanim.formatISOWithTimeZone(tzid, date);
        const dtend = hebcal.Zmanim.formatISOWithTimeZone(tzid, new Date(date.getTime() + 60 * 60 * 1000));

        return `BEGIN:VEVENT
SUMMARY:${summary}
DTSTART:${dtstart}
DTEND:${dtend}
END:VEVENT`;
    }

    function generateICSContent(events) {
        const validEvents = events.filter(event => event !== null);
        return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Zmanim to ICS Converter//EN
CALSCALE:GREGORIAN
${validEvents.join('\n')}
END:VCALENDAR`;
    }

    function displayPreview(previewData) {
        let previewHtml = '';
        previewData.forEach(day => {
            previewHtml += `<h3>${day.date.toDateString()}</h3><ul>`;
            day.zmanim.forEach(zman => {
                if (zman.time) {
                    previewHtml += `<li>${zman.name}: ${zman.time.toLocaleTimeString()}</li>`;
                }
            });
            previewHtml += '</ul>';
        });
        previewContent.innerHTML = previewHtml;
    }

    function downloadICS(icsData) {
        const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'zmanim.ics';
        link.click();
    }
});
