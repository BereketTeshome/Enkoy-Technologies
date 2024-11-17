import React from "react";

const OurServices = () => (
  <div className="grid z-100 grid-cols-4 gap-4 p-6  bg-white shadow-md rounded-md w-[900px] shadow-white">
    {/* Customized learning Column */}
    <div>
      <div className="flex items-center mb-2">
        <img
          src="/img/contentsMenuImg.png"
          alt="Custom eLearning"
          className="w-8 h-8"
        />
        <span className="mb-2 font-bold text-gray-800">
          Customized learning
        </span>
      </div>
      <a
        href="/learning-solutions-overview"
        className="text-[#F1858C] text-sm mb-2 mt-6 block"
      >
        See overview
      </a>
      <ul className="space-y-5 text-sm text-gray-700">
        {[
          "Self-paced learning",
          "Gamification",
          "Animated video",
          "Storytelling",
          "Translation and localization",
          "Accessibility",
        ].map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-blue-500">
            {item}
          </li>
        ))}
      </ul>
      <a href="/more-solutions" className="block mt-10 text-sm text-blue-500">
        See more solutions
      </a>
    </div>

    {/* Consulting and advisory Column */}
    <div>
      <div className="flex items-center mb-2">
        <img
          src="/img/contentsMenuImg.png"
          alt="Instructor-Led Training"
          className="w-8 h-8"
        />
        <span className="ml-2 font-bold text-gray-800">
          Consulting and advisory
        </span>
      </div>
      <a
        href="/instructor-led-overview"
        className="text-[#F1858C] text-sm mb-2 block"
      >
        See overview
      </a>
      <ul className="space-y-5 text-sm text-gray-700">
        {[
          "Learning experiences design",
          "Instructional design",
          "In-house Training digitalization",
        ].map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-blue-500">
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Animation and video production Column */}
    <div>
      <div className="flex items-center mb-2">
        <img
          src="/img/contentsMenuImg.png"
          alt="Learning Strategy"
          className="w-8 h-8"
        />
        <span className="ml-2 font-bold text-gray-800">
          Animation and video production
        </span>
      </div>
      <a
        href="/learning-strategy-overview"
        className="text-[#F1858C] text-sm mb-2 block"
      >
        See overview
      </a>
      <ul className="space-y-5 text-sm text-gray-700">
        {["Animation video", "Video editing", "Graphics design"].map(
          (item, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500">
              {item}
            </li>
          )
        )}
      </ul>
    </div>

    {/* Off the Shelf Training Column */}
    <div>
      <div className="flex items-center mb-2">
        <img
          src="/img/contentsMenuImg.png"
          alt="Off the Shelf Training"
          className="w-8 h-8"
        />
        <span className="ml-2 font-bold text-gray-800">Capacity Building</span>
      </div>
      <a
        href="/off-the-shelf-overview"
        className="text-[#F1858C] text-sm mb-2 mt-6 block"
      >
        See overview
      </a>
      <ul className="space-y-5 text-sm text-gray-700">
        {[
          "LXD training",
          "Leadership skill",
          "Personal development",
          "Employability skill",
          "Basic computer skill",
        ].map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-blue-500">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default OurServices;
