document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    console.log('Hebcal library status:', typeof hebcal !== 'undefined' ? 'Loaded' : 'Not loaded');
    if (typeof hebcal !== 'undefined') {
        console.log('Hebcal object:', hebcal);
        console.log('GeoLocation:', hebcal.GeoLocation);
        console.log('Zmanim:', hebcal.Zmanim);
    }

    const form = document.getElementById('zmanim-form');
    const outputSection = document.getElementById('output-section');
    const conversionMessage = document.getElementById('conversion-message');
    const previewContent = document.getElementById('preview-content');
    const downloadButton = document.getElementById('download-ics');
    const getLocationButton = document.getElementById('get-location');

    form.addEventListener('submit', handleFormSubmit);
    getLocationButton.addEventListener('click', getCurrentLocation);

    function handleFormSubmit(event) {
        event.preventDefault();

        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;
        const tzid = document.getElementById('timezone').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;

        console.log('Form submission values:', { latitude, longitude, tzid, startDate, endDate });

        generateZmanim(latitude, longitude, tzid, startDate, endDate);
    }

    function getCurrentLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                document.getElementById('latitude').value = position.coords.latitude.toFixed(3);
                document.getElementById('longitude').value = position.coords.longitude.toFixed(3);
                document.getElementById('timezone').value = Intl.DateTimeFormat().resolvedOptions().timeZone;
            }, function(error) {
                console.error("Error getting location:", error);
                alert("Unable to retrieve your location. Please enter it manually.");
            });
        } else {
            alert("Geolocation is not supported by your browser. Please enter your location manually.");
        }
    }

    function generateZmanim(latitude, longitude, tzid, startDate, endDate) {
        console.log('generateZmanim called with:', { latitude, longitude, tzid, startDate, endDate });

        try {
            if (!latitude || !longitude || !tzid || !startDate || !endDate) {
                throw new Error('Missing required parameters');
            }

            latitude = parseFloat(latitude).toFixed(3);
            longitude = parseFloat(longitude).toFixed(3);

            if (isNaN(latitude) || isNaN(longitude)) {
                throw new Error('Invalid latitude or longitude');
            }

            console.log('Parsed values:', { latitude, longitude, tzid, startDate, endDate });

            if (typeof hebcal === 'undefined') {
                throw new Error('Hebcal library is not loaded');
            }

            console.log('Hebcal object:', hebcal);

            if (!hebcal.GeoLocation || !hebcal.Zmanim) {
                throw new Error('Required Hebcal components are not available');
            }

            console.log('Creating GeoLocation with:', { latitude, longitude, tzid });
            const location = new hebcal.GeoLocation(null, latitude, longitude, 0, tzid);

            // Generate zmanim for each day in the date range
            const start = new Date(startDate);
            const end = new Date(endDate);
            let currentDate = new Date(start);

            let icsContent = [
                'BEGIN:VCALENDAR',
                'VERSION:2.0',
                'PRODID:-//Zmanim Converter//EN'
            ];

            while (currentDate <= end) {
                const zmanim = new hebcal.Zmanim(location, currentDate);

                // Add zmanim events to ICS content
                icsContent.push(
                    'BEGIN:VEVENT',
                    `DTSTART:${formatDate(zmanim.sunrise)}`,
                    `SUMMARY:Sunrise`,
                    'END:VEVENT',

                    'BEGIN:VEVENT',
                    `DTSTART:${formatDate(zmanim.sunset)}`,
                    `SUMMARY:Sunset`,
                    'END:VEVENT'
                );

                currentDate.setDate(currentDate.getDate() + 1);
            }

            icsContent.push('END:VCALENDAR');

            const icsString = icsContent.join('\r\n');
            previewContent.textContent = icsString;
            conversionMessage.textContent = 'ICS file generated successfully!';
            downloadButton.style.display = 'block';
            outputSection.style.display = 'block';

            // Set up download button
            downloadButton.onclick = () => {
                const blob = new Blob([icsString], { type: 'text/calendar;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'zmanim.ics';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };

        } catch (error) {
            console.error('Error in generateZmanim:', error);
            conversionMessage.textContent = `Error: ${error.message}. Please check your inputs and try again.`;
            outputSection.style.display = 'block';
        }
    }

    function formatDate(date) {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    }
});
