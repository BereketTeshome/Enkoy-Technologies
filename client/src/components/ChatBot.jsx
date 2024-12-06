import React, { useState, useEffect, useRef } from "react";
import botIcon from "../assets/bot.svg";
import userIcon from "../assets/user.svg";
import send from "../assets/send.svg";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

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
        `http://localhost:3000/api/bot`,
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
              className="w-3/5 h-3/5 object-contain"
            />
          </div>
          <div className="flex-1 text-gray-300 text-xs max-w-full overflow-x-auto whitespace-pre-wrap scrollbar-hide">
            {msg.value || (loading && "...")}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-between px-4 pt-2">
      <div
        id="chat_container"
        ref={chatContainerRef}
        className="flex-1 w-full h-full overflow-y-scroll flex flex-col gap-3 pb-5 scrollbar-hide"
      >
        {renderMessages()}
        {messages.length === 0 && (
          <div className="h-full w-full flex items-center">
            <p className="text-center w-full text-gray-500 text-xl">
              Ask me anything about Enkoy Tech...
            </p>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl mx-auto bg-gray-700 flex flex-row gap-3 mb-5 rounded-full px-5 py-2"
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
          className="flex-1 text-white text-xs p-2 bg-transparent rounded-md border-none outline-none"
        ></textarea>
        <button
          type="submit"
          className="outline-none border-none cursor-pointer bg-transparent"
        >
          <img src={send} alt="send" className="w-7 h-7" />
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
