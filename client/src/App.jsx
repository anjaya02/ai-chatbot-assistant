import React from 'react';
import Header from './components/Header';
import ChatBox from './components/ChatBox';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ChatBox />
      </main>
      <footer className="footer">
        <p>AI Chatbot Assistant © 2025</p>
      </footer>
    </div>
  );
}

export default App;