import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const InstructionalDesign = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const language = useSelector((state) => state.language?.language);
  const isDarkTheme = theme === "dark";
  const isAmharic = language === "amh";

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
    <motion.div className={`pt-20 ${isDarkTheme ? "bg-gray-800" : "bg-white"}`}>
      <motion.div className="flex flex-col items-center w-full" {...fadeInUp}>
        {/* Header Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/translation.svg"
            alt={
              isAmharic
                ? "የመማሪያ ንድፍ አዶ"
                : "Instructional Design Icon"
            }
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic
              ? "የመምሪያ ንድፍ አማራጭ"
              : "Instructional Design Consulting"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "ከስሜታዊነት እና ከባለሙያ ጋር አሳታፊ ኢ-ትምህርት ተሞክሮዎችን መፍጠር"
              : "Crafting Engaging eLearning Experiences with Passion and Expertise"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "በእንኮይ, ፈጠራ የእኛ ፍላጎት ነው; እንኖራለን እና እንተነፍሳለን! የeLearning ኮርሶችን በመንደፍ ባለን እውቀት፣ አሳታፊ እና ውጤታማ የመማር ተሞክሮዎችን ለመፍጠር የሚያግዙዎትን ልዩ የማስተማሪያ ንድፍ የማማከር አገልግሎት እናቀርባለን"
              : "At Enkoy, creativity is our passion; we live and breathe it! With our expertise in designing eLearning courses, we offer exceptional instructional design consulting services to help you create engaging and effective learning experiences."}
          </motion.p>
          <motion.a
            href="/contact"
            className={`px-6 py-3 text-white ${
              isDarkTheme ? "bg-yellow-500" : "bg-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "ያግኙን" : "Contact Us"}
          </motion.a>
        </motion.div>
        <br />
        <br />
        <br />
      </motion.div>
    </motion.div>
  );
};

export default InstructionalDesign;
