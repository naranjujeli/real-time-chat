import React from 'react';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import ChatContainer from './ChatContainer';
import PopUp from './PopUp';

import '../styles/App.css';

const PORT = 3001;
const socket = io.connect(`http://${process.env.REACT_APP_HOST}:${PORT}`);

export default function App() {
  const [ username, setUsername ] = useState(null);
  
  useEffect(() => {
    socket.on("new-user-accepted", (data) => {
      setUsername(data.username);
    });
  }, []);

  function saveUsername() {
    socket.emit("new-user-request", { username: usernamePopUpAnswer });
  }
  
  const [ usernamePopUpAnswer, setUsernamePopUpAnswer ] = useState("");

  return (
    <div className="App">
      {username && <ChatContainer socket={socket} />}
      {!username && <PopUp
      message="You need a username to enter this application. Please, write it below."
      answer={usernamePopUpAnswer}
      setAnswer={setUsernamePopUpAnswer}
      handleConfirm={saveUsername}
      />}
    </div>
  );
}