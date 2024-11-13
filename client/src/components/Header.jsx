import React from "react";

const Header = () => {
  return (
    <div className="w-full h-screen bg-[#161628] px-36 flex items-center">
      <div className="flex-1">
        <div className="mb-5 flex gap-5 font-semibold text-sm capitalize text-[#FF8689]">
          <a href="/">Home</a>
          <a href="/">The L&D Hub</a>
          <a href="/">Learning Experience Design</a>
        </div>
        <p className="text-gray-50 text-5xl font-semibold">
          Developing an <br /> Effective Learning <br />
          Strategy
        </p>
      </div>
      <div className="flex-1">
        <img src="/headerImg.png" alt="" className="w-[90%]" />
      </div>
    </div>
  );
};

export default Header;
