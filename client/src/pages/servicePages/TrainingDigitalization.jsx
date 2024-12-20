import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const TrainingDigitalization = () => {
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
            src="/img/services/translation.svg"
            alt={
              isAmharic
                ? "የቤት ውስጥ ማማከር ወደ ዲጂታላይዜሽን ምልክት"
                : "In-House Training Digitalization Icon"
            }
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic
              ? "የቤት ውስጥ ስልጠና ዲጂታል ማድረግ"
              : "In-House Training Digitalization"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "በተለዋዋጭ ዲጂታል ተሞክሮዎች ስልጠናን ማብቀል"
              : "Revolutionizing Training Through Dynamic Digital Experiences"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? `በእንኮይ፣ ባህላዊ የቤት ውስጥ ስልጠናን ወደ ተለዋዋጭ ዲጂታል ልምዶች በመቀየር ላይ እንሰራለን። 
              የእኛ አካሄድ የድርጅትዎን ልዩ የስልጠና ፍላጎቶች እና አላማዎች በመረዳት ይጀምራል። 
              ከቡድንህ ጋር የሚስማማ አሳታፊ፣ በይነተገናኝ ይዘት ለመንደፍ ከእርስዎ ጋር በቅርበት እንተባበራለን። 
              አዳዲስ ዲጂታል መሳሪያዎችን እና ቴክኖሎጂዎችን በመጠቀም፣ የስልጠና መርሃ ግብሮችዎ ተደራሽ ብቻ ሳይሆኑ የእውቀት ማቆያ እና የክህሎት እድገትን በማሳደግ ውጤታማ መሆናቸውን እናረጋግጣለን። ለጥራት ያለን ቁርጠኝነት በተማሪ ግብረመልስ እና የአፈጻጸም መለኪያዎች ላይ በመመስረት የስልጠና ቁሳቁሶችን ያለማቋረጥ እንገመግማለን እና እናጥራለን። በዲጂታላይዜሽን ሂደታችን፣ በድርጅትዎ ውስጥ ቀጣይነት ያለው መሻሻል እና ፈጠራ ባህልን በማጎልበት የስራ ሃይልዎ በራሳቸው ፍጥነት እንዲማሩ እናበረታታለን`
              : `At Enkoy, we specialize in transforming traditional in-house training into dynamic digital experiences. 
              Our approach begins with understanding your organization’s specific training needs and objectives. 
              We collaborate closely with you to design engaging, interactive content that resonates with your team. 
              By leveraging the latest digital tools and technologies, we ensure that your training programs are not only accessible but also effective in enhancing knowledge retention and skills development. Our commitment to quality means we continuously evaluate and refine the training materials based on learner feedback and performance metrics. Through our digitalization process, we empower your workforce to learn at their own pace, fostering a culture of continuous improvement and innovation within your organization.`}
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

export default TrainingDigitalization;
