import { useEffect, useState } from 'react';

import Message from './Message';

import '../styles/MessagesDisplay.css';

export default function MessagesDisplay({ socket }) {
  const [messagesHistory, setMessagesHistory] = useState([]);

  useEffect(() => {
    socket.emit("update-messages-history-request");

    socket.on('update-messages-history', (data) => {
      setMessagesHistory(data.messagesHistory);
    });
  }, []);
  

  let messageComponents = [];
  for (let i = 0; i < messagesHistory.length; i++) {

    /* 
      Check whether the message forms a chain with the previous one and
      decide if the username should be displayed on top of the message box.
    */
    let displayUsername = true;
    if (i > 0) {
      if (messagesHistory[i].username === messagesHistory[i-1].username) {
        displayUsername = false;
      }
    }

    messageComponents.push(
      <Message
      key={i} 
      username={messagesHistory[i].username}
      displayUsername={displayUsername}
      own={messagesHistory[i].userId === socket.id}
      >
        {messagesHistory[i].content}
      </Message>
    );
  }

  return (
    <div className="MessagesDisplay">
      {/* The array with messages must be reversed for
      CSS flexbox to work correctly */}
      {messageComponents.reverse()}
    </div>
  );
}
