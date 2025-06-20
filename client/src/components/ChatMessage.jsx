import React from 'react';
import '../styles/ChatMessage.css';

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      <div className="message-content">
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;