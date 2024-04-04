import Chat from "./Chat";

const ChatLog = (props) => {
  const { chatLog } = props;

  return (
    <div className="h-[90vh] px-3 py-5">
      <ul>
        {chatLog.map((log, index) => {
          return <Chat key={index} role={log.role} content={log.content} />;
        })}
      </ul>
    </div>
  );
};
export default ChatLog;
