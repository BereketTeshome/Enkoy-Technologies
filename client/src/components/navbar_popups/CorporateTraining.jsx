import React from "react";

const CorporateTraining = () => {
  return (
    <div className="p-6 md:w-[400px] bg-white rounded-md shadow-md shadow-white">
      {/* Header with Icon and Title */}
      <div className="flex items-center mb-4">
        <img
          src="/img/contentsMenuImg.png"
          alt="Corporate Training icon"
          className="w-10 h-10"
        />
        <span className="ml-2 text-lg font-bold text-gray-800">
          Corporate Training
        </span>
      </div>
      {/* Overview Link */}
      <a
        href="/corporate-training"
        className="text-yellow-400 text-sm mb-4 inline-block"
      >
        See overview
      </a>
      {/* Two-Column Layout */}
      <div className="grid grid-cols-2 gap-x-6">
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            {
              text: "Leadership development training",
              link: "/corporate-training/leadership",
            },
            {
              text: "Learning Experience Design (LXD) Training",
              link: "/corporate-training/learning-experience",
            },
            {
              text: "Personal development training",
              link: "/corporate-training/personal-development",
            },
            {
              text: "Basic computer skill training",
              link: "/corporate-training/basic-computer",
            },
            {
              text: "Employability and entrepreneurship",
              link: "/corporate-training/employability",
            },
          ].map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500">
              <a href={item.link} className="block">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            {
              text: "Decent work and SDG training",
              link: "/corporate-training/decent-work",
            },
            {
              text: "Fair employment practice training",
              link: "/corporate-training/fair-employment",
            },
            {
              text: "Safety and Health at workplace training",
              link: "/corporate-training/safety",
            },
            {
              text: "Work life balance training",
              link: "/corporate-training/work-life",
            },
            {
              text: "Soft skill training",
              link: "/corporate-training/soft-skill",
            },
          ].map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500">
              <a href={item.link} className="block">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CorporateTraining;
