import React from "react";

const AboutUs = () => {
  return (
    <div className="flex items-start gap-9 justify-between p-6 bg-white rounded-md shadow-md shadow-white md:w-[400px]">
      {/* Left Section */}
      <div className="border-r-[1px] border-gray-200 min-w-[130px] pr-1">
        <div className="mb-4">
          <img
            src="/img/contentsMenuImg.png"
            alt="Our Work Icon"
            className="w-12 h-12 mr-3"
          />
          <span className="text-lg font-bold text-gray-800">About Us</span>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          Find out about our mission, purpose, and how we got here.
        </p>
        <a href="/about-us" className="text-sm text-pink-500 hover:underline">
          Learn more about us
        </a>
      </div>

      {/* Right Section */}
      <div className="w-full">
        <h3 className="mb-2 text-sm font-semibold text-gray-900">
          More About ELM
        </h3>
        {/* Links Section */}
        <ul className="mt-4 text-xs text-gray-500">
          <li className="mt-4 whitespace-nowrap">
            <a href="/about-us/our-team" className="hover:text-gray-700">
              Our Team
            </a>
          </li>
          <li className="mt-4 whitespace-nowrap">
            <a href="/about-us/our-DEI" className="hover:text-gray-700">
              Our DEI Commitment
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
