import React from 'react';
import './ListenButton.css';

interface ListenButtonProps {
  onSpeechInput: (input: string) => void;
}

const ListenButton: React.FC<ListenButtonProps> = ({ onSpeechInput }) => {
  const [listening, setListening] = React.useState(false);

  const handleSpeechInput = () => {
    if (listening) {
      setListening(false);
    } else {
      setListening(true);
    }
  };

  React.useEffect(() => {
    if (listening) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      recognition.start();

      recognition.onresult = (e: any) => {
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