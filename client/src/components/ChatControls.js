import { useState } from 'react';

import TextInput from './TextInput';
import SendButton from './SendButton';
import DataValidation from '../utilities/DataValidation';

import '../styles/ChatControls.css';

export default function ChatControls({ socket }) {
  const [ messageContent, setMessageContent ] = useState("");

  const dataValidation = new DataValidation(
    {
      cantBeEmpty: true,
      cantBeWhitespace: true
    }, 
    messageContent
  );

  function sendMessage() {
    if (dataValidation.check()) {
      socket.emit("new-message", { content: messageContent });
      setMessageContent('');
    } else {
      alert("Message cannot be empty");
    }
  }

  return (
    <div className="ChatControls">
      <TextInput
      placeholder="Write a message..."
      value={messageContent}
      setValue={setMessageContent}
      action={sendMessage}
      />
      <SendButton handleClick={sendMessage} />
    </div>
  );
}