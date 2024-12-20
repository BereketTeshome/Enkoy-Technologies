import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const PersonalDev = () => {
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
            {isAmharic ? "የግል ልማት ስልጠና" : "Personal Development Training"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "በግላዊ ልማት ስልጠና እምቅ ችሎታዎን ይክፈቱ"
              : "Unlock Your Potential with Personal Development Training"}
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
                ? `በእንኮይ፣ ግለሰቦች ወደ ሙሉ አቅማቸው እንዲደርሱ ለማስቻል የተነደፈ ሁሉን አቀፍ የግል ልማት ስልጠና እንሰጣለን። ፕሮግራማችን የሚያተኩረው እራስን ማወቅ፣ ግብ ማውጣት እና ለግል እና ለሙያዊ እድገት የሚያበረክቱ ወሳኝ የህይወት ክህሎቶችን ማሳደግ ላይ ነው`
                : `At Enkoy, we offer comprehensive personal development training designed to empower individuals to reach their full potential. Our program focuses on enhancing self-awareness, goal-setting, and critical life skills that contribute to personal and professional growth.`}
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic
                ? `በይነተገናኝ ወርክሾፖች እና አሳታፊ እንቅስቃሴዎች ተሳታፊዎች እንደ የጊዜ አያያዝ፣ ውጤታማ ግንኙነት እና ስሜታዊ እውቀት ያሉ ዘርፎችን ይቃኛሉ። ልምድ ያላቸው አሰልጣኞቻችን ግለሰቦች ተግዳሮቶችን እንዲያሸንፉ እና በራስ መተማመንን እንዲገነቡ ለመርዳት ጠቃሚ ግንዛቤዎችን እና ተግባራዊ መሳሪያዎችን ይሰጣሉ`
                : `Through interactive workshops and engaging activities, participants will explore areas such as time management, effective communication, and emotional intelligence. Our experienced trainers provide valuable insights and practical tools to help individuals overcome challenges and build confidence.`}
            </motion.p>
            <motion.p
              className={`mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic
                ? `በግላዊ ልማት ስልጠና ላይ ኢንቬስት በማድረግ ለስኬት እና ለመሟላት አዳዲስ እድሎችን መክፈት ይችላሉ. በእኛ ድጋፍ ተሳታፊዎች ጉዟቸውን ለመምራት እና ምኞታቸውን ለማሳካት የሚያስፈልጉትን ክህሎቶች እና አስተሳሰብ ያገኛሉ።`
                : `By investing in personal development training, you can unlock new opportunities for success and fulfillment. With our support, participants will gain the skills and mindset needed to navigate their journeys and achieve their aspirations.`}
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

export default PersonalDev;
