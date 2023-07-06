import TextInput from './TextInput';
import SendButton from './SendButton';

import '../styles/ChatControls.css';

export default function ChatControls() {
  return (
    <div className="ChatControls">
      <TextInput />
      <SendButton />
    </div>
  );
}