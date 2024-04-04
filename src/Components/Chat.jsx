import classNames from "classnames";

const Chat = (props) => {
  const { content, role } = props;
  const chatterClasses = classNames(
    {
      "bg-orange": role === "assistant",
    },
    "bg-gray-200 min-w-5 min-h-5 rounded-full block"
  );

  return (
    <li className="flex items-start">
      <span className={chatterClasses}></span>
      <p className="p-5 pt-0 text-white">{content}</p>
    </li>
  );
};
export default Chat;
