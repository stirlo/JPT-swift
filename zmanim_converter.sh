#!/bin/bash

parse_zmanim() {
    while IFS= read -r line; do
        name=$(echo "$line" | cut -d'-' -f1 | xargs)
        datetime=$(echo "$line" | cut -d'-' -f2 | xargs)
        echo "$name|$datetime"
    done
}

convert_to_ics() {
    echo "BEGIN:VCALENDAR"
    echo "VERSION:2.0"
    echo "PRODID:-//Zmanim to ICS Converter//EN"
    echo "CALSCALE:GREGORIAN"

    while IFS='|' read -r name datetime; do
        start=$(date -d "$datetime" +"%Y%m%dT%H%M%S")
        end=$(date -d "$datetime + 1 hour" +"%Y%m%dT%H%M%S")

        echo "BEGIN:VEVENT"
        echo "SUMMARY:$name"
        echo "DTSTART:${start}Z"
        echo "DTEND:${end}Z"
        echo "END:VEVENT"
    done

    echo "END:VCALENDAR"
}

# Usage
input="Alot Hashachar - September 23, 2023 5:12
Talit and Tefilin - September 23, 2023 5:44
Sunrise - September 23, 2023 6:39"

echo "$input" | parse_zmanim | convert_to_ics > zmanim.ics
