export default function Message({ username, children, own }) {
  return (
    <div 
    className="Message"
    style={
      own ? {
        alignSelf: "end",
        backgroundColor: "#4AF"
      } : {
        alignSelf: "start",
        backgroundColor: "#EEE"
      }
    }>
      <p><b>{username}</b> {children}</p>
    </div>
  );
}