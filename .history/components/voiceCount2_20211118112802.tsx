import { useEffect, useState } from "react";

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
  const [recognition, setRecognition] = useState<any>(undefined);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    const SpeechGrammarList =
      (window as any).SpeechGrammarList ||
      (window as any).webkitSpeechGrammarList;

    const recognitionObj = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognitionObj.grammars = speechRecognitionList;
    recognitionObj.continuous = true;
    recognitionObj.lang = "en-US";
    recognitionObj.interimResults = true;
    recognitionObj.maxAlternatives = 1;
    recognitionObj.onresult = (event: any) => {
      console.log("onresult", event.results);
      setTranscript(
        Object.keys(event.results).reduce((key, transcript) => {
          // console.log("event.results[key] :>> ", key, event.results[key]);
          if (
            key.length > 0 &&
            event.results[key] &&
            event.results[key][0] &&
            event.results[key][0].transcript
          ) {
            return transcript + event.results[key][0].transcript;
          }
          return transcript;
        }, "")
      );
    };
    recognitionObj.onnomatch = (event: any) => {
      console.log("onnomatch: ", event);
    };
    recognitionObj.onerror = (event: any) => {
      console.log("onerror: ", event);
    };
    recognitionObj.onspeechend = (event: any) => {
      console.log("onspeechend: ", event);
    };
    setRecognition(recognitionObj);
  }, []);

  if (!recognition) {
    return <div>Setting up</div>;
  }

  return (
    <div>
      <button onClick={() => recognition.start()}>Start</button>
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
      {/* <button onClick={resetTranscript}>Reset</button> */}
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceCount;
