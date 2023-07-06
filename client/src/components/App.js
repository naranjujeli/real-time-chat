import React from 'react';
import io from 'socket.io-client';

import '../styles/App.css';

const PORT = 3001;
const socket = io.connect(`http://${process.env.REACT_APP_HOST}:${PORT}`);

export default function App() {
  return (
    <div className="App">
      <ChatContainer />
    </div>
  );
}

function ChatContainer() {
  return (
    <div className="ChatContainer">
      <Chat />
      <ChatControls />
    </div>
  );
}

function Chat() {
  let messages = [];
  for (let i = 0; i < 30; i++) {
    messages.push(<Message key={i}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...{i}</ Message>)
  }

  return (
    <div className="Chat">
      {/* The array with messages must be reversed for
      CSS flexbox to work correctly */}
      {messages.reverse()}
    </div>
  )
}

function Message({ children }) {
  return (
    <div className="Message">
      <p>
      {children}
      </p>
    </div>
  );
}

function ChatControls() {
  return (
    <div className="ChatControls">
      <TextInput />
      <SendButton />
    </div>
  );
}

function TextInput() {
  return (
    <input className="TextInput" type="text" placeholder="Write your message..." />
  );
}

function SendButton() {
  return (
    <button className="SendButton">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path fill="#555" d="M 10 40 L 80 25 L 40 50 Z" />
        <path fill="#555" d="M 47 53 L 80 25 L 70 70 Z" />
        <path fill="#555" d="M 40 53 L 50 60 L 40 70 Z" />
      </svg>
    </button>
  );
}