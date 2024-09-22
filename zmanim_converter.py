from datetime import datetime, timedelta

def parse_zmanim(input_str):
    zmanim = []
    for line in input_str.split('\n'):
        parts = line.split(' - ')
        if len(parts) == 2:
            name = parts[0].strip()
            time_str = parts[1].strip()
            time = datetime.strptime(time_str, "%B %d, %Y %H:%M")
            zmanim.append((name, time))
    return zmanim

def convert_to_ics(zmanim):
    ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Zmanim to ICS Converter//EN",
        "CALSCALE:GREGORIAN"
    ]

    for name, time in zmanim:
        start = time.strftime("%Y%m%dT%H%M%SZ")
        end = (time + timedelta(hours=1)).strftime("%Y%m%dT%H%M%SZ")

        ics.extend([
            "BEGIN:VEVENT",
            f"SUMMARY:{name}",
            f"DTSTART:{start}",
            f"DTEND:{end}",
            "END:VEVENT"
        ])

    ics.append("END:VCALENDAR")
    return "\n".join(ics)

# Usage
input_str = """Alot Hashachar - September 23, 2023 5:12
Talit and Tefilin - September 23, 2023 5:44
Sunrise - September 23, 2023 6:39"""

zmanim = parse_zmanim(input_str)
ics_content = convert_to_ics(zmanim)
print(ics_content)
