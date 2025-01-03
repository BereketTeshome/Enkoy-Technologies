import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const BasicComputer = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const faqData = isAmharic
  ? [
      {
        question: "ለግለሰብ ፍላጎቶች ብጁ የእድገት መፍትሄዎች",
        answer: [
          `በእንኮይ ቴክኖሎጂዎች፣ እያንዳንዱ ተማሪ ልዩ ፍላጎቶች እና ግቦች እንዳሉት እንገነዘባለን። የእኛ መሰረታዊ የኮምፒውተር ክህሎት ስልጠና ተሳታፊዎች ማዳበር ያለባቸውን ልዩ ችሎታዎች ለመለየት ግምገማ በማድረግ ይጀምራል። ይህ አሁን ካለው ችሎታቸው እና የወደፊት ምኞታቸው ጋር የሚጣጣሙ ብጁ የስልጠና ፕሮግራሞችን እንድንፈጥር ያስችለናል።`,
          "ተሳታፊዎች ጥያቄዎችን የሚጠይቁበት፣ ችሎታቸውን የሚለማመዱበት እና በችሎታቸው ላይ እምነት የሚያገኙበት ደጋፊ የትምህርት አካባቢ ላይ አፅንዖት እንሰጣለን። መምህራኖቻችን መማርን ለማመቻቸት እና ተሳታፊዎች በቁሱ ምቾት እንዲሰማቸው ለማድረግ ቀጣይነት ያለው ግብረ መልስ እና እገዛ ይሰጣሉ።",
        ],
      },
      {
        question: "ለፈጣን ተጽእኖ የእውነተኛ አለም መተግበሪያዎች",
        answer: [
          "የእኛ የስልጠና ዘዴ የገሃዱ አለም ፈተናዎችን የሚያንፀባርቁ ተግባራዊ ልምምዶችን እና ሁኔታዎችን ያካትታል። ተሳታፊዎች ክህሎቶቻቸውን ደህንነቱ በተጠበቀ አካባቢ እንዲለማመዱ የሚያስችላቸው በይነተገናኝ እንቅስቃሴዎች ውስጥ ይሳተፋሉ። ሰነዶችን እና የቀመር ሉሆችን ከመፍጠር ጀምሮ ሙያዊ ኢሜይሎችን ለመላክ ተማሪዎች ለዕለታዊ ተግባራቸው በቀጥታ የሚተገበር ልምድ ያገኛሉ።",
        ],
      },
    ]
  : [
    {
      question: "Tailored Development Solutions for Individual Needs",
      answer: [
        `At Enkoy Technologies, we recognize that each learner has unique needs and goals. Our Basic Computer Skills Training begins with an assessment to identify the specific skills that participants need to develop. This allows us to create customized training programs that align with their current abilities and future aspirations.`,
        "We emphasize a supportive learning environment, where participants can ask questions, practice skills, and gain confidence in their abilities. Our instructors provide ongoing feedback and assistance to facilitate learning and ensure participants feel comfortable with the material.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates practical exercises and scenarios that reflect real-world challenges. Participants engage in interactive activities that allow them to practice their skills in a safe environment. From creating documents and spreadsheets to sending professional emails, learners gain hands-on experience that is directly applicable to their daily tasks.",
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
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/corporate-training/basicComputer.jpg"
            alt=""
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "መሰረታዊ የኮምፒውተር ክህሎት ስልጠና" : "Basic computer skill training"}
            
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "ግለሰቦችን በአስፈላጊ ዲጂታል ብቃቶች ማበረታታት" : "Empowering Individuals with Essential Digital Competencies"}
            
          </motion.h2>
          <motion.p
            className={`mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-800"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በ Enkoy Technologies መሰረታዊ የኮምፒዩተር ችሎታዎች ዛሬ በዲጂታል አለም ውስጥ መሠረታዊ መሆናቸውን እንረዳለን። የእኛ መሰረታዊ የኮምፒዩተር ክህሎት ስልጠና ግለሰቦች ዘመናዊ የስራ ቦታዎችን በልበ ሙሉነት ለመምራት የሚያስፈልጉትን አስፈላጊ ቴክኒካል ክህሎቶችን ለማስታጠቅ የተነደፈ ነው። ጀማሪም ሆንክ እውቀትህን ለማደስ የምትፈልግ የስልጠና ፕሮግራሞቻችን በኮምፒውተር እውቀት ላይ ጠንካራ መሰረት ይሰጣሉ።" : "At Enkoy Technologies, we understand that basic computer skills are fundamental in today’s digital world. Our Basic Computer Skills Training is designed to equip individuals with the essential technical skills needed to navigate modern workplaces confidently. Whether you're a novice or looking to refresh your knowledge, our training programs provide a solid foundation in computer literacy."}
            
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
              src="/img/corporate-training/basicComputerImg.webp"
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
              {isAmharic ? "ለዲጂታል ብቃት የሚለወጥ ትምህርት" : "Transformative Learning for Digital Proficiency"}
              
            </motion.h2>
            <motion.p
              className={`mb-2 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic ? "የመሠረታዊ የኮምፒውተር ክህሎት ስልጠና አካሄዳችን አሣታፊ እና ተግባራዊ የመማር ልምድን በመፍጠር ላይ ያተኩራል። ተሳታፊዎች የተለመዱ የሶፍትዌር መተግበሪያዎችን መስራት፣ ፋይሎችን እና ማህደሮችን ማስተዳደር እና በይነመረብን ደህንነቱ በተጠበቀ ሁኔታ እና በብቃት መጠቀምን ይማራሉ። የተግባር ልምምዶችን ከእውነታው ዓለም አፕሊኬሽኖች ጋር በማጣመር ተማሪዎች በግል እና በሙያዊ ህይወታቸው ክህሎቶቻቸውን ወዲያውኑ መተግበር እንደሚችሉ እናረጋግጣለን።" : "Our approach to Basic Computer Skills Training focuses on creating engaging and practical learning experiences. Participants will learn to operate common software applications, manage files and folders, and use the internet safely and effectively. By combining hands-on exercises with real-world applications, we ensure that learners can apply their skills immediately in their personal and professional lives."}
              
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
              {isAmharic ? "በዲጂታል አከባቢዎች ላይ እምነት መገንባት" : "Building Confidence in Digital Environments"}
              
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
            {isAmharic ? "ቴክኖሎጂ እያደገ ሲሄድ፣ መሰረታዊ የኮምፒዩተር ክህሎትን በደንብ ማወቅ ወሳኝ ነው። በኤንኮይ ቴክኖሎጂዎች፣ በዲጂታል መሳሪያዎች እና መድረኮች ላይ በግለሰቦች ላይ መተማመንን ለመፍጠር ዓላማ እናደርጋለን። የእኛ ስልጠና እንደ የቃላት ማቀናበሪያ፣ የቀመር ሉህ አስተዳደር፣ የኢሜይል ግንኙነት እና የበይነመረብ አሰሳ ያሉ ቁልፍ ቦታዎችን ይሸፍናል። የድርጅትዎን ልዩ ፍላጎቶች ለማሟላት ፕሮግራሞቻችንን እናዘጋጃለን፣ ይህም ለሁሉም ተሳታፊዎች አግባብነት ያለው እና ተፈፃሚነቱን ያረጋግጣል።" : "As technology continues to evolve, having a strong grasp of basic computer skills is crucial. At Enkoy Technologies, we aim to build confidence in individuals as they navigate digital tools and platforms. Our training covers key areas such as word processing, spreadsheet management, email communication, and internet browsing. We tailor our programs to meet the specific needs of your organization, ensuring relevance and applicability for all participants."}
              
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
              src="/img/corporate-training/basicComputerImg2.webp"
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

export default BasicComputer;
