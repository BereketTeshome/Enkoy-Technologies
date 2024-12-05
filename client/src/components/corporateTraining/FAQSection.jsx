// Import React and ReactDOM libraries
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

const FAQItem = ({ question, answer }) => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  // State to manage the open/closed status of each FAQ item
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open or close the FAQ item
  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <div
      className="faq-item border-b border-gray-300 py-4 cursor-pointer"
      onClick={toggleFAQ}
    >
      <div
        className={`faq-title flex justify-between items-center font-semibold  ${
          isDarkTheme ? "text-gray-300" : "text-gray-800"
        }`}
      >
        <span>{question}</span>
        <span className="icon text-2xl">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div
          className={`faq-content mt-2  ${
            isDarkTheme ? "text-gray-50" : "text-gray-600"
          } *:mb-2 text-justify`}
        >
          {answer.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      )}
    </div>
  );
};

const FAQSection = ({ faqData }) => {
  // FAQ data

  return (
    <div className="max-w-3xl mx-auto my-10 p-5">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

// Render the FAQSection component
export default FAQSection;
