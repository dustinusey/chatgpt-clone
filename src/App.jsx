import { useState } from "react";
import ChatLog from "./Components/ChatLog";
import NewChat from "./Components/NewChat";

const App = () => {
  const [chatLog, setChatLog] = useState([]);

  return (
    <div className="min-h-screen bg-zinc-800 text-white">
      <ChatLog chatLog={chatLog} setChatLog={setChatLog} />
      <NewChat chatLog={chatLog} setChatLog={setChatLog} />
    </div>
  );
};
export default App;
