import React from "react";
import { works } from "../../assets/ourWork";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  viewport: { amount: 0.2, once: true },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.15 } },
};

const SingleWorks = () => {
  return (
    <motion.div
      className="text-white py-16 "
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {works.map((work, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-start md:items-center mb-20 border-t border-gray-700 pt-10 ${
            index !== 0 ? "mt-10" : ""
          }`}
          {...fadeInUp}
        >
          {/* Icon Section */}
          <motion.div
            className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center md:mr-10"
            {...fadeInUp}
          >
            <img src={work.icon} alt="Work Icon" className="w-10 h-10" />
          </motion.div>

          {/* Text Section */}
          <motion.div className="flex-1" {...fadeInUp}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              {work.title}
            </h3>
            <p className="text-gray-300 mb-6">{work.description}</p>
            <a
              href={`/our-work/${work.id}`}
              className="flex items-center gap-2 px-6 py-3 text-white bg-yellow-600 hover:bg-yellow-500 rounded transition w-fit"
            >
              <span>Read the story</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </motion.div>

          {/* projectOverview Section */}
          <motion.div
            className="mt-8 md:mt-0 md:ml-10 flex-shrink-0 w-full md:w-1/3"
            {...fadeInUp}
          >
            <h4 className="text-yellow-500 font-semibold uppercase mb-4">
              Project Highlights
            </h4>
            <ul className="text-gray-400 list-disc pl-5 space-y-2">
              {work.projectOverview.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SingleWorks;
