import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const EmployabilitySkill = () => {
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
            src="/img/services/storytelling.png"
            alt={isAmharic ? "መልእክት ታሪካዊ አሰራር" : "Storytelling Icon"}
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "የቅጥር ችሎታዎች ስልጠና" : "Employability Skills Training"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "ከተቀጣሪነት ክህሎት ስልጠና ጋር ሙያዎችን ማበረታታት"
              : "Empowering Careers with Employability Skills Training"}
          </motion.h2>
          <motion.div
            className={`text-justify ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic
                ? `በእንኮይ፣ ግለሰቦች በስራ ገበያው ውስጥ እንዲበለፅጉ የሚያስፈልጉትን አስፈላጊ ብቃቶች ለማስታጠቅ የተነደፈ ልዩ የቅጥር ችሎታ ስልጠና እንሰጣለን። ፕሮግራማችን ለስራ ስኬት ወሳኝ የሆኑትን እንደ ተግባቦት፣ የቡድን ስራ፣ ችግር መፍታት እና መላመድ ያሉ ቁልፍ ክህሎቶችን በመገንባት ላይ ያተኩራል`
                : `At Enkoy, we provide specialized employability skills training designed to equip individuals with the essential competencies needed to thrive in the job market. Our program focuses on building key skills such as communication, teamwork, problem-solving, and adaptability, which are crucial for career success.`}
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic
                ? `በይነተገናኝ ወርክሾፖች እና በተግባራዊ እንቅስቃሴዎች ተሳታፊዎች ተግባራዊ ችሎታቸውን የሚያጎለብቱ እና በራስ የመተማመን ስሜታቸውን በሚያሳድጉ የገሃዱ ዓለም ሁኔታዎች ውስጥ ይሳተፋሉ። ልምድ ያካበቱ አሰልጣኞቻችን ግለሰቦች ጠንካራ ጎኖቻቸውን እና መሻሻል ያለባቸውን ቦታዎች እንዲለዩ ለመርዳት ግላዊ መመሪያ እና አስተያየት ይሰጣሉ`
                : `Through interactive workshops and hands-on activities, participants will engage in real-world scenarios that enhance their practical skills and boost their confidence. Our experienced trainers offer personalized guidance and feedback to help individuals identify their strengths and areas for improvement.`}
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic
                ? `በተቀጣሪነት ክህሎት ስልጠና ላይ በመሳተፍ ከቀጣሪዎች ጎልቶ ለመታየት እና ትርጉም ያለው የስራ እድሎችን ለማግኘት አስፈላጊ የሆኑትን መሳሪያዎች እና እውቀት ያገኛሉ። በእኛ ድጋፍ፣ የሙያ ዝግጁነትዎን ከፍ ማድረግ እና ወደ ሙያዊ ግቦችዎ የሚቀጥለውን እርምጃ መውሰድ ይችላሉ`
                : `By participating in our employability skills training, you will gain the tools and knowledge necessary to stand out to employers and secure meaningful job opportunities. With our support, you can enhance your career readiness and take the next step toward your professional goals.`}
            </motion.p>
          </motion.div>
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
      </motion.div>
    </motion.div>
  );
};

export default EmployabilitySkill;
