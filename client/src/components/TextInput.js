import '../styles/TextInput.css';

export default function TextInput({ content, setContent, placeholder, action }) {
  function handleChange(event) {
    setContent(event.target.value);
  }
  
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      action();
    }
  }

  return (
    <input
    className="TextInput" 
    type="text" 
    placeholder={placeholder}
    value={content} 
    onChange={handleChange} 
    onKeyDown={handleKeyDown}
    />
  );
}