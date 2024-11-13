import React from "react";

const NaveBar = () => {
  return (
    <div
      className={`w-full bg-[#161628] py-5 px-36 flex justify-between items-center overflow-hidden`}
    >
      <div>
        <a href="/">
          <img src="/navLogo.png" alt="logo" className="w-[40px]" />
        </a>
      </div>
      <div>
        <a href="/" className="text-gray-50 text-sm font-semibold">
          Article
        </a>
        <a href="/" className="text-gray-50 text-sm font-semibold ml-16">
          Resource
        </a>
        <a href="/" className="text-gray-50 text-sm font-semibold ml-16">
          Publication/guidance
        </a>
        <a href="/" className="text-gray-50 text-sm font-semibold ml-16">
          Our Story
        </a>
        <a href="/" className="text-gray-50 text-sm font-semibold ml-16">
          Event pages
        </a>
      </div>

      <a
        href="/"
        className="text-sm font-semibold bg-white text-[#161628] flex items-center px-7 py-3"
      >
        Contact Us
      </a>
    </div>
  );
};

export default NaveBar;
