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
      <ul>
        {conversation.map((message, i) => (
          <li key={i}>{String(message)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatWindow;
