import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const GraphicsDesign = () => {
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
            alt={isAmharic ? "የግራፊክ ዲዛይን አርማ" : "Graphic Design Icon"}
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "የግራፊክ ዲዛይን አርማ" : "Graphic Design Services"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? "በሚገርም ግራፊክ እና አርማ ዲዛይን አገልግሎቶች የምርት ስምዎን ከፍ ያድርጉት"
              : "Elevate Your Brand with Stunning Graphic and Logo Design Services"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100" : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic
              ? `በኤንኮይ፣ የምርት ስምዎን ዋና ይዘት የሚይዙ ልዩ እና የማይረሱ አርማዎችን ጨምሮ ማራኪ የግራፊክ ዲዛይን መፍትሄዎችን በመፍጠር ላይ እንሰራለን። የእኛ ተሰጥኦ ያለው የንድፍ ቡድን የእርስዎን ራዕይ፣ እሴቶች እና የታለመ ታዳሚ ለመረዳት ከእርስዎ ጋር በቅርበት ይሰራል፣ ይህም እያንዳንዱ የንድፍ አካል ከገበያዎ ጋር የሚስማማ መሆኑን ያረጋግጣል። በዲጂታል እና የህትመት ሚዲያዎች ላይ ለተለያዩ አፕሊኬሽኖች ተስማሚ የሆኑ ምስላዊ ግራፊክስ እና ሁለገብ አርማዎችን በመስራት ላይ እናተኩራለን። ግባችን የምርት መለያዎን የሚያሳድጉ ብቻ ሳይሆን በደንበኞችዎ ላይ ዘላቂ ስሜት የሚፈጥሩ ንድፎችን ማድረስ ነው`
              : `At Enkoy, we specialize in creating captivating graphic design solutions, including unique and memorable logos that capture the essence of your brand. Our talented design team works closely with you to understand your vision, values, and target audience, ensuring that every design element resonates with your market. We focus on crafting visually stunning graphics and versatile logos that are suitable for various applications across digital and print media. Our goal is to deliver designs that not only enhance your brand identity but also leave a lasting impression on your customers.`}
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

export default GraphicsDesign;
