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
        href="/corporate-training-overview"
        className="text-[#F1858C] text-sm mb-4 inline-block"
      >
        See overview
      </a>
      {/* Two-Column Layout */}
      <div className="grid grid-cols-2 gap-x-6">
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            "Leadership development training",
            "Learning Experience Design (LXD) Training",
            "Personal development training",
            "Basic computer skill training",
            "Employability and entrepreneurship",
          ].map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500">
              {item}
            </li>
          ))}
        </ul>
        <ul className="space-y-2 text-sm text-gray-700">
          {[
            "Decent work and SDG training",
            "Fair employment practice training",
            "Safety and Health at workplace training",
            "Work life  balance training",
            "Soft skill training",
          ].map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CorporateTraining;
