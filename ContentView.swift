
import SwiftUI

struct ContentView: View {
    @State private var inputText = ""
    @State private var outputText = ""

    var body: some View {
        VStack {
            TextEditor(text: $inputText)
                .border(Color.gray, width: 1)
                .padding()

            Button("Convert to ICS") {
                let zmanim = ZmanimConverter.parseZmanim(inputText)
                outputText = ZmanimConverter.convertToICS(zmanim)
            }
            .padding()

            TextEditor(text: $outputText)
                .border(Color.gray, width: 1)
                .padding()

            Button("Save ICS") {
                saveICS(outputText)
            }
            .padding()
        }
    }

    func saveICS(_ icsContent: String) {
        let filename = "zmanim.ics"
        let path = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0].appendingPathComponent(filename)

        do {
            try icsContent.write(to: path, atomically: true, encoding: .utf8)
            print("ICS file saved successfully")
        } catch {
            print("Failed to save ICS file: \(error.localizedDescription)")
        }
    }
}

// Include the ZmanimConverter class here (from the Swift example above)

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
