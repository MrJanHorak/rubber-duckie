// chat window component

import React from 'react';

import './ChatWindow.css';
import { Conversation } from '../../types/types';

interface ChatWindowProps {
  conversation: Conversation;
}
const ChatWindow: React.FC<ChatWindowProps> = ({ conversation }) => {
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
            {message.user === 'rubber-duck' ? '🦆' : ''}
            <span className='text' >{String(message.text)}</span>
            {message.user === 'user' ? '👩‍💻' : ''}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
