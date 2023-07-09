import '../styles/Button.css';

export default function Button({ classes, handleClick, children }) {
  return (
    <button className={`Button ${classes}`} onClick={handleClick}>
      {children}
    </button>
  );
}