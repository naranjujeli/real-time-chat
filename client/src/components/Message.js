export default function Message({ username, children }) {
  return (
    <div className="Message">
      <p><b>{username}</b> {children}</p>
    </div>
  );
}