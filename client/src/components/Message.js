import '../styles/Message.css';

export default function Message({ username, children, displayUsername, own }) {
  return (
    <div 
    className="Message"
    style={
      own ? {
        alignItems: "end"
      } : {
        alignItems: "start"
      }
    }
    >
      { displayUsername && <div className="MessageUsername">
        <b>{username}</b>
      </div> }
      <div 
      className="MessageContent"
      style={
        own ? {
          alignSelf: "end",
          backgroundColor: "#9DD"
        } : {
          alignSelf: "start",
          backgroundColor: "#EEE"
        }
      }
      >
        <p>{children}</p>
      </div>
    </div>
  );
}
