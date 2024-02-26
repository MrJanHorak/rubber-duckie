import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// components
import Header from './components/Header/Header';
import ChatWindow from './components/ChatWindow/ChatWindow';
import InputArea from './components/InputArea/InputArea';
import RubberDuck from './components/RubberDuck/RubberDuck';
import ChooseDucky from './components/ChooseDucky/ChooseDucky';
import ChooseBGTile from './components/ChooseBGTile/ChooseBGTile';

// assets
import rubberDuck4 from './assets/images/rubberDucks/duck4.jpeg';
import bg1 from './assets/images/backgroundTiles/bckgroundTile (1).png';

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
          content: `Please analyze the input provided by the user carefully. Your response should be analytical, focusing on understanding and clarifying the user's statements and questions. Begin your response by summarizing or repeating back the key points of the user's input to ensure accurate comprehension. Use phrases like 'If I understand you correctly,' or 'So, you are saying that' to reflect understanding. Follow this with any clarifying questions you might have to dive deeper into the user's inquiry or statement. Your goal is to engage in a reflective dialogue that helps both you and the user reach a clearer understanding of the topic at hand. Be sure to maintain a neutral and inquisitive tone throughout`,
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
  const [rubberDuckImage, setRubberDuckImage] = useState(rubberDuck4);
  const [backgroundTile, setBackgroundTile] = useState(`url(${bg1})`);
  const [showChooseDucky, setShowChooseDucky] = useState(false);
  const [showChooseBG, setShowChooseBG] = useState(false);

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

    const data = await sendMessageToModel(input);

    stopListening();

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(
      data.choices[0].message.content
    );
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

  const handleBackgroundClick = () => {
    setShowChooseBG(true);
  };

  useEffect(() => {}, [
    showChooseBG,
    showChooseDucky,
    rubberDuckImage,
    backgroundTile,
  ]);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target === document.documentElement) {
        handleBackgroundClick();     
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener('click', handleClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
      <div className='App'>
        <Header />
        {showChooseDucky && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 100,
            }}
          >
            <ChooseDucky
              rubberDuckImage={rubberDuckImage}
              setRubberDuckImage={setRubberDuckImage}
              setShowChooseDucky={setShowChooseDucky}
            />
          </div>
        )}
        {showChooseBG && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 100,
            }}
          >
            <ChooseBGTile
              backgroundTile={backgroundTile}
              setBackgroundTile={setBackgroundTile}
              setShowChooseBG={setShowChooseBG}
            />
          </div>
        )}
        <RubberDuck
          rubberDuckImage={rubberDuckImage}
          setShowChooseDucky={setShowChooseDucky}
        />
        <ChatWindow
          conversation={conversation}
          rubberDuckImage={rubberDuckImage}
        />
        <InputArea
          onUserInput={handleUserInput}
          onSpeechInput={handleSpeechInput}
          stopListening={stopListening}
        />
      </div>
  );
}

export default App;
