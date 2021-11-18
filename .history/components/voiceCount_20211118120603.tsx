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
    let tempCount = 0;
    const numbers = transcript
      .split(" ")
      .map((word) => parseInt(word, 10))
      .filter((number) => !Number.isNaN(number));
    numbers.forEach((number) => {
      console.log(tempCount);
      const decades = Math.floor(tempCount / 10);
      if (number < 10) {
        tempCount = decades * 10 + number;
      }
      console.log(tempCount, decades, number);
    });
    // console.log("numbers :>> ", numbers);
    setCount(tempCount);
  }, [transcript]);

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
      <p>Count: {count}</p>
    </div>
  );
};

export default VoiceCount;
