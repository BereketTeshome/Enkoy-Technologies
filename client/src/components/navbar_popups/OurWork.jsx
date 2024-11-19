import React from "react";

const OurWork = () => {
  return (
    <div className="flex items-start gap-9 justify-between p-6 bg-white rounded-md shadow-md shadow-white md:w-[450px]">
      {/* Left Section */}
      <div className="w-[60%] border-r-[1px] border-gray-200 ">
        <div className="mb-4">
          <img
            src="/img/contentsMenuImg.png"
            alt="Our Work Icon"
            className="w-12 h-12 mr-3"
          />
          <span className="text-lg font-bold text-gray-800">Our Work</span>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          See the results of projects with some of the world's most recognizable
          organizations.
        </p>
        <a
          href="/about-us/careers"
          className="font-medium text-pink-500 hover:underline"
        >
          See case studies
        </a>
      </div>

      {/* Right Section */}
      <div>
        <h3 className="mb-2 text-sm font-semibold text-gray-800">
          Our award-winning eLearning campaigns
        </h3>
        <a
          href="/portfolio"
          className="font-medium text-pink-500 hover:underline"
        >
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default OurWork;
