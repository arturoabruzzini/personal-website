import { useEffect, useState } from "react";

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const SpeechGrammarList =
  (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  (window as any).SpeechRecognitionEvent ||
  (window as any).webkitSpeechRecognitionEvent;

const colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral",
  "crimson",
  "cyan",
  "fuchsia",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lime",
  "linen",
  "magenta",
  "maroon",
  "moccasin",
  "navy",
  "olive",
  "orange",
  "orchid",
  "peru",
  "pink",
  "plum",
  "purple",
  "red",
  "salmon",
  "sienna",
  "silver",
  "snow",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "white",
  "yellow",
];
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = " + colors.join(" | ") + " ;";

const VoiceCount = () => {
  const [recognition, setRecognition] = useState(undefined);

  useEffect(() => {
    const recognitionObj = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognitionObj.grammars = speechRecognitionList;
    recognitionObj.continuous = false;
    recognitionObj.lang = "en-US";
    recognitionObj.interimResults = false;
    recognitionObj.maxAlternatives = 1;
    setRecognition(recognitionObj);
  }, []);

  useEffect(() => {
    const onResult = (event: any) => {
      var color = event.results[0][0].transcript;
      diagnostic.textContent = "Result received: " + color + ".";
      bg.style.backgroundColor = color;
      console.log("Confidence: " + event.results[0][0].confidence);
    };
  });

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => recognition.start()}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceCount;
