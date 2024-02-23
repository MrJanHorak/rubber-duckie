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

const generateUniqueId = () => {
  return uuidv4();
};
const sendMessageToModel = async (message: string) => {
  const response = await fetch('http://localhost:1234/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages: [
        {
          role: 'system',
          content:
            'You are a speaking rubber duck for developers working on projects and coding. Always answer by asking clarifying questions to help the user think through the process, problem or program they are working on.',
        },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: -1,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  console.log(response);
  const data = await response.json();
  return data;
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

  const handleUserInput = async (input: string) => {
    const newMessage = {
      id: generateUniqueId(),
      text: input,
      user: 'user',
      timestamp: Date.now(),
    };

    setConversation((prevConversation) => [...prevConversation, newMessage]);

    // Call the GPT API with the user's input
    const data = await sendMessageToModel(input);

    // Add the response to the conversation
    const responseMessage = {
      id: generateUniqueId(),
      text: data.choices[0].message.content,
      user: 'rubber-duck',
      timestamp: Date.now(),
    };
    setConversation((prevConversation) => [
      ...prevConversation,
      responseMessage,
    ]);
  };

  const handleSpeechInput = async (input: string) => {
    const newMessage = {
      id: generateUniqueId(),
      text: input,
      user: 'user',
      timestamp: Date.now(),
    };
    setConversation((prevConversation) => [...prevConversation, newMessage]);
    // Call the GPT API with the user's input

    const data = await sendMessageToModel(input);

    // Add the response to the conversation
    const responseMessage = {
      id: generateUniqueId(),
      text: data.choices[0].message.content,
      user: 'rubber-duck',
      timestamp: Date.now(),
    };
    setConversation((prevConversation) => [
      ...prevConversation,
      responseMessage,
    ]);
  };

  return (
    <div className='App'>
      <Header />
      <RubberDuck />
      <ChatWindow conversation={conversation} />
      <InputArea
        onUserInput={handleUserInput}
        onSpeechInput={handleSpeechInput}
      />
    </div>
  );
}

export default App;
