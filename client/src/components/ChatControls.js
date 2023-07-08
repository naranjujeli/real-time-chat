import { useState } from 'react';

import TextInput from './TextInput';
import SendButton from './SendButton';

import '../styles/ChatControls.css';

export default function ChatControls({ socket }) {
  const [ messageContent, setMessageContent ] = useState("");

  function sendMessage() {
    if (messageContent != "") {
      socket.emit("new-message", { content: messageContent });
      setMessageContent('');
    } else {
      alert("Message content is not valid. Therefore, no message will be sent.");
    }
  }

  return (
    <div className="ChatControls">
      <TextInput 
      placeholder="Write a message..." 
      content={messageContent} 
      setContent={setMessageContent} 
      action={sendMessage}
      />
      <SendButton handleClick={sendMessage} />
    </div>
  );
}