import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Gamification = () => {
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
      {/* Hero Section */}
      <motion.div className="flex flex-col items-center w-full" {...fadeInUp}>
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <motion.img
            src="/img/services/educational-games.png"
            alt="Gamification Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "የተሻሻለ eLearning መፍትሔ" :  "Custom eLearning solution"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በመጫወት ትምህርትዎን ያሳድጉ" : "Elevate Your Learning through Gamification"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "የግማሽ ስልጠና የጨዋታ ክፍሎችን ከትምህርቱ ጋር ያዋህዳል ተሳትፎን እና ተነሳሽነትን ለማሳደግ ልምድ። በእንኮይ፣ እንጠቀማለን። መሳጭ እና ትርጉም ያለው ለመፍጠር የመማር ልምድ ንድፍ (LXD) የመማሪያ አካባቢዎች. የእኛ አቀራረብ ፈጠራ ጨዋታን ያጣምራል። ሜካኒክስ ውጤታማ የንድፍ መርሆዎች, እውቀትን ማሳደግ ማቆየት እና ችሎታ ማዳበር. ይህ ስልት ተማሪዎችን ያበረታታል። በትምህርታዊ ጉዟቸው ያዳብራሉ።" : "Gamification training integrates game elements into the learning experience to boost engagement and motivation. At Enkoy, we leverage Learning Experience Design (LXD) to create immersive and meaningful learning environments. Our approach combines innovative game mechanics with effective design principles, enhancing knowledge retention and skill development. This strategy empowers learners to thrive in their educational journeys."}
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
        </div>
      </motion.div>
      <br />
      <br />
      <br />

      {/* Why Gamification Section */}
      <motion.div
        className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row"
        {...fadeInUp}
      >
        <motion.div className="flex-1" {...fadeInUp}>
          <img
            src="/img/services/gamificationImg.png"
            alt="Gamification Visual"
            className="w-[90%]"
          />
        </motion.div>
        <motion.div className="flex-1" {...fadeInUp}>
          <h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
          >
            {isAmharic ? "በዲጂታል ትምህርት መጫወት ለምን አስፈለገ?" : "Why Gamification in Digital Learning?"}
          </h2>
          <p
            className={`text-justify ${
              isDarkTheme ? "text-gray-300" : "text-gray-900"
            }`}
          >
            {isAmharic ? "በዲጂታል ትምህርት ውስጥ መተዋወቅ ሂደቱን በይነተገናኝ እና አስደሳች በማድረግ ተሳትፎን እና ተነሳሽነትን ይጨምራል። የእውቀት ማቆየትን በተግባር ያሳድጋል እና በሂደት ላይ ፈጣን አስተያየት ይሰጣል። ለግል የተበጁ ተሞክሮዎች ተማሪዎች በፍላጎታቸው ላይ እንዲያተኩሩ ያስችላቸዋል የማህበረሰብ ግንባታ አካላት ትብብርን ያሳድጋሉ። ባጠቃላይ፣ ጋሜዲኬሽን ተማሪዎችን እንዲነቃቁ እና እንዲሳተፉ የሚያደርግ ተለዋዋጭ አካባቢን ይፈጥራል።" : "Gamification in digital learning boosts engagement and motivation by making the process interactive and enjoyable. It enhances knowledge retention through practice and provides immediate feedback on progress. Personalized experiences allow learners to focus on their interests while community-building elements foster collaboration. Overall, gamification creates a dynamic environment that keeps learners motivated and involved."}
          </p>
        </motion.div>
      </motion.div>
      <br />
      <br />
      <br />

      {/* Our Approach Section */}
      <motion.div
        className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
        {...fadeInUp}
      >
        <motion.div className="flex flex-1" {...fadeInUp}>
          {isAmharic ? 
           <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
           የእኛ አቀራረብ <br /> ወደ ጨዋታ
         </h2>
          : 
          <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
            Our Approach <br /> to gamification
          </h2>
          }
        </motion.div>
        <motion.div
          className="flex-1 text-gray-900 text-[15px] text-justify"
          {...fadeInUp}
        >
          <p>
            {isAmharic ? "በእንኮይ፣ የጨዋታ አካሄዳችን የሚጀምረው ይህንን በመረዳት ነው። የተማሪዎቻችን ልዩ ፍላጎቶች እና ምርጫዎች። አስማጭ ዲዛይን እናደርጋለን እና ለማሻሻል የጨዋታ አካላትን የሚያዋህዱ በይነተገናኝ ተሞክሮዎች ተሳትፎ እና ተነሳሽነት. የመማር ልምድ ንድፍን በመጠቀም (LXD)፣ የሚያስተዋውቁ ጠቃሚ ፈተናዎችን እና ሽልማቶችን እንፈጥራለን እውቀትን ማቆየት እና ክህሎት ማዳበር. ግባችን ሀ ተለዋዋጭ የመማሪያ አካባቢ ተማሪዎች አቅም እንዳላቸው የሚሰማቸው በሂደቱ እየተደሰቱ ትምህርታዊ አላማቸውን ማሳካት።" : " At Enkoy, our approach to gamification begins with understanding the unique needs and preferences of our learners. We design immersive and interactive experiences that integrate game elements to enhance engagement and motivation. By leveraging Learning Experience Design (LXD), we create meaningful challenges and rewards that promote knowledge retention and skill development. Our goal is to foster a dynamic learning environment where learners feel empowered to achieve their educational objectives while enjoying the process."}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Gamification;
