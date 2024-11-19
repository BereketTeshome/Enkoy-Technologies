import React from "react";
import { motion } from "framer-motion";

const OurServices = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delayChildren: 0.2, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const services = [
    {
      title: "Customized learning",
      overviewLink: "/self-paced-learning",
      solutionsLink: "/more-solutions",
      items: [
        { label: "Self-paced learning", link: "/services/self-paced-learning" },
        { label: "Gamification", link: "/services/gamification" },
        { label: "Animated video", link: "/services/animated-videos" },
        { label: "Storytelling", link: "/services/storytelling" },
        {
          label: "Translation and localization",
          link: "/services/translation",
        },
        { label: "Accessibility", link: "/services/accessibility" },
      ],
    },
    {
      title: "Consulting and advisory",
      overviewLink: "/learning-experiences",
      solutionsLink: "",
      items: [
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
      ],
    },
    {
      title: "Animation and video production",
      overviewLink: "/animation-videos",
      solutionsLink: "",
      items: [
        { label: "Animation video", link: "/services/animation-videos" },
        { label: "Video editing", link: "/services/video-editing" },
        { label: "Graphics design", link: "/services/graphics-design" },
      ],
    },
    {
      title: "Capacity Building",
      overviewLink: "/services/LXD",
      solutionsLink: "",
      items: [
        { label: "LXD training", link: "/services/LXD" },
        { label: "Leadership skill", link: "/services/leadership-skill" },
        {
          label: "Personal development",
          link: "/services/personal-development",
        },
        { label: "Employability skill", link: "/services/employability-skill" },
        { label: "Basic computer skill", link: "/services/computer-skill" },
      ],
    },
  ];

  return (
    <motion.div
      className="z-10 grid w-full md:w-[800px] grid-cols-1 gap-4 p-6 mx-auto bg-white rounded-md shadow-md sm:grid-cols-2 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="flex flex-col"
          variants={itemVariants}
        >
          <div className="flex items-center mb-4">
            <img
              src="/img/contentsMenuImg.png"
              alt={service.title}
              className="w-8 h-8"
            />
            <span className="ml-2 font-bold text-gray-800">
              {service.title}
            </span>
          </div>
          <a
            href={service.overviewLink}
            className="text-[#F1858C] text-sm mb-4 block hover:underline"
          >
            See overview
          </a>
          <ul className="space-y-4 text-sm text-gray-700">
            {service.items.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.link}
                  className="transition cursor-pointer hover:text-blue-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {service.solutionsLink && (
            <a
              href={service.solutionsLink}
              className="mt-4 text-sm text-blue-500 hover:underline"
            >
              See more solutions
            </a>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OurServices;
