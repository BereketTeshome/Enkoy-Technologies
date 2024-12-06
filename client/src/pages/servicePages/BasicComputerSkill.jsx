import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const BasicComputerSkill = () => {
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
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "መሰረታዊ የኮምፒዩተር ክህሎቶች ስልጠና" : "Basic Computer Skills Training"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "መሰረታዊ ነገሮችን ይማሩ፡ አስፈላጊ የኮምፒውተር ክህሎት ስልጠና"
              : "Master the Basics: Essential Computer Skills Training"}
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
                ? `በእንኮይ፣ ግለሰቦች የዛሬውን ዲጂታል አለም በልበ ሙሉነት እንዲጓዙ ለመርዳት የተነደፈ አስፈላጊ መሰረታዊ የኮምፒውተር ክህሎት ስልጠና እንሰጣለን። ፕሮግራማችን እንደ ኦፕሬቲንግ ሲስተሞችን መጠቀም፣ ፋይሎችን ማስተዳደር እና አስፈላጊ የሶፍትዌር አፕሊኬሽኖችን በመጠቀም መሰረታዊ ክህሎቶችን በማስተማር ላይ ያተኩራል`
                : `At Enkoy, we provide essential basic computer skills training designed to help individuals navigate today’s digital world with confidence. Our program focuses on teaching fundamental skills such as using operating systems, managing files, and utilizing essential software applications.`}
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic
                ? `በይነተገናኝ ትምህርቶች እና በተግባራዊ ልምምድ፣ ተሳታፊዎች እንደ የቃላት ማቀናበሪያ፣ የቀመር ሉሆች እና የዝግጅት አቀራረብ ሶፍትዌር ያሉ መሳሪያዎችን እንዴት በብቃት መጠቀም እንደሚችሉ ይማራሉ። ልምድ ያላቸው አስተማሪዎች እያንዳንዱ ተማሪ ምቾት እንዲሰማው እና በቴክኖሎጂ የሰለጠነ መሆኑን ለማረጋገጥ ግልጽ መመሪያ እና ድጋፍ ይሰጣሉ`
                : `Through interactive lessons and hands-on practice, participants will learn how to effectively use tools like word processors, spreadsheets, and presentation software. Our experienced instructors provide clear guidance and support to ensure that each learner feels comfortable and proficient with technology.`}
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic
                ? `በመሰረታዊ የኮምፒዩተር ክህሎት ስልጠናችን በመሳተፍ ምርታማነትዎን እና ቅልጥፍናዎን በግል እና በሙያዊ መቼቶች ለማሳደግ የሚያስፈልገውን መሰረታዊ እውቀት ያገኛሉ። በእኛ ድጋፍ በቴክኖሎጂ አዋቂ እና ዲጂታል ፈተናዎችን ለመቋቋም ዝግጁ መሆን ይችላሉ`
                : `By participating in our basic computer skills training, you will gain the foundational knowledge needed to enhance your productivity and efficiency in both personal and professional settings. With our support, you can become more tech-savvy and ready to tackle digital challenges.`}
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

export default BasicComputerSkill;
