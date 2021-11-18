const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const SpeechGrammarList =
  (window as any).SpeechGrammarList || (window as any).webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  (window as any).SpeechRecognitionEvent ||
  (window as any).webkitSpeechRecognitionEvent;

const VoiceCount = () => {
  return <div>Hi</div>;
};

export default VoiceCount;
