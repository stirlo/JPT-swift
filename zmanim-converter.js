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
        const latitude = parseFloat(document.getElementById('latitude').value);
        const longitude = parseFloat(document.getElementById('longitude').value);
        const startDate = new Date(document.getElementById('start-date').value);
        const endDate = new Date(document.getElementById('end-date').value);
        const tzid = Intl.DateTimeFormat().resolvedOptions().timeZone;

        generateZmanim(latitude, longitude, tzid, startDate, endDate);
    });

    function generateZmanim(latitude, longitude, tzid, startDate, endDate) {
        try {
            const {GeoLocation, Zmanim} = hebcal;
            const gloc = new GeoLocation(null, latitude, longitude, 0, tzid);
            const events = [];

            for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
                const zmanim = new Zmanim(gloc, date, false);

                events.push(
                    createICSEvent("Alot HaShachar", zmanim.alotHaShachar(), tzid),
                    createICSEvent("Sunrise", zmanim.sunrise(), tzid),
                    createICSEvent("Sof Zman Shma GRA", zmanim.sofZmanShma(), tzid),
                    createICSEvent("Sof Zman Tfilla GRA", zmanim.sofZmanTfilla(), tzid),
                    createICSEvent("Chatzot", zmanim.chatzot(), tzid),
                    createICSEvent("Mincha Gedola", zmanim.minchaGedola(), tzid),
                    createICSEvent("Mincha Ketana", zmanim.minchaKetana(), tzid),
                    createICSEvent("Plag HaMincha", zmanim.plagHaMincha(), tzid),
                    createICSEvent("Candle Lighting", zmanim.sunsetOffset(-18, true), tzid),
                    createICSEvent("Sunset", zmanim.sunset(), tzid),
                    createICSEvent("Tzeit Hakochavim", zmanim.tzeit(), tzid)
                );
            }

            const icsData = generateICSContent(events);
            conversionMessage.textContent = 'Conversion successful!';
            outputSection.style.display = 'block';
            downloadButton.onclick = function() {
                downloadICS(icsData);
            };
        } catch (error) {
            conversionMessage.textContent = 'Error: ' + error.message;
            console.error('Zmanim Generation Error:', error);
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

    function downloadICS(icsData) {
        const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'zmanim.ics';
        link.click();
    }
});
