// import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const cardVariants = {
  initial: { scale: 1, rotateY: 0, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" },
  hover: {
    scale: 1.1,
    rotateY: 20,
    boxShadow: "0 20px 30px rgba(0,0,0,0.3)",
    transition: { type: "spring", stiffness: 150, damping: 10 },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const DigitalTrainingOverview = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  return (
    <div className="container px-5 mx-auto my-20">
      {/* Three Alternating Sections */}
      <motion.div
        className="flex flex-col items-center w-full px-5 mb-12 md:px-20 sm:px-10 lg:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <motion.div className="flex-1 mb-6 lg:mb-0">
          <img
            src="/img/services/animatedVideosImg.png"
            alt="Animated Videos Visual"
            className="w-[90%]"
          />
        </motion.div>
        <motion.div className="flex-1">
          <h2 className="text-3xl sm:text-5xl text-gray-650 mb-7">
            Transform Learning with Digital Training Solutions
          </h2>
          <p
            className={`text-justify ${
              isDarkTheme ? "text-gray-300" : "text-gray-900"
            }`}
          >
            Most people are visual learners, so creating visual content can
            capture their attention and evoke emotions. At Enkoy, we use our
            expertise to produce engaging animated videos that provide learners
            with an enjoyable journey.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center w-full px-5 mb-12 md:px-20 sm:px-10 lg:flex-row-reverse"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <motion.div className="flex-1 mb-6 ml-10 lg:mb-0">
          <img
            src="/img/services/accessibilityImg.png"
            alt="Interactive Courses Visual"
            className="w-[90%]"
          />
        </motion.div>
        <motion.div className="flex-1">
          <h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
          >
            Interactive courses for better engagement
          </h2>
          <p
            className={`text-justify ${
              isDarkTheme ? "text-gray-300" : "text-gray-900"
            }`}
          >
            Interactive content fosters a better learning experience. At Enkoy,
            we create courses that keep learners engaged, helping them retain
            information more effectively.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center w-full px-5 mb-12 md:px-20 sm:px-10 lg:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <motion.div className="flex-1 mb-6 lg:mb-0">
          <img
            src="/img/services/gamificationImg.png"
            alt="Instructional Design Visual"
            className="w-[90%]"
          />
        </motion.div>
        <motion.div className="flex-1">
          <h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
          >
            Expert Instructional Design Services
          </h2>
          <p
            className={`text-justify ${
              isDarkTheme ? "text-gray-300" : "text-gray-900"
            }`}
          >
            We craft well-structured eLearning solutions that combine creativity
            and strategy, ensuring learners stay engaged and achieve their goals
            efficiently.
          </p>
        </motion.div>
      </motion.div>

      {/* Title Section */}
      <div className="my-10 text-center">
        <h2 className="mb-6 text-4xl font-bold text-gray-500">
          Explore Our Tailored Solutions
        </h2>
      </div>

      {/* 2x2 Grid Section */}
      <div className="grid grid-cols-1 gap-8 px-5 md:grid-cols-2">
        {[
          "Digital Training",
          "Interactive Learning",
          "Animated Videos",
          "Instructional Design",
        ].map((title, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-md shadow-lg"
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
          >
            <img
              src={`/img/digital-training/${index + 1}.svg`}
              alt={`${title} Icon`}
              className="w-12 h-12 mb-4"
            />
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              {title}
            </h3>
            <p className="text-sm text-gray-600">
              {title === "Digital Training"
                ? "Develop strong relationships and become more positive through our assessments."
                : title === "Interactive Learning"
                ? "Foster meaningful learning experiences through our interactive eLearning modules."
                : title === "Animated Videos"
                ? "Capture attention and emotions with visually engaging animated videos."
                : "Build impactful eLearning experiences with our strategic instructional design services."}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DigitalTrainingOverview;
