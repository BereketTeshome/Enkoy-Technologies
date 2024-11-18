import React from "react";

const OurServices = () => (
  <div className="grid z-100 grid-cols-4 gap-4 p-6 bg-white shadow-md rounded-md w-[900px] shadow-white">
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
        href="/self-paced-learning"
        className="text-[#F1858C] text-sm mb-2 mt-6 block"
      >
        See overview
      </a>
      <ul className="space-y-5 text-sm text-gray-700">
        {[
          {
            label: "Self-paced learning",
            link: "/services/self-paced-learning",
          },
          { label: "Gamification", link: "/services/gamification" },
          { label: "Animated video", link: "/services/animated-videos" },
          { label: "Storytelling", link: "/services/storytelling" },
          {
            label: "Translation and localization",
            link: "/services/translation",
          },
          { label: "Accessibility", link: "/services/accessibility" },
        ].map((item, index) => (
          <li key={index}>
            <a href={item.link} className="cursor-pointer hover:text-blue-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="/more-solutions" className="block mt-10 text-sm text-blue-500">
        See more solutions
      </a>
    </div>

    {/* Repeat similar structure for other columns */}
    {/* Consulting and advisory */}
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
        href="/learning-experiences"
        className="text-[#F1858C] text-sm mb-2 block"
      >
        See overview
      </a>
      <ul className="space-y-5 text-sm text-gray-700">
        {[
          {
            label: "Learning experiences design",
            link: "/services/learning-experiences",
          },
          {
            label: "Instructional design",
            link: "/services/instructional-design",
          },
          {
            label: "In-house Training digitalization",
            link: "/services/training-digitalization",
          },
        ].map((item, index) => (
          <li key={index}>
            <a href={item.link} className="cursor-pointer hover:text-blue-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Animation and video production */}
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
      <a href="/animation-videos" className="text-[#F1858C] text-sm mb-2 block">
        See overview
      </a>
      <ul className="space-y-5 text-sm text-gray-700">
        {[
          { label: "Animation video", link: "/services/animation-videos" },
          { label: "Video editing", link: "/services/video-editing" },
          { label: "Graphics design", link: "/services/graphics-design" },
        ].map((item, index) => (
          <li key={index}>
            <a href={item.link} className="cursor-pointer hover:text-blue-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Capacity Building */}
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
        href="/services/LXD"
        className="text-[#F1858C] text-sm mb-2 mt-6 block"
      >
        See overview
      </a>
      <ul className="space-y-5 text-sm text-gray-700">
        {[
          { label: "LXD training", link: "/services/LXD" },
          { label: "Leadership skill", link: "/services/leadership-skill" },
          {
            label: "Personal development",
            link: "/services/personal-development",
          },
          {
            label: "Employability skill",
            link: "/services/employability-skill",
          },
          { label: "Basic computer skill", link: "/services/computer-skill" },
        ].map((item, index) => (
          <li key={index}>
            <a href={item.link} className="cursor-pointer hover:text-blue-500">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default OurServices;
