import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const LeadershipSkill = () => {
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
            {isAmharic
              ? "ለተማሪዎች የአመራር ችሎታ ስልጠና"
              : "Leadership Skills Training for Students"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "የነገ መሪዎችን ማብቃት"
              : "Empowering Tomorrow's Leaders"}
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
                ? `በእንኮይ በተለይ ለተማሪዎች የተነደፈ ልዩ የአመራር ክህሎት ስልጠና እንሰጣለን። ፕሮግራማችን ወጣት ግለሰቦችን በአካዳሚክ እና በወደፊት ሙያዊ አካባቢያቸው ውጤታማ መሪ እንዲሆኑ አስፈላጊ ክህሎቶችን እና በራስ መተማመንን በማስታጠቅ ላይ ያተኩራል`
                : `At Enkoy, we provide specialized leadership skills training designed specifically for students. Our program focuses on equipping young individuals with the essential skills and confidence needed to become effective leaders in their academic and future professional environments.`}
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic
                ? `በይነተገናኝ ወርክሾፖች እና አሳታፊ እንቅስቃሴዎች፣ ተማሪዎች ሂሳዊ አስተሳሰብን፣ ግንኙነትን እና የቡድን ስራ ክህሎቶችን ያዳብራሉ። ልምድ ያካበቱ አስተባባሪዎች ተሳታፊዎቻቸውን የአመራር ዘይቤያቸውን እንዲመረምሩ እና የትብብር እና የመላመድን አስፈላጊነት እንዲገነዘቡ ይመራሉ`
                : `Through interactive workshops and engaging activities, students will develop critical thinking, communication, and teamwork skills. Our experienced facilitators guide participants in exploring their leadership styles and understanding the importance of collaboration and adaptability.`}
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic
                ? `በአመራር ክህሎት ስልጠናችን ውስጥ በመሳተፍ፣ተማሪዎች የግል እድገታቸውን ከማጎልበት ባለፈ ለወደፊት ፈተናዎች እራሳቸውን ያዘጋጃሉ። በእኛ ድጋፍ፣ በተፅእኖ ለመምራት እና ሌሎችን ለማነሳሳት የሚያስፈልጉትን ባህሪያት ማዳበር ይችላሉ`
                : `By participating in our leadership skills training, students will not only enhance their personal growth but also prepare themselves for future challenges. With our support, they can cultivate the qualities needed to lead with impact and inspire others.`}
            </motion.p>
          </motion.div>
          <motion.a
            href="/contact"
            className={`px-6 py-3 text-white ${
              isDarkTheme ? "bg-yellow-500" : "bg-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በማቅረብ" : "Contact Us"}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LeadershipSkill;
