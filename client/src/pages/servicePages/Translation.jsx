import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Translation = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
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
    <motion.div
      className={`pt-20 ${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}
    >
      <motion.div className="flex flex-col items-center w-full" {...fadeInUp}>
        {/* Content Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/Instractional design.png"
            alt={isAmharic ? "ትርጉም እና አካባቢያዊነት" : "Translation Icon"}
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "ትርጉም እና አካባቢያዊነት" : "Translation and localization"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "ሁሉንም ሰው ከትርጉም ጋር ማምጣት"
              : "Bringing everyone together with translation and localization"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "መተርጎም እና አካባቢያዊ ማድረግ ተማሪዎች በተመረጡት ቋንቋ ኮርሶችን እንዲደርሱ ያስችላቸዋል፣ ይህም ግንዛቤን እና ማቆየትን ያሳድጋል። ይዘትን ከባህላዊ ልዩነቶች እና የቋንቋ ምርጫዎች ጋር በማስማማት ተማሪዎች ከቁሱ ጋር በጥልቀት እንዲሳተፉ እናረጋግጣለን። ይህ ግላዊነት የተላበሰ አካሄድ የተሻለ ግንዛቤን ከማሳለጥ ባለፈ ሁሉንም ያሳተፈ የትምህርት አካባቢን ያሳድጋል፣ ይህም ሁሉም በትምህርታዊ ጉዟቸው እንዲበለጽግ ያስችለዋል።"
              : "Translation and localization empower learners to access courses in their preferred language, enhancing understanding and retention. By tailoring content to suit cultural nuances and language preferences, we ensure that learners engage more deeply with the material. This personalized approach not only facilitates better comprehension but also fosters a more inclusive learning environment, allowing everyone to thrive in their educational journey."}
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

export default Translation;
