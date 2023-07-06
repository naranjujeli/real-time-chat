import React from 'react';
import io from 'socket.io-client';

import ChatContainer from './ChatContainer';

import '../styles/App.css';

const PORT = 3001;
const socket = io.connect(`http://${process.env.REACT_APP_HOST}:${PORT}`);

export default function App() {
  return (
    <div className="App">
      <ChatContainer socket={socket} />
    </div>
  );
}