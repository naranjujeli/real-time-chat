import '../styles/TextInput.css';

export default function TextInput({ content, setContent, placeholder }) {
  function handleChange(event) {
    setContent(event.target.value);
  }
  
  return (
    <input
    className="TextInput" 
    type="text" 
    placeholder={placeholder}
    value={content} 
    onChange={handleChange} 
    />
  );
}