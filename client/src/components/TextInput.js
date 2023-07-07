export default function TextInput({ messageContent, setMessageContent }) {
  function handleChange(event) {
    setMessageContent(event.target.value);
  }
  
  return (
    <input className="TextInput" value={messageContent} onChange={handleChange} type="text" placeholder="Write your message..." />
  );
}