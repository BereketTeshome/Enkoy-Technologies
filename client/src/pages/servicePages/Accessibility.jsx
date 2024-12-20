import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Accessibility = () => {
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
    <motion.div
      className={`pt-20 ${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}
    >
      <motion.div className="flex flex-col items-center w-full" {...fadeInUp}>
        {/* Header Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/accessibility.png"
            alt={isAmharic ? "ተደራሽነት አዶ" : "Accessibility Icon"}
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "ተደራሽነት" : "Accessibility"}
          </motion.p>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "በእንኮይ፣ በ eLearning ውስጥ ተደራሽነት ለሁሉም አካታች የትምህርት ተሞክሮዎችን ለመፍጠር አስፈላጊ ነው ብለን እናምናለን። ሁሉም ተማሪዎች ምንም አይነት ችሎታቸው እና አስተዳደጋቸው ምንም ይሁን ምን ከይዘቱ ጋር በብቃት መሳተፍ እንደሚችሉ በማረጋገጥ የእኛ ምርቶች ሁለንተናዊ ተደራሽነትን ከግምት ውስጥ በማስገባት የተነደፉ ናቸው።"
              : "At Enkoy, we believe that accessibility in eLearning is essential for creating inclusive learning experiences for everyone. Our products are designed with universal accessibility in mind, ensuring that all learners, regardless of their abilities or backgrounds, can engage with the content effectively."}
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

        {/* Image and Text Section */}
        <motion.div
          className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row"
          {...fadeInUp}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <img
              src="/img/services/accessibilityImg.png"
              alt={isAmharic ? "ተደራሽነት ምስል" : "Accessibility Illustration"}
              className="w-[90%]"
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <h2
              className={`text-4xl sm:text-5xl mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-950"
              }`}
            >
              {isAmharic ? "ለምን ተደራሽነት?" : "Why Accessibility?"}
            </h2>
            <p
              className={`text-justify ${
                isDarkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {isAmharic
                ? "በ eLearning ውስጥ ተደራሽነት ሁሉንም ተማሪዎችን የሚያሟላ፣ አቅማቸው ወይም አስተዳደጋቸው ምንም ይሁን ምን አካታች ትምህርታዊ ተሞክሮዎችን ለመፍጠር ወሳኝ ነው። ተደራሽነትን በማስቀደም ለሁሉም ሰው የበለፀገ እና የበለጠ ውጤታማ የመማሪያ አካባቢ እንፈጥራለን።"
                : "Accessibility in eLearning is crucial for creating inclusive educational experiences that cater to all learners, regardless of their abilities or backgrounds. By prioritizing accessibility, we create a richer and more effective learning environment for everyone."}
            </p>
          </motion.div>
        </motion.div>

        {/* Final Section */}
        <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
          {...fadeInUp}
        >
          <motion.div className="flex flex-1" {...fadeInUp}>
            <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-6xl">
              {isAmharic
                ? "የተደራሽነት አቅጣጫዎቻችን"
                : "Our Accessibility Approach"}
            </h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px] text-justify"
            {...fadeInUp}
          >
            <p>
              {isAmharic
                ? "በእንኮይ፣ ከመስመር ውጭም ሆነ በመስመር ላይ የመማሪያ አማራጮችን በማቅረብ ተደራሽነትን እናስቀድማለን። ይህ ጥምር አካሄድ እያንዳንዱ ተማሪ ምንም አይነት ሁኔታቸው ወይም ምርጫቸው ምንም ይሁን ምን ስኬታማ የመሆን እድል እንዳለው ያረጋግጣል።"
                : "At Enkoy, we prioritize accessibility by providing both offline and online learning options. This dual approach ensures every learner has the opportunity to succeed, regardless of their circumstances or preferences."}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Accessibility;




