import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const PersonalDev = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    viewport: { amount: 0.2, once: true },
  };

  return (
    <motion.div
      className={`pt-20 ${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}
    >
      <motion.div className="flex flex-col items-center w-full" {...fadeInUp}>
        {/* Header Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/storytelling.png"
            alt="Storytelling Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            Personal Development Training
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            Unlock Your Potential with Personal Development Training
          </motion.h2>
          <motion.div
            className={`text-justify ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              At Enkoy, we offer comprehensive personal development training
              designed to empower individuals to reach their full potential. Our
              program focuses on enhancing self-awareness, goal-setting, and
              critical life skills that contribute to personal and professional
              growth.
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              Through interactive workshops and engaging activities,
              participants will explore areas such as time management, effective
              communication, and emotional intelligence. Our experienced
              trainers provide valuable insights and practical tools to help
              individuals overcome challenges and build confidence.
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              By investing in personal development training, you can unlock new
              opportunities for success and fulfillment. With our support,
              participants will gain the skills and mindset needed to navigate
              their journeys and achieve their aspirations.
            </motion.p>
          </motion.div>
          <motion.a
            href="/contact"
            className={`px-6 py-3 text-white ${
              isDarkTheme ? "bg-yellow-500" : "bg-gray-900"
            }`}
            {...fadeInUp}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalDev;
