import { useState } from 'react';

import TextInput from './TextInput';
import SendButton from './SendButton';

import '../styles/ChatControls.css';

export default function ChatControls({ socket }) {
  const [ messageContent, setMessageContent ] = useState("");

  return (
    <div className="ChatControls">
      <TextInput messageContent={messageContent} setMessageContent={setMessageContent} />
      <SendButton socket={socket} messageContent={messageContent} setMessageContent={setMessageContent} />
    </div>
  );
}