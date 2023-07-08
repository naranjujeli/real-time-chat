import '../styles/Message.css';

export default function Message({ username, children, own }) {
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
      <div className="MessageUsername">
        <b>{username}</b>
      </div>
      <div 
      className="MessageContent"
      style={
        own ? {
          alignSelf: "end",
          backgroundColor: "#4AF"
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