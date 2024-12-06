import React, { useState } from "react";
import botIcon from "../assets/bot.svg";
import ChatBot from "./ChatBot"; // Assuming ChatBot is in the same directory

const ChatbotLauncher = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible((prev) => !prev);
  };

  return (
    <div>
      {/* Bot Icon Button */}
      {!isChatbotVisible && (
        <div
          onClick={toggleChatbot}
          className="w-12 h-12 fixed right-6 bottom-10 z-50 bg-teal-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        >
          <img
            src={botIcon}
            alt="Chatbot Icon"
            className="w-2/3 h-2/3 object-contain"
          />
        </div>
      )}

      {/* Chatbot Component */}
      {isChatbotVisible && (
        <div className="w-[350px] sm:w-[400px] h-[500px] fixed right-6 top-10 z-50 shadow-lg">
          <div className="relative w-full h-full bg-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={toggleChatbot}
              className="absolute top-2 right-2 text-gray-200 bg-gray-600 hover:bg-gray-500 rounded-full p-1"
            >
              ✖
            </button>
            <ChatBot />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotLauncher;
