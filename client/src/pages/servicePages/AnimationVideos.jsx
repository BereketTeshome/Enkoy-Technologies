import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const AnimationVideos = () => {
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
            src="/img/services/animatedVideos.svg"
            alt="Animated Videos Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "የተሻሻለ eLearning መፍትሔ" : "Custom eLearning solution"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "የተሻሻሉ ቪዲዮዎች ዲጂታል ይዘትን ለመለወጥ ኃይለኛ መሳሪያ ናቸው።" : "Animated videos are a powerful tool for transforming digital content"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በእኛ ሞጁሎች ውስጥ ያሉ የታነሙ ቪዲዮዎች ተማሪዎች ውስብስብ ፅንሰ-ሀሳቦችን እንዲያዩ ያግዛሉ፣ ይህም መረጃን በቀላሉ ለመረዳት ያደርገዋል። በእንኮይ፣ ተማሪዎችን እንዲደሰቱ እና እንዲነቃቁ የሚያደርጉ አሳታፊ ምስሎችን ለመፍጠር የአኒሜተሮችን እውቀት እንጠቀማለን።" : "Animated videos in our modules help learners visualize complex concepts, making information easier to grasp. At Enkoy, we harness our animators' expertise to create engaging visuals that keep learners excited and motivated."}
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

      {/* Why Animated Videos Section */}
      <motion.div
        className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row"
        {...fadeInUp}
      >
        <motion.div className="flex-1" {...fadeInUp}>
          <img
            src="/img/services/animatedVideosImg.png"
            alt="Animated Videos Visual"
            className="w-[90%]"
          />
        </motion.div>
        <motion.div className="flex-1" {...fadeInUp}>
          <h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
          >
            {isAmharic ? "ሁሉም ሰው የተስተካከሉ ቪዲዮዎችን ለመማር ይወዳሉ" :  "Everyone adores animated videos for learning"}
          </h2>
          <p
            className={`text-justify ${
              isDarkTheme ? "text-gray-300" : "text-gray-900"
            }`}
          >
            {isAmharic ? "ብዙ ሰዎች ምስላዊ ተማሪዎች ናቸው፣ ስለዚህ ምስላዊ ይዘትን መፍጠር ትኩረታቸውን ሊስብ እና ስሜትን ሊፈጥር ይችላል። በእንኮይ፣ ለተማሪዎች አስደሳች ጉዞ የሚያቀርቡ አኒሜሽን ቪዲዮዎችን ለመስራት ያለንን እውቀት እንጠቀማለን።" : "Most people are visual learners, so creating visual content can capture their attention and evoke emotions. At Enkoy, we use our expertise to produce engaging animated videos that provide learners with an enjoyable journey."}
          </p>
        </motion.div>
      </motion.div>
      <br />
      <br />
      <br />

      {/* Animation Video Process Section */}
      <motion.div
        className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
        {...fadeInUp}
      >
        <motion.div className="flex flex-1" {...fadeInUp}>
          {isAmharic ? 
            <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-6xl">
            የኛ አኒሜሽን <br /> ቪዲዮ ሂደት
          </h2>
          : <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-6xl">
            Our animation <br /> video process
          </h2>}
        </motion.div>
        {isAmharic ?
           <motion.div
           className="flex-1 text-gray-900 text-[15px] text-justify"
           {...fadeInUp}
         >
           <p>
           ደንበኞቻችን ብዙውን ጊዜ አኒሜሽን ለማካተት ፍላጎት ይዘው ይቀርባሉ
             ሞጁሎቻቸው በተወሰነ አቅም. የትኞቹን ክፍሎች እንገመግማለን
             ሞጁል ለአኒሜሽን በጣም ተስማሚ ናቸው እና ዒላማው እንዴት እንደሆነ ይገምግሙ
             ተመልካቾች እና የትምህርት ዓላማዎች ከሚፈለገው ደረጃ ጋር ይጣጣማሉ
             አኒሜሽን.
           </p>
           <p>
           አኒሜሽን ለመስራት፣ በማጣመር የተለያዩ መሳሪያዎችን እንጠቀማለን።
             በደንብ የተፃፉ ስክሪፕቶች ከእይታ ማራኪ ግራፊክስ ጋር። በአስተሳሰብ
             የተነደፉ እነማዎች ሁኔታዎችን ያሳያሉ እና የተማሪ ትኩረትን ይመራሉ።
             በስልጠናው ሂደት ሁሉ. ገላጭ ቪዲዮም ይሁን
             አጠቃላይ የሥልጠና ሞጁል ፣ አኒሜሽን ለ eLearning አስፈላጊነትን ይጨምራል ፣
             ለሁሉም ተማሪዎች አሳታፊ እና ተለዋዋጭ ተሞክሮ መፍጠር።
           </p>
         </motion.div>
        :
         <motion.div
          className="flex-1 text-gray-900 text-[15px] text-justify"
          {...fadeInUp}
        >
          <p>
            Customers often approach us with a desire to include animation in
            their modules in some capacity. We assess which sections of the
            module are most suitable for animation and evaluate how the target
            audience and learning objectives align with the desired level of
            animation.
          </p>
          <p>
            We utilize various tools to craft our animations, combining
            well-written scripts with visually appealing graphics. Thoughtfully
            designed animations illustrate scenarios and guide learner attention
            throughout the training process. Whether it’s an explainer video or
            a general training module, animation adds vitality to eLearning,
            creating an engaging and dynamic experience for all learners.
          </p>
        </motion.div>}
      </motion.div>
    </motion.div>
  );
};

export default AnimationVideos;
