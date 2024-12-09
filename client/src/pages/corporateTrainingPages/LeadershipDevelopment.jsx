import FAQSection from "../../components/corporateTraining/FAQSection";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const LeadershipDevelopment = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";


  const faqData = isAmharic
  ? [
      {
        question: "ለእርስዎ የተሰራ የመሪነት እድገት አውድ",
        answer: [
          `በእንኮይ ቴክኖሎጂዎች፣የእኛ የአመራር ስልጠና ከድርጅትዎ የተለየ ባህል እና አላማ ጋር ለማስተጋባት በረቀቀ መንገድ የተዘጋጀ ነው። የእርስዎን ተልዕኮ፣ ራዕይ፣ እሴቶች እና ግቦች በጥልቀት በመረዳት እንጀምራለን። ይህ የመሠረታዊ እውቀት ከዐውደ-ጽሑፍዎ ጋር ወጥ በሆነ መልኩ የሚስማማ የድርጅት አመራር ልማት መርሃ ግብር እንድንፈጥር ያስችለናል።`,
          "እንዲሁም የአመራር ስልጠናዎ የሚፈለገውን ውጤት በትኩረት እንከታተላለን። በመሪዎችዎ አፈጻጸም ላይ ሊያዩዋቸው የሚፈልጓቸውን ልዩ ማሻሻያዎች በመለየት፣ እውነተኛ ውጤቶችን የሚመሩ የታለሙ መፍትሄዎችን መፍጠር እንችላለን። በተጨማሪም፣ የተለያዩ ደረጃዎች የተለየ የአመራር ችሎታዎች እንደሚፈልጉ በመገንዘብ የድርጅትዎን የሕይወት ዑደት ደረጃ እንገመግማለን።",
        ],
      },
      {
        question: "ቁጥጥር የሚደረግበት የገሃዱ ዓለም ተግዳሮቶች",
        answer: [
          "የእንኮይ ሥልጠና ሥርዓት ተማሪዎችን እውነተኛ የመሪነት ችግሮች ውስጥ ይጠለልላቸዋል፣ የማይሰራውን ተግባራት ሲጋለጥ ሊታይ እንዲሆን ይደረጋል።",
          "መሪዎቻችሁን ከእነዚህ ትክክለኛ ተግዳሮቶች ጋር በመጋፈጥ፣ ውስብስብ ሁኔታዎችን እንዲሄዱ እናዘጋጃቸዋለን። የእኛ አሠልጣኝ ውጤታማ የለውጥ አስተዳደር ስትራቴጂዎችን በማዘጋጀት በድርጅታዊ ለውጦች፣ በቴክኖሎጂ እድገቶች እና በኢኮኖሚያዊ መልክዓ ምድራዊ ለውጦች እንዲመሩ በማስታጠቅ ላይ ያተኩራል።",
        ],
      },
    ]
  : [
      {
        question: "Tailored Leadership Development for Your Unique Context",
        answer: [
          `At Enkoy Technologies, our leadership training is intricately designed to resonate with your organization’s specific culture and objectives. We begin by gaining a deep understanding of your mission, vision, values, and goals. This foundational knowledge allows us to craft a corporate leadership development program that aligns seamlessly with your context.`,
          "We also pay close attention to the desired outcomes of your leadership training. By identifying the specific improvements you want to see in your leaders’ performance, we can create targeted solutions that drive real results. Additionally, we assess your organization’s life cycle stage, recognizing that different phases demand distinct leadership capabilities.",
        ],
      },
      {
        question: "Real-World Challenges in a Controlled Environment",
        answer: [
          "Our training methodology immerses learners in realistic leadership scenarios, allowing them to experience the challenges leaders face firsthand. Through simulations, we evaluate their performance and gather feedback from various perspectives—team members, supervisors, and customers—to provide comprehensive insights.",
          "By confronting your leaders with these authentic challenges, we prepare them to navigate complex situations. Our coaching emphasizes the development of effective change management strategies, equipping them to lead through organizational transformations, technological advancements, and shifts in the economic landscape.",
        ],
      },
    ];

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
            className="w-[70px]"
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10 "
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
            <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-6xl">
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
      <div className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <FAQSection faqData={faqData} />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/img/corporate-training/leadershipImg2.png"
            alt=""
            className="w-[90%]"
          />
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col w-full gap-32 px-5 py-32 bg-[#FFCD57] md:px-20 sm:px-10 md:flex-row">
        <motion.div
          className="flex flex-1 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          {isAmharic ? 
            <h2 className="inline-block text-3xl font-semibold text-gray-900 md:text-5xl">
            የእኛ የ<br /> የአመራር ልማት <br /> የመፍትሄ ሃሳቦች
          </h2>
          : 
          <h2 className="inline-block text-3xl font-semibold text-gray-900 md:text-5xl">
            Key Components of Our <br /> Leadership Development <br /> Solutions
          </h2>
          }
        </motion.div>
        {isAmharic ? 
          <motion.div
          className="flex-1 text-gray-900 text-[15px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
          አጠቃላይ የስልጠና አካሄዳችን የሚያተኩረው፡
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5 *:text-justify">
            <li>
            <b>ተጨባጭ መሰናክሎች፡</b>መሪዎች ፈታኝ ያጋጥማቸዋል፣
              ችሎታቸውን እና የውሳኔ አሰጣጥን የሚፈትኑ የገሃዱ ዓለም ሁኔታዎች
              ችሎታዎች.
            </li>
            <li>
            <b>የጋራ ችግር መፍታት፡ </b> የቡድን ስራን እናሳድጋለን።
              ትብብር, መሪዎች ለማሸነፍ እንዴት አብረው መሥራት እንደሚችሉ ማስተማር
              እንቅፋቶች.
            </li>
            <li>
            <b>የግጭት አፈታት፡</b> የችግሩን መንስኤዎች በጥልቀት እንመረምራለን።
            ግጭቶችን እና ውጤታማ የመፍታት ስልቶችን ያቅርቡ.
            </li>
            <li>
            <b>ስሜታዊ ብልህነት፡</b> መሪዎች የተለያዩ ነገሮችን እንዴት ማስተዳደር እንደሚችሉ ይማራሉ።
            የራሳቸውን ስሜታዊ ሚዛን ሲጠብቁ ስብዕናዎች.
            </li>
          </ul>
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
          ለድርጅትዎ የሚለወጡ ጥቅሞች
          </h2>
          <p className={`text-justify ${"text-gray-900"}`}>
          የእኛ የአመራር ልማት መፍትሔዎች ተጽእኖ በጣም ሩቅ ነው
            ከግለሰብ መሪዎች በላይ። መሪዎቻችሁ የበለጠ ውጤታማ ሲሆኑ፣
            ጥቅሞቹ በመላው ድርጅትዎ ውስጥ ይወድቃሉ፡-
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5 text-justify">
            <li>
            ቡድኖች ከእርስዎ ድርጅታዊ ባህል ጋር የሚጣጣሙ ውጤቶችን አግኝተዋል
            እና ዓላማዎች.
            </li>
            <li>
            የሰራተኞች ተሳትፎ እና ቁርጠኝነት ይጨምራሉ ፣ አወንታዊ እድገት
            የሥራ አካባቢ.
            </li>
            <li>መሪዎቹ የፈጠራ አስተሳሰብን ሲያነሳሱ ፈጠራ ያድጋል።</li>
            <li>ትብብር ይሻሻላል፣ ወደ ጠንካራ የቡድን ተለዋዋጭነት ይመራል።</li>
            <li>
            አጠቃላይ ምርታማነት እና ውጤታማነት ይጨምራል ፣ የእርስዎን
            የድርጅቱ ስኬት ።
            </li>
          </ul>
          <p>
          በአመራር ልማት ላይ መዋዕለ ንዋይ ማፍሰስ መሪዎቻችሁን ብቻ አይደለም የሚቀይሩት።
            ግን መላው ድርጅትዎ። ቅርስ እንዲገነቡ እንረዳዎታለን
            ዛሬ ጠንካራ አመራር!
          </p>
        </motion.div>
        : 
        <motion.div
          className="flex-1 text-gray-900 text-[15px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            Our comprehensive training approach focuses on:
          </h2>
          <ul className="list-disc pl-6 py-5 *:mb-5 *:text-justify">
            <li>
              <b>Realistic Obstacles:</b>Leaders confront challenging,
              real-world scenarios that test their skills and decision-making
              abilities.
            </li>
            <li>
              <b>Collaborative Problem-Solving: </b> IWe foster teamwork and
              collaboration, teaching leaders how to work together to overcome
              obstacles.
            </li>
            <li>
              <b>Conflict Resolution:</b> We delve into the root causes of
              conflicts and provide strategies for effective resolution.
            </li>
            <li>
              <b>Emotional Intelligence:</b> Leaders learn how to manage diverse
              personalities while maintaining their own emotional balance.
            </li>
          </ul>
          <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            Transformative Benefits for Your Organization
          </h2>
          <p className={`text-justify ${"text-gray-900"}`}>
            The impact of our leadership development solutions extends far
            beyond individual leaders. As your leaders become more effective,
            the benefits ripple throughout your organization:
          </p>
          <ul className="list-disc pl-6 py-5 *:mb-5 text-justify">
            <li>
              Teams achieve results that align with your organizational culture
              and objectives.
            </li>
            <li>
              Employee engagement and commitment increase, fostering a positive
              work environment.
            </li>
            <li>Innovation flourishes as leaders inspire creative thinking.</li>
            <li>Collaboration improves, leading to stronger team dynamics.</li>
            <li>
              Overall productivity and effectiveness rise, driving your
              organization’s success.
            </li>
          </ul>
          <p>
            Investing in leadership development transforms not just your leaders
            but your entire organization. Let us help you build a legacy of
            strong leadership today!
          </p>
        </motion.div>
        }
      </div>
    </div>
  );
};

export default LeadershipDevelopment;
