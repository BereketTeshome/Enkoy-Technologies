import { useState, useEffect, useRef } from "react";
import botIcon from "../assets/bot.svg";
import userIcon from "../assets/user.svg";
import send from "../assets/send.svg";
import axios from "axios";
import { useSelector } from "react-redux";


const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const generateUniqueId = () => {
    const timeStamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);
    return `id-${timeStamp}-${hexadecimalString}`;
  };

  const typeText = (uniqueId, text) => {
    let index = 0;
    const interval = setInterval(() => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === uniqueId
            ? { ...msg, value: text.slice(0, index + 1) }
            : msg
        )
      );

      if (index < text.length - 1) {
        index++;
      } else {
        clearInterval(interval);
      }
    }, 5);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = { isAi: false, value: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const uniqueId = generateUniqueId();
      const botMessage = { isAi: true, value: "", id: uniqueId };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setLoading(true);

      const res = await axios.post(
        // https://chat-bot-server-azure.vercel.app/gemini
        `https://server.enkoytechnologies.com/api/bot`,
        {
          prompt: input,
        }
      );
      setInput("");

      const botResponse = res.data.bot;
      setLoading(false);

      typeText(uniqueId, botResponse);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { isAi: true, value: "Sorry, something went wrong. Please try again!" },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const renderMessages = () => {
    return messages.map((msg, index) => (
      <div
        key={index}
        className={`w-full p-4 ${msg.isAi ? "bg-gray-700" : ""}`}
      >
        <div className="flex flex-row items-start gap-3">
          <div
            className={`w-9 h-9 rounded-md flex items-center justify-center ${
              msg.isAi ? "bg-teal-600" : "bg-indigo-600"
            }`}
          >
            <img
              src={msg.isAi ? botIcon : userIcon}
              alt={msg.isAi ? "bot" : "user"}
              className="object-contain w-3/5 h-3/5"
            />
          </div>
          <div className="flex-1 max-w-full overflow-x-auto text-xs text-gray-300 whitespace-pre-wrap scrollbar-hide">
            {msg.value || (loading && "...")}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className={`flex flex-col items-center justify-between w-full shadow-md h-full px-4 pt-2 ${isDarkTheme ? "bg-[#070920]" : "bg-gray-50"}`}>
      <div
        id="chat_container"
        ref={chatContainerRef}
        className="flex flex-col flex-1 w-full h-full gap-3 pb-5 overflow-y-scroll scrollbar-hide"
      >
        {renderMessages()}
        {messages.length === 0 && (
          <div className="flex items-center w-full h-full">
            <p className="w-full text-xl text-center text-gray-500">
              Ask me anything about Enkoy Tech...
            </p>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row w-full max-w-5xl gap-3 px-5 py-2 mx-auto mb-5 bg-gray-700 rounded-full"
      >
        <textarea
          name="prompt"
          cols="1"
          rows="1"
          placeholder="Ask Sam..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          required
          className="flex-1 p-2 text-xs text-white bg-transparent border-none rounded-md outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-transparent border-none outline-none cursor-pointer"
        >
          <img src={send} alt="send" className="w-7 h-7" />
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
