import React, { useState } from 'react';
import Header from './components/Header/Header';
import ChatWindow from './components/ChatWindow/ChatWindow';
import InputArea from './components/InputArea/InputArea';
import ListenButton from './components/ListenButton/ListenButton';
import RubberDuck from './components/RubberDuck/RubberDuck';
import ResponseArea from './components/ResponseArea/ResponseArea';

import './App.css';
import { Conversation } from './types/types';

const conversation: Conversation = [
  {
    text: 'Hello, I am a rubber duck. How can I help you?',
    user: 'rubber-duck',
    timestamp: Date.now(),
  },
  {
    text: 'I am a rubber duck, not a real duck. I am here to help you with your coding problems.',
    user: 'rubber-duck',
    timestamp: Date.now(),
  },
];

const handleUserInput = (input: string) => {
  console.log(input);
};

const handleSpeechInput = (input: string) => {
  console.log(input);
};

function App() {
  return (
    <div className='App'>
      <Header />
      <RubberDuck />
      <ChatWindow conversation={conversation} />
      <InputArea onUserInput={handleUserInput} onSpeechInput={handleSpeechInput} />
      <ResponseArea response='This is a response' />
    </div>
  );
}

export default App;
