// chat window component

import React, { useEffect } from 'react';

import './ChatWindow.css';
import { Conversation } from '../../types/types';

interface ChatWindowProps {
  conversation: Conversation;
  rubberDuckImage: string;
}
const ChatWindow: React.FC<ChatWindowProps> = ({ conversation, rubberDuckImage }) => {
  useEffect(() => {
    const chatWindow = document.querySelector('.chat-window');
    chatWindow?.scrollTo({
      top: chatWindow.scrollHeight,
      behavior: 'smooth',
    });
  }, [conversation]);

  return (
    <div className='chat-window'>
      {conversation.map((message, i) => (
        <div
          className={`conversation-message ${
            message.user === 'rubber-duck' ? 'rubber-duck-response' : 'user'
          }`}
          key={i}
        >
          <div className='text-container'>
            {message.user === 'rubber-duck' ? <img id='response-duck-image' src={rubberDuckImage} alt={'rubber duck logo'} /> : ''}
            <span className='text'>{String(message.text)}</span>
            {message.user === 'user' ? '👩‍💻' : ''}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
