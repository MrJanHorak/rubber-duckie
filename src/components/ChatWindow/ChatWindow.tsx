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
        <div className='conversation-message' key={i}>
          {String(message.text)}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
