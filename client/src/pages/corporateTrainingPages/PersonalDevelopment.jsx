import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const PersonalDevelopment = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const faqData = isAmharic
  ? [
      {
        question: "ለግለሰብ ፍላጎቶች ብጁ የእድገት መፍትሄዎች",
        answer: [
          `በእንኮይ ቴክኖሎጂዎች የእኛ የግል ልማት ስልጠና የእያንዳንዱን ግለሰብ ልዩ ፍላጎቶች ለማሟላት ግላዊ ነው. የተሳታፊዎችን ግቦች፣ ተነሳሽነቶች እና ተግዳሮቶች ለመረዳት ጥልቅ ግምገማ በማካሄድ እንጀምራለን። ይህ የመሠረታዊ ግንዛቤ ከግል የዕድገት ጉዟቸው ጋር የሚስማሙ የታለሙ የሥልጠና ፕሮግራሞችን እንድንፈጥር ያስችለናል።`,
          "እንዲሁም ተሳታፊዎች እድገታቸውን እንዲከታተሉ እና ግባቸውን እንደ አስፈላጊነቱ እንዲያስተካክሉ በመርዳት ቀጣይነት ያለው ድጋፍ እና ግብረመልስ ቅድሚያ እንሰጣለን። የእኛ ስልጠና የእድገት አስተሳሰብን ያጎለብታል፣ ግለሰቦች እንደ የህይወት ዘመን ጉዞ መማርን እንዲቀበሉ ያበረታታል።",
        ],
      },
      {
        question: "ለፈጣን ተጽእኖ የእውነተኛ አለም መተግበሪያዎች",
        answer: [
          "የእኛ የሥልጠና ዘዴ ተሳታፊዎች የተማሩትን ወዲያውኑ እንዲተገብሩ የሚያስችሏቸውን የገሃዱ ዓለም ሁኔታዎችን እና ተግባራዊ ልምምዶችን ያካትታል። በተጫዋችነት፣ በቡድን ውይይቶች እና እራስን በማንፀባረቅ እንቅስቃሴዎች ውስጥ በመሳተፍ ግለሰቦች ትምህርታቸውን የሚያጠናክር የተግባር ልምድ ያገኛሉ።",
          "ተሳታፊዎችን በዕለት ተዕለት ሕይወታቸው ውስጥ ሊዋሃዱ የሚችሉ ተግባራዊ መሳሪያዎችን እና ቴክኒኮችን በማስታጠቅ የግል እና ሙያዊ ውጤታማነታቸውን በማጎልበት ላይ እናተኩራለን።",
        ],
      },
    ]
  : [
    {
      question: "Tailored Development Solutions for Individual Needs",
      answer: [
        `At Enkoy Technologies, our Personal Development Training is personalized to meet the unique needs of each individual. We begin by conducting a thorough assessment to understand participants' goals, motivations, and challenges. This foundational insight allows us to create targeted training programs that resonate with their personal development journey.`,
        "We also prioritize ongoing support and feedback, helping participants track their progress and adjust their goals as needed. Our training fosters a growth mindset, encouraging individuals to embrace learning as a lifelong journey.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and practical exercises that allow participants to apply what they learn immediately. By engaging in role-playing, group discussions, and self-reflection activities, individuals gain hands-on experience that reinforces their learning.",
        "We focus on equipping participants with practical tools and techniques that can be integrated into their daily lives, enhancing their personal and professional effectiveness.",
      ],
    },
  ];


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
      <motion.div
        className="flex flex-col items-center w-full"
        variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" variants={fadeInUp}>
          <motion.img
            src="/img/corporate-training/workLife.png"
            alt=""
            className="w-[140px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "የግል ልማት ስልጠና" : "Personal development training"}
            
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "ግለሰቦችን ለእድገት እና ለስኬት ማብቃት።" : "Empowering Individuals for Growth and Success"}
            
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በEnkoy Technologies፣ ለግለሰብ እርካታ እና ለድርጅታዊ ስኬት ግላዊ እድገት አስፈላጊ መሆኑን እንገነዘባለን። የእኛ የግል ልማት ስልጠና ግለሰቦች ሙሉ አቅማቸውን እንዲከፍቱ፣ ችሎታቸውን እንዲያሳድጉ እና የግል እና ሙያዊ ግቦቻቸውን እንዲያሳኩ ለማስቻል ነው።" : "At Enkoy Technologies, we recognize that personal development is essential for both individual satisfaction and organizational success. Our Personal Development Training is designed to empower individuals to unlock their full potential, enhance their skills, and achieve their personal and professional goals."}
           
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
        <motion.div
          className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/corporate-training/personalDevelopmentImg.webp"
              alt=""
              className="w-[90%]"
              {...fadeInUp}
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.h2
              className={`text-4xl sm:text-5xl mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-950"
              }`}
              {...fadeInUp}
            >
              {isAmharic ? "ለዘላቂ ተጽእኖ የሚለወጥ ግላዊ እድገት" : "Transformative Personal Growth for Lasting Impact"}
              
            </motion.h2>
            <motion.p
              className={`mb-2 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic ? "የግል ልማት አካሄዳችን ወደ ዘላቂ ለውጥ የሚያመሩ የለውጥ ልምዶችን በመፍጠር ላይ ያተኩራል። የተግባር ስልቶችን ከራስ ነጸብራቅ ልምምዶች ጋር እናዋህዳለን፣ ተሳታፊዎች ጠንካራ ጎኖቻቸውን፣ ድክመቶቻቸውን እና የእድገት ቦታዎችን እንዲለዩ እንረዳለን።" : "Our approach to personal development focuses on creating transformative experiences that lead to lasting change. We blend practical strategies with self-reflection exercises, helping participants identify their strengths, weaknesses, and areas for growth."}
              
            </motion.p>
          </motion.div>
        </motion.div>

        <br />
        <br />
        <br />
        <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex flex-1" {...fadeInUp}>
            <motion.h2
              className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl"
              {...fadeInUp}
            >
              {isAmharic ? "ተለዋዋጭ እና ቀልጣፋ ግለሰቦችን መገንባት" : "Building Resilient and Agile Individuals"}
              
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
            {isAmharic ? "ዛሬ ፈጣን በሆነው ዓለም ውስጥ፣ መቻል እና መላመድ ለስኬት ወሳኝ ባህሪያት ናቸው። የእኛ የግል ልማት ስልጠና እንደ ስሜታዊ ብልህነት፣ የጭንቀት አስተዳደር እና ውጤታማ ችግር መፍታት ያሉ ችሎታዎችን ያጎላል።" : "In today's fast-paced world, resilience and adaptability are vital traits for success. Our Personal Development Training emphasizes skills such as emotional intelligence, stress management, and effective problem-solving."}
              
            </motion.p>
          </motion.div>
        </motion.div>

        <br />
        <br />
        <br />
        <motion.div
          className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <FAQSection faqData={faqData} />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/corporate-training/personalDevelopmentImg2.png"
              alt=""
              className="w-[90%]"
              {...fadeInUp}
            />
          </motion.div>
        </motion.div>

        <br />
        <br />
        <br />
        
      </motion.div>
    </motion.div>
  );
};

export default PersonalDevelopment;
