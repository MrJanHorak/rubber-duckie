import React from 'react';
import './InputArea.css';

// components
import ListenButton from '../ListenButton/ListenButton';
interface InputAreaProps {
  onUserInput: (input: string) => void;
  onSpeechInput: (input: string) => void;
}

const InputArea: React.FC<InputAreaProps> = ({
  onUserInput,
  onSpeechInput,
}) => {
  const [input, setInput] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleUserInput = () => {
    onUserInput(input);
    setInput('');
  };

  return (
    <>
      <div className='input-area'>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          placeholder='Type your message here...'
        />
        <div className='button-container'>
          <ListenButton onSpeechInput={onSpeechInput} />
          <button onClick={handleUserInput}>Send</button>
        </div>
      </div>
    </>
  );
};

export default InputArea;
