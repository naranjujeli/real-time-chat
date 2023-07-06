import { useEffect, useState } from 'react';

import Message from './Message';

import '../styles/Chat.css';

export default function Chat({ socket }) {
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
  );
}