import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const VideoEditing = () => {
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
            src="/img/services/microlearning.svg"
            alt={
              isAmharic
                ? "የቪዲዮ ማሻሻያ አገልግሎቶች"
                : "Video Editing Icon"
            }
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "የቪዲዮ ማሻሻያ አገልግሎቶች" : "Video Editing Services"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "የእይታ ይዘትዎን በፕሮፌሽናል ቪዲዮ ማሻሻያ አገልግሎቶች ይለውጡ"
              : "Transform Your Visual Content with Professional Video Editing Services"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? `በኤንኮይ፣ የእይታ ይዘትዎን ከፍ የሚያደርግ እና ታዳሚዎን ​​የሚያሳትፉ ፕሮፌሽናል የቪዲዮ አርትዖት አገልግሎቶችን እናቀርባለን። 
              የእኛ ሂደት የሚጀምረው ግቦችዎን እና ሊያስተላልፉት የሚፈልጉትን መልእክት በመረዳት ነው፣ ይህም የመጨረሻው ምርት ከእይታዎ ጋር በትክክል የሚስማማ መሆኑን በማረጋገጥ ነው። 
              መልእክትዎን በብቃት የሚያስተላልፉ እና ዘላቂ ተጽእኖ የሚፈጥሩ የተወለወለ ጥራት ያላቸውን ቪዲዮዎች በማድረስ ላይ እናተኩራለን`
              : `At Enkoy, we provide professional video editing services that elevate your visual content and engage your audience. 
              Our process starts with understanding your goals and the message you want to convey, ensuring that the final product aligns perfectly with your vision. 
              We focus on delivering polished, high-quality videos that effectively communicate your message and make a lasting impact.`}
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

export default VideoEditing;
