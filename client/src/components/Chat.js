import MessagesDisplay from './MessagesDisplay';
import ChatControls from './ChatControls';

import '../styles/Chat.css';

export default function Chat({ socket }) {
  return (
    <div className="Chat">
      <MessagesDisplay socket={socket} />
      <ChatControls socket={socket} />
    </div>
  );
}