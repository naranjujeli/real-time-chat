import React from 'react';
import { useState } from 'react';
import io from 'socket.io-client';

import ChatContainer from './ChatContainer';
import PopUp from './PopUp';

import '../styles/App.css';

const PORT = 3001;
const socket = io.connect(`http://${process.env.REACT_APP_HOST}:${PORT}`);

export default function App() {
  const [ answer, setAnswer ] = useState("");

  return (
    <div className="App">
      <ChatContainer socket={socket} />
      <PopUp message="You need a username to enter this application" answer={answer} setAnswer={setAnswer} />
    </div>
  );
}