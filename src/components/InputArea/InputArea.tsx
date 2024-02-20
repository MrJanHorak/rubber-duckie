import React from 'react';
import './InputArea.css';

interface InputAreaProps {
  onUserInput: (input: string) => void;
}

const InputArea: React.FC<InputAreaProps> = ({ onUserInput }) => {
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
        <button onClick={handleUserInput}>Send</button>
      </div>
    </>
  );
};

export default InputArea;
