import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceCount = () => {
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    let tempCount = 0;
    const numbers = transcript
      .split(" ")
      .map((word) => parseInt(word, 10))
      .filter((number) => !Number.isNaN(number));
    const cleanedNumbers: number[] = [];
    numbers.forEach((number) => {
      if (number <= 10) {
        cleanedNumbers.push(number);
      } else if (number <= 20) {
        cleanedNumbers.push(number - 10);
      } else {
        const matches = number.toString().match(/10|[1-9]/g);
        matches?.forEach((match) => {
          const numberMatch = parseInt(match, 10);
          if (!Number.isNaN(numberMatch)) {
            cleanedNumbers.push(numberMatch);
          }
        });
      }
    });
    cleanedNumbers.forEach((number) => {
      const decades = Math.floor(tempCount / 10);
      if (number <= 10) {
        tempCount = decades * 10 + number;
      }
    });
    setCount(tempCount);
  }, [transcript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser doesnt support speech recognition.</span>;
  }

  return (
    <div>
      <p>{listening ? "Listening" : "Off"}</p>
      {listening ? (
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
      ) : (
        <button
          onClick={() => {
            SpeechRecognition.startListening({ continuous: true });
            setStarted(true);
          }}
        >
          Start
        </button>
      )}
      {started && <button onClick={resetTranscript}>Reset</button>}
      {started && <p>Count: {count}</p>}
      <p>transcript: {transcript}</p>
      <p>interimTranscript: {interimTranscript}</p>
      <p>finalTranscript: {finalTranscript}</p>
    </div>
  );
};

export default VoiceCount;
