export default function TextInput({ messageContent, setMessageContent }) {
  function handleChange(event) {
    setMessageContent(event.target.value);
  }
  
  return (
    <input
    className="TextInput" 
    type="text" 
    placeholder="Write your message..." 
    value={messageContent} 
    onChange={handleChange} 
    />
  );
}