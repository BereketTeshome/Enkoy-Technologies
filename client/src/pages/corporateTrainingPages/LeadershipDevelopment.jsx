import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const LeadershipDevelopment = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger duration between each child
        when: "beforeChildren", // Ensure container animates before children
      },
    },
  };

  // Variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    
    },
  };

  return (
    <div className={`pt-20 ${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}>
      <div className="flex flex-col items-center w-full">
        <motion.div
          className="sm:w-[60%] pb-20 w-[80%]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.img
            src="/img/corporate-training/customerTraining.webp"
            alt=""
            className="w-[140px]"
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10 "
            variants={childVariants}
          >
            {isAmharic ? "የአመራር ልማት ስልጠና" : "Leadership development training"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            variants={childVariants}
          >
            {/* {isAmharic ? "" : ""} */}
            {isAmharic ? "ውጤት ለማምጣት እና ለማነሳሳት የተነደፈ የአመራር ልማት ስልጠና" : "Leadership development training designed to motivate and achieve results."}
          
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            variants={childVariants}
          >
            {isAmharic ? "በእንኮይ ቴክኖሎጂዎች የአመራር ችሎታን ለማዳበር ቆርጠናል! ቡድንዎ ወደ አመራርነት ሚና ለመግባት ዝግጁ የሆኑ የተፈጥሮ መሪዎችን ወይም ግለሰቦችን ጨምሮ፣ በአመራር ማጎልበቻ ስልጠና መፍትሄዎች አማካኝነት አስፈላጊ ክህሎቶችን እንዲያስተምሯቸው ልንረዳዎ እንችላለን።" : "At Enkoy Technologies, we are committed to cultivating leadership skills! Whether your team includes natural leaders or individuals ready to step into leadership roles, we can assist you in teaching them essential skills through our leadership development training solutions."}
            
          </motion.p>
          <motion.a
            href="/contact"
            className={`px-6 py-3 text-white ${
              isDarkTheme ? "bg-yellow-500" : "bg-gray-900"
            }`}
            variants={childVariants}
          >
            {isAmharic ? "ያግኙን" : "Contact Us"}
            
          </motion.a>
        </motion.div>
        <br />
        <br />
        <br />
        <div className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/img/corporate-training/leadersImg.png"
              alt=""
              className="w-[90%]"
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className={`text-4xl sm:text-5xl mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-950"
              }`}
            >
              {isAmharic ? "ለዘላቂ ተጽእኖ የለውጥ አመራር እድገት" : "Transformative Leadership Development for Lasting Impact"}
              
            </h2>
            
            <p
              className={`mb-2 text-justify ${
                isDarkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {isAmharic ? "በእንኮይ ቴክኖሎጂስ፣ ውጤታማ አመራር የድርጅት ስኬት የማዕዘን ድንጋይ ነው ብለን እናምናለን። የኛ የለውጥ አራማጅ የአመራር ልማት ስልጠና በተግባራቸው የላቀ ብቃት ያላቸውን ብቻ ሳይሆን ቡድኖቻቸውን ትልቅ ደረጃ ላይ ለመድረስ የሚያነሳሱ መሪዎችን ለማፍራት ይረዳል።" : "At Enkoy Technologies, we believe that effective leadership is the cornerstone of organizational success. Our transformative leadership development training helps cultivate leaders who not only excel in their roles but also inspire their teams to achieve greatness."}
              
            </p>
            <p
              className={`text-justify ${
                isDarkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {isAmharic ? "ተግባራዊ ክህሎቶችን ከስልታዊ ግንዛቤዎች ጋር በማጣመር፣ ፕሮግራሞቻችን የተነደፉት መሪዎች በጥልቀት እንዲያስቡ እና በቆራጥነት እንዲሰሩ ለመጠየቅ ነው። ተሳታፊዎች በዕለት ተዕለት ተግባራቸው ውስጥ የተማሩትን መተግበር እንደሚችሉ በማረጋገጥ በገሃዱ ዓለም መተግበሪያዎች ላይ እናተኩራለን።" : "By combining practical skills with strategic insights, our programs are designed to challenge leaders to think critically and act decisively. We focus on real-world applications, ensuring that participants can implement what they learn in their day-to-day operations."}
              
            </p>
          </motion.div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
          <motion.div
            className="flex flex-1 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
            {isAmharic ? "ለወደፊት ዝግጁ የሆኑ መሪዎችን መገንባት" : "Building Future-Ready Leaders"}
              
            </h2>
          </motion.div>
          {isAmharic ? 
            <motion.div
            className="flex-1 text-gray-900 text-[15px] *:mb-2 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
            የንግድ ምኅዳሩ እየተሻሻለ ሲመጣ መሪዎቻችንም እንዲሁ መሆን አለባቸው። በ
              ኤንኮይ ቴክኖሎጂዎች፣ ለወደፊት ዝግጁ የሆኑ መሪዎችን በመገንባት ላይ ያተኮረ ነው።
              ሁልጊዜ በሚለዋወጥ አካባቢ ውስጥ ማደግ የሚችል። የእኛ አመራር
              የእድገት ስልጠና እንደ ስትራቴጂክ ባሉ አስፈላጊ ክህሎቶች ላይ ያተኩራል
              አስተሳሰብ፣ ስሜታዊ ብልህነት እና መላመድ አመራር።
            </p>
            <p>
            ድርጅቱን ለመረዳት ከድርጅትዎ ጋር በቅርበት እንተባበራለን
              ብጁ ስልጠና እንድንፈጥር ያስችለናል ግቦች እና ተግዳሮቶች
              ልምድ. ፕሮግራሞቻችን ለአሁኑ መሪዎችን ብቻ አያዘጋጁም።
              ፈታኝ ሁኔታዎችን ግን አስቀድሞ ለመገመት የሚያስችል አርቆ አስተዋይነት ያስታጥቃቸዋል።
              እና ለወደፊት ፍላጎቶች ምላሽ ይስጡ.
            </p>
            <p>
            ቀጣይነት ያለው የመማር እና የማደግ ባህልን በማሳደግ እኛ
              ድርጅቶች ዝግጁ የሆኑ መሪዎችን የቧንቧ መስመር እንዲያዘጋጁ መርዳት
              የነገውን ፈተናዎች ፊት ለፊት ለመቋቋም።
            </p>
          </motion.div>
          
          : 
          <motion.div
            className="flex-1 text-gray-900 text-[15px] *:mb-2 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              As the business landscape evolves, so too must our leaders. At
              Enkoy Technologies, we specialize in building future-ready leaders
              who can thrive in an ever-changing environment. Our leadership
              development training focuses on essential skills such as strategic
              thinking, emotional intelligence, and adaptive leadership.
            </p>
            <p>
              We collaborate closely with your organization to understand its
              goals and challenges, allowing us to create a customized training
              experience. Our programs not only prepare leaders for current
              challenges but also equip them with the foresight to anticipate
              and respond to future demands.
            </p>
            <p>
              By fostering a culture of continuous learning and development, we
              help organizations cultivate a pipeline of leaders who are ready
              to meet tomorrow’s challenges head-on.
            </p>
          </motion.div>
          }
        </div>
      </div>
      <br />
      <br />
      <br />
      
      
    </div>
  );
};

export default LeadershipDevelopment;
