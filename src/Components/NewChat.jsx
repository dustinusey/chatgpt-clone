import axios from "axios";
import { useRef, useState } from "react";

const NewChat = (props) => {
  const [inputVal, setInputVal] = useState("");

  const { setChatLog, chatLog } = props;

  const userPrompt = useRef("");

  async function pingChatGPT() {
    userPrompt.current = inputVal;
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        max_tokens: 1000,
        model: "gpt-3.5-turbo-1106",
        messages: [
          ...chatLog,
          {
            role: "user",
            content: `${userPrompt.current}`,
          },
        ],
      },
      { headers: { Authorization: import.meta.env.VITE_API_KEY } }
    );

    setChatLog((prevChats) => [
      ...prevChats,
      {
        role: res.data.choices[0].message.role,
        content: res.data.choices[0].message.content,
      },
    ]);
  }

  return (
    <div className="h-[10vh] p-3 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setChatLog((prevChats) => [
            ...prevChats,
            { role: "user", content: inputVal },
          ]);
          pingChatGPT();
          setInputVal("");
        }}
        className="relative min-w-full"
      >
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          className="outline-none w-full p-5 text-gray-200 rounded-md bg-zinc-700"
          type="text"
          value={inputVal}
        />
        <button
          className="size-[45px] grid place-items-center rounded-md bg-orange absolute -translate-y-1/2 -translate-x-1/2 top-1/2 -right-3"
          type="submit"
        >
          <svg
            className="size-[20px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#ffffff"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>
      </form>
    </div>
  );
};
export default NewChat;
