import Foundation

struct Zman {
    let name: String
    let time: Date
}

class ZmanimConverter {
    static func parseZmanim(_ input: String) -> [Zman] {
        // This is a simplified parser. You may need to adjust based on the exact input format.
        let lines = input.components(separatedBy: .newlines)
        var zmanim: [Zman] = []
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MMMM d, yyyy HH:mm"

        for line in lines {
            let components = line.components(separatedBy: " - ")
            if components.count == 2 {
                let name = components[0].trimmingCharacters(in: .whitespaces)
                if let time = dateFormatter.date(from: components[1].trimmingCharacters(in: .whitespaces)) {
                    zmanim.append(Zman(name: name, time: time))
                }
            }
        }
        return zmanim
    }

    static func convertToICS(_ zmanim: [Zman]) -> String {
        var ics = """
        BEGIN:VCALENDAR
        VERSION:2.0
        PRODID:-//Zmanim to ICS Converter//EN
        CALSCALE:GREGORIAN
        """

        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyyMMdd'T'HHmmss'Z'"
        dateFormatter.timeZone = TimeZone(secondsFromGMT: 0)

        for zman in zmanim {
            let start = dateFormatter.string(from: zman.time)
            let end = dateFormatter.string(from: zman.time.addingTimeInterval(3600)) // Add 1 hour

            ics += """

            BEGIN:VEVENT
            SUMMARY:\(zman.name)
            DTSTART:\(start)
            DTEND:\(end)
            END:VEVENT
            """
        }

        ics += "\nEND:VCALENDAR"
        return ics
    }
}

// Usage
let input = """
Alot Hashachar - September 23, 2023 5:12
Talit and Tefilin - September 23, 2023 5:44
Sunrise - September 23, 2023 6:39
"""

let zmanim = ZmanimConverter.parseZmanim(input)
let icsContent = ZmanimConverter.convertToICS(zmanim)
print(icsContent)
