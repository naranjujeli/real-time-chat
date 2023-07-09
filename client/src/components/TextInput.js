import '../styles/TextInput.css';

export default function TextInput({ value, setValue, placeholder, action }) {
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
    value={value}
    onChange={(e) => setValue(e.target.value)}
    onKeyDown={handleKeyDown}
    />
  );
}