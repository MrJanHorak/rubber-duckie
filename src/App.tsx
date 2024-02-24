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
            `Please analyze the input provided by the user carefully. Your response should be analytical, focusing on understanding and clarifying the user's statements and questions. Begin your response by summarizing or repeating back the key points of the user's input to ensure accurate comprehension. Use phrases like 'If I understand you correctly,' or 'So, you are saying that' to reflect understanding. Follow this with any clarifying questions you might have to dive deeper into the user's inquiry or statement. Your goal is to engage in a reflective dialogue that helps both you and the user reach a clearer understanding of the topic at hand. Be sure to maintain a neutral and inquisitive tone throughout`,
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

  const stopListening = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.stop();
  };

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

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(
      data.choices[0].message.content
    );
    utterance.rate = 1.2;
    synth.speak(utterance);

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

    stopListening();

    // use speech synthesis to speak the response
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(
      data.choices[0].message.content
    );
    synth.speak(utterance);

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
        stopListening={stopListening}
      />
    </div>
  );
}

export default App;
