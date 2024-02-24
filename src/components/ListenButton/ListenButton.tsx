import React, {useEffect} from 'react';
import './ListenButton.css';

interface ListenButtonProps {
  onSpeechInput: (input: string) => void;
  stopListening: () => void;
}

const ListenButton: React.FC<ListenButtonProps> = ({ onSpeechInput }) => {
  const [listening, setListening] = React.useState(false);

  const recognitionRef = React.useRef<any>(null);

  const handleSpeechInput = () => {
    if (listening) {
      setListening(false);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    } else {
      setListening(true)
    }
  };

 useEffect(() => {
    if (listening) {
      recognitionRef.current = new (window as any).webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.start();

      recognitionRef.current.onresult = (e: any) => {
        const transcript = Array.from(e.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');

        if (e.results[0].isFinal) {
          onSpeechInput(transcript);
        }
      }
    }
  }
  , [listening, onSpeechInput]);



  return (
    <div className='listen-button'>
      <button onClick={handleSpeechInput}>
        {listening ? 'Stop listening' : 'Start listening'}
      </button>
    </div>
  );
};

export default ListenButton;