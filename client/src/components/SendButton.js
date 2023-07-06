export default function SendButton({ socket, messageContent }) {
  function sendMessage() {
    if (messageContent != "") {
      console.log("Sending data: " + messageContent);
      socket.emit("new-message", { content: messageContent });
    } else {
      alert("no papito, así no sirve");
    }
  }
  
  return (
    <button className="SendButton" onClick={sendMessage}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path fill="#555" d="M 10 40 L 80 25 L 40 50 Z" />
        <path fill="#555" d="M 47 53 L 80 25 L 70 70 Z" />
        <path fill="#555" d="M 40 53 L 50 60 L 40 70 Z" />
      </svg>
    </button>
  );
}