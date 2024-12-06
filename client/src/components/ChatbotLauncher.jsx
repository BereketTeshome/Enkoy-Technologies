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
          className="fixed z-50 flex items-center justify-center w-12 h-12 bg-teal-500 rounded-full shadow-lg cursor-pointer right-6 bottom-10"
        >
          <img
            src={botIcon}
            alt="Chatbot Icon"
            className="object-contain w-2/3 h-2/3"
          />
        </div>
      )}

      {/* Chatbot Component */}
      {isChatbotVisible && (
        <div className="w-[350px] sm:w-[400px] h-[500px] fixed right-6 top-10 z-50 shadow-lg">
          <div className="relative w-full h-full overflow-hidden bg-gray-700 rounded-lg">
            <button
              onClick={toggleChatbot}
              className="absolute p-1 text-gray-200 bg-gray-600 rounded-full top-2 right-2 hover:bg-gray-500"
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
