import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Story = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language.language);
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
            src="/img/services/storytelling.png"
            alt="Storytelling Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic
              ? "የተሻሻለ eLearning መፍትሔ"
              : "Custom eLearning solution"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "ታሪክ መተረክ ሞጁሎቹን ወደ ሕይወት ያመጣል"
              : "Storytelling brings the modules to life"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "ተረት መተረክ፣ በደንብ ከተሰራ የትምህርት ስልት ጋር ተዳምሮ፣ ትረካ ላይ ያማከለ ልዩ የመማሪያ ልምድ ይፈጥራል። ነገር ግን እውነተኛው አስማት በውጤቱ ላይ ነው፡ ከፍተኛ ተሳትፎ ያላቸው እና ትኩረት ያደረጉ ተማሪዎች። በመማር ልምድ ንድፍ (LXD) መርሆዎች የተነደፉ የእኛ ብጁ ምስላዊ ታሪኮች ቡድንዎ እውቀቱን ረዘም ላለ ጊዜ እንዲቆይ እና በብቃት መጠቀሙን ያረጋግጡ። ለኤልኤክስዲ ቅድሚያ በመስጠት፣ ተማሪዎችን የሚያስተጋቡ ትርጉም ያላቸው እና መሳጭ የመማሪያ ልምዶችን እንፈጥራለን፣ ይህም ትምህርት መረጃ ሰጪ ብቻ ሳይሆን እውነተኛ ለውጥ ያመጣል።"
              : "Storytelling, combined with a well-crafted learning strategy, creates an exceptional learning experience centered on narrative. But the real magic lies in the outcome: highly engaged and focused learners. Our custom visual stories, designed with Learning Experience Design (LXD) principles, ensure that your team retains knowledge longer and applies it effectively. By prioritizing LXD, we create meaningful and immersive learning experiences that resonate with learners, making education not just informative but truly transformative."}
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

export default Story;
