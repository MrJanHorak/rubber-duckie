import React from 'react';
import './InputArea.css';

// components
import ListenButton from '../ListenButton/ListenButton';
interface InputAreaProps {
  onUserInput: (input: string) => void;
  onSpeechInput: (input: string) => void;
  stopListening: () => void;
}

const InputArea: React.FC<InputAreaProps> = ({
  // onUserInput,
  onSpeechInput,
  stopListening,
}) => {
  // const [input, setInput] = React.useState('');

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.target.value);
  // };

  // const handleUserInput = () => {
  //   onUserInput(input);
  //   setInput('');
  // };

  return (
    <ListenButton onSpeechInput={onSpeechInput} stopListening={stopListening} />
  );
};

export default InputArea;
