// Import React and ReactDOM libraries
import React, { useState } from "react";
import ReactDOM from "react-dom";

const FAQItem = ({ question, answer }) => {
  // State to manage the open/closed status of each FAQ item
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to open or close the FAQ item
  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <div
      className="faq-item border-b border-gray-300 py-4 cursor-pointer"
      onClick={toggleFAQ}
    >
      <div className="faq-title flex justify-between items-center font-semibold text-gray-800">
        <span>{question}</span>
        <span className="icon text-2xl">{isOpen ? "−" : "+"}</span>
      </div>
      {isOpen && (
        <div className="faq-content mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  // FAQ data
  const faqData = [
    {
      question: "Tailored Leadership Development for Your Unique Context",
      answer: `At Enkoy Technologies, our leadership training is intricately designed to resonate with your organization’s specific culture and objectives. We begin by gaining a deep understanding of your mission, vision, values, and goals. This foundational knowledge allows us to craft a corporate leadership development program that aligns seamlessly with your context.We also pay close attention to the desired outcomes of your leadership training. By identifying the specific improvements you want to see in your leaders’ performance, we can create targeted solutions that drive real results. Additionally, we assess your organization’s life cycle stage, recognizing that different phases demand distinct leadership capabilities.`,
    },
    {
      question: "Real-World Challenges in a Controlled Environment",
      answer:
        "Our training methodology immerses learners in realistic leadership scenarios, allowing them to experience the challenges leaders face firsthand. Through simulations, we evaluate their performance and gather feedback from various perspectives—team members, supervisors, and customers—to provide comprehensive insights. By confronting your leaders with these authentic challenges, we prepare them to navigate complex situations. Our coaching emphasizes the development of effective change management strategies, equipping them to lead through organizational transformations, technological advancements, and shifts in the economic landscape.",
    },
  ];

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
