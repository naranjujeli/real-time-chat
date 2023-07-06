export default function TextInput({ setMessageContent }) {
  function handleChange(event) {
    setMessageContent(event.target.value);
  }
  
  return (
    <input className="TextInput" onChange={handleChange} type="text" placeholder="Write your message..." />
  );
}