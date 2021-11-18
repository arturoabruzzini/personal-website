import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceCount = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  return <div>Hi</div>;
};

export default VoiceCount;
