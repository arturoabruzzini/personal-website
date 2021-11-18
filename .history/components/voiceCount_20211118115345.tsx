import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceCount = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  useEffect(() => {
    const recognition: any = SpeechRecognition.getRecognition();
    recognition.interim = true;
  }, []);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const tempCount = 0;
    const numbers = transcript.split(" ").filter((word) => parseInt(word, 10));
  }, []);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser doesnt support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() => SpeechRecognition.startListening({ continuous: true })}
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceCount;
