import Chat from './Chat';
import ChatControls from './ChatControls';

import '../styles/ChatContainer.css';

export default function ChatContainer({ socket }) {
  return (
    <div className="ChatContainer">
      <Chat socket={socket} />
      <ChatControls socket={socket} />
    </div>
  );
}