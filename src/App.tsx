import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// components
import Header from './components/Header/Header';
import ChatWindow from './components/ChatWindow/ChatWindow';
import InputArea from './components/InputArea/InputArea';
import RubberDuck from './components/RubberDuck/RubberDuck';
// import ResponseArea from './components/ResponseArea/ResponseArea';

//styles
import './App.css';

//types
import { Conversation } from './types/types';

const generarteUniqueId = () => {
  return uuidv4();
};

const startConversation: Conversation = [
  {
    text: 'Hello, I am a rubber duck. How can I help you?',
    user: 'rubber-duck',
    timestamp: Date.now(),
  },
];

function App() {
  const [conversation, setConversation] = useState(startConversation);

  const handleUserInput = (input: string) => {
    const newMessage = {
      id: generarteUniqueId(),
      text: input,
      user: 'user',
      timestamp: Date.now(),
    };
    setConversation((prevConversation) => [...prevConversation, newMessage]);
    console.log(input);
  };

  const handleSpeechInput = (input: string) => {
    const newMessage = {
      id: generarteUniqueId(),
      text: input,
      user: 'user',
      timestamp: Date.now(),
    };
    setConversation((prevConversation: Conversation[]) => [
      ...prevConversation,
      newMessage,
    ]); //
    console.log(input);
  };

  return (
    <div className='App'>
      <Header />
      <RubberDuck />
      <ChatWindow conversation={conversation} />
      {/* <ResponseArea response='This is a response' /> */}
      <InputArea
        onUserInput={handleUserInput}
        onSpeechInput={handleSpeechInput}
      />
    </div>
  );
}

export default App;
