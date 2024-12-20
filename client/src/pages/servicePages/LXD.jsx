import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const LXD = () => {
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
            alt={isAmharic ? "ታሪካዊ አሰራር አምሳል" : "Storytelling Icon"}
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "ትምህርት ስለ ማቅረብ" : "LXD"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "LXD የስልጠና አገልግሎቶች"
              : "LXD Training Services"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? `በኤንኮይ፣ ድርጅቶች አሳታፊ እና ውጤታማ የትምህርት ተሞክሮዎችን እንዲፈጥሩ የሚያስችል ልዩ የመማሪያ ልምድ ዲዛይን (LXD) የሥልጠና አገልግሎቶችን እናቀርባለን። የእኛ አካሄድ የተማሪዎችዎን ልዩ ፍላጎቶች በመረዳት እና የስልጠና ስልቶችን ከትምህርታዊ ግቦችዎ ጋር በማጣጣም ላይ ያተኩራል`
              : `At Enkoy, we offer specialized Learning Experience Design (LXD) training services that empower organizations to create engaging and effective learning experiences. Our approach focuses on understanding the unique needs of your learners and aligning training strategies with your educational goals.`}
          </motion.p>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? `የባለሙያ ቡድናችን የተማሪዎችን ተሳትፎ እና ማቆየት የሚያሻሽሉ ኮርሶችን እንዲነድፉ በማገዝ በኤልኤክስዲ መርሆች ይመራዎታል። እንደ ተጠቃሚን ያማከለ ንድፍ፣ በይነተገናኝ ይዘት መፍጠር እና ውጤታማ የግምገማ ስልቶች ያሉ አስፈላጊ ርዕሶችን እንሸፍናለን`
              : `Our expert team guides you through the principles of LXD, helping you design courses that enhance learner engagement and retention. We cover essential topics such as user-centered design, interactive content creation, and effective assessment strategies.`}
          </motion.p>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? `በኤልኤክስዲ ውስጥ ምርጥ ተሞክሮዎችን በማካተት፣ የስልጠና ፕሮግራሞችዎ መረጃ ሰጪ ብቻ ሳይሆን አስደሳች እና ተፅእኖ ያላቸው መሆናቸውን እናረጋግጣለን። በእኛ የLXD የሥልጠና አገልግሎቶች፣ የመማር ተነሳሽነትዎን ከፍ ማድረግ እና በድርጅትዎ ውስጥ ቀጣይነት ያለው መሻሻል ባህል ማዳበር ይችላሉ`
              : `By incorporating best practices in LXD, we ensure that your training programs are not only informative but also enjoyable and impactful. With our LXD training services, you can elevate your learning initiatives and foster a culture of continuous improvement within your organization.`}
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
      </motion.div>
    </motion.div>
  );
};

export default LXD;
