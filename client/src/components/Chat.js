import { useEffect, useState } from 'react';

import Message from './Message';

import '../styles/Chat.css';

export default function Chat({ socket }) {
  const [messagesHistory, setMessagesHistory] = useState([]);

  useEffect(() => {
    socket.on('update-messages-history', (data) => {
      setMessagesHistory(data.messagesHistory);
    });
  }, []);
  

  let messageComponents = [];
  for (let i = 0; i < messagesHistory.length; i++) {
    messageComponents.push(
      <Message key={i} username={messagesHistory[i].userId}>{messagesHistory[i].content}</Message>
    );
  }

  return (
    <div className="Chat">
      {/* The array with messages must be reversed for
      CSS flexbox to work correctly */}
      {messageComponents.reverse()}
    </div>
  );
}