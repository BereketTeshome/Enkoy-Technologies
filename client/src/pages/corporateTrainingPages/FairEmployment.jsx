import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const FairEmployment = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const faqData = isAmharic
  ? [
      {
        question: "ለድርጅታዊ ስኬት ብጁ የመማሪያ መፍትሄዎች",
        answer: [
          `በ Enkoy Technologies የኛን የፍትሃዊ የስራ ልምምዶች ስልጠና የምንጀምረው በድርጅትዎ ወቅታዊ ፖሊሲዎች እና አሰራሮች ላይ ባለው አጠቃላይ ግምገማ ነው። ይህ ከፍትሃዊ የስራ ስምሪት ጋር የተያያዙ ልዩ ተግዳሮቶችን እና እድሎችን የሚፈቱ ብጁ የስልጠና ፕሮግራሞችን እንድንፈጥር ያስችለናል።`,
          "ተሳታፊዎች ትርጉም ያለው ውይይት የሚያደርጉበት፣ ልምድ የሚለዋወጡበት እና ተግባራዊ ስልቶችን የሚያዘጋጁበት የትብብር የመማሪያ አካባቢን እናሳድጋለን። ልምድ ያላቸው አሰልጣኞቻችን ድርጅቶች ፍትሃዊ የስራ ልምዶችን በብቃት እንዲተገብሩ ለመርዳት ቀጣይነት ያለው ድጋፍ እና ግብአት ይሰጣሉ።",
        ],
      },
      {
        question: "የእውነተኛ ዓለም አፕሊኬሽኖች ለዘላቂ ለውጥ",
        answer: [
          "Our training methodology incorporates real-world scenarios and case studies that illustrate the significance of fair employment practices. Participants engage in role-playing exercises, group discussions, and action planning to apply their learning in a practical context. By working through real-life challenges, learners develop the skills needed to foster a fair and inclusive workplace.",
        ],
      },
    ]
  : [
    {
      question: "Tailored Learning Solutions for Organizational Success",
      answer: [
        `At Enkoy Technologies, we begin our Fair Employment Practice Training with a comprehensive assessment of your organization’s current policies and practices. This allows us to create customized training programs that address specific challenges and opportunities related to fair employment.`,
        "We foster a collaborative learning environment where participants can engage in meaningful discussions, share experiences, and develop actionable strategies. Our experienced trainers provide ongoing support and resources to help organizations implement fair employment practices effectively.",
      ],
    },
    {
      question: "Real-World Applications for Lasting Change",
      answer: [
        "Our training methodology incorporates real-world scenarios and case studies that illustrate the significance of fair employment practices. Participants engage in role-playing exercises, group discussions, and action planning to apply their learning in a practical context. By working through real-life challenges, learners develop the skills needed to foster a fair and inclusive workplace.",
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
            src="/img/corporate-training/employability.webp"
            alt=""
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "ፍትሃዊ የስራ ልምድ ስልጠና" : "Fair employment practice training"}
            
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በስራ ቦታ ላይ እኩልነትን እና ማካተትን ማሳደግ" : "Promoting Equity and Inclusion in the Workplace"}
            
          </motion.h2>
          <motion.p
            className={`mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-800"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በ Enkoy Technologies የበለፀገ እና ሁሉን አቀፍ የስራ ቦታ ለመፍጠር ፍትሃዊ የቅጥር አሰራሮች አስፈላጊ ናቸው ብለን እናምናለን። የእኛ የፍትሃዊ የስራ ስምሪት ልምምድ ስልጠና ድርጅቶች እና ሰራተኞች የፍትሃዊነትን፣ የመከባበር እና የመደመር ባህልን ለማዳበር የሚያስፈልጉትን ዕውቀት እና ክህሎት ለማስታጠቅ የተዘጋጀ ነው። ፍትሃዊ የስራ ልምዶችን በመረዳት እና በመተግበር ንግዶች የሰራተኞችን እርካታ ማሳደግ፣ ማቆየትን ማሻሻል እና አጠቃላይ ስኬትን ሊመሩ ይችላሉ።" : "At Enkoy Technologies, we believe that fair employment practices are essential for creating a thriving and inclusive workplace. Our Fair Employment Practice Training is designed to equip organizations and employees with the knowledge and skills needed to foster a culture of equity, respect, and inclusion. By understanding and implementing fair employment practices, businesses can enhance employee satisfaction, improve retention, and drive overall success."}
            
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
              src="/img/corporate-training/fairEmploymentImg.webp"
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
              {isAmharic ? "ለፍትሃዊ የስራ ቦታ የለውጥ ትምህርት" : "Transformative Learning for a Fair Workplace"}
              
            </motion.h2>
            <motion.p
              className={`mb-2 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic ? "ለፍትሃዊ የስራ ልምድ ስልጠና አካሄዳችን ያተኩራል። ተሳታፊዎችን የሚያበረታቱ ተግባራዊ፣ ተግባራዊ ሊሆኑ የሚችሉ ስልቶች ከአድልዎ፣ አድልዎ፣ እና ጋር የተያያዙ ጉዳዮችን ማወቅ እና መፍታት በሥራ ቦታ ኢ-ፍትሃዊነት. እንደ አስፈላጊ ርዕሰ ጉዳዮችን እንሸፍናለን የቅጥር ፍትሃዊነት፣ ፍትሃዊ አያያዝ፣ የግጭት አፈታት፣ እና የብዝሃነት እና ማካተት አስፈላጊነት. በይነተገናኝ በኩል ወርክሾፖች እና ውይይቶች, ተሳታፊዎች ስራን እንዴት መፍጠር እንደሚችሉ ይማራሉ እያንዳንዱን ግለሰብ ዋጋ ያለው እና ፍትሃዊነትን የሚያበረታታ አካባቢ ሁሉም የቅጥር ልምዶች." : "Our approach to Fair Employment Practice Training focuses on practical, actionable strategies that empower participants to recognize and address issues related to discrimination, bias, and inequity in the workplace. We cover essential topics such as recruitment fairness, equitable treatment, conflict resolution, and the importance of diversity and inclusion. Through interactive workshops and discussions, participants learn how to create a work environment that values every individual and promotes fairness in all employment practices."}
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
              className="inline-block text-4xl font-semibold text-gray-900 md:text-6xl"
              {...fadeInUp}
            >
              {isAmharic ? "ግንዛቤን መገንባት እና ለተጠያቂ ተግባራት ቁርጠኝነት" : "Building Awareness and Commitment to Responsible Practices"}
              
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
            {isAmharic ? "ዛሬ ባለው ልዩ ልዩ የስራ አካባቢ፣ ፍትሃዊ የስራ ልምዶችን መረዳት ለሁሉም ሰራተኞች ወሳኝ ነው። በእንኮይ ቴክኖሎጂስ፣ የኛ ስልጠና የፍትሃዊነት እና የመደመር መርሆዎችን አፅንዖት ይሰጣል፣ ይህም በቅጥር፣ በማስተዋወቅ፣ በማካካሻ እና በስራ ቦታ መስተጋብር ላይ ፍትሃዊ አያያዝ አስፈላጊ መሆኑን በማሳየት ነው። የድርጅትዎን ልዩ ፍላጎቶች ለማሟላት ፕሮግራሞቻችንን እናዘጋጃለን፣ ይህም ስልጠናው ጠቃሚ እና ጠቃሚ መሆኑን በማረጋገጥ ነው።" : "In today’s diverse work environment, understanding fair employment practices is critical for all employees. At Enkoy Technologies, our training emphasizes the principles of equity and inclusion, highlighting the need for fair treatment in hiring, promotions, compensation, and workplace interactions. We tailor our programs to meet the specific needs of your organization, ensuring that the training is relevant and impactful."}
             
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
              src="/img/corporate-training/fairEmploymentImg2.webp"
              alt=""
              className="w-[90%]"
              {...fadeInUp}
            />
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
              className="inline-block text-3xl font-semibold text-gray-900 md:text-5xl"
              {...fadeInUp}
            >
              {isAmharic ? "የእኛ የፍትሃዊ የስራ ልምድ ስልጠና መፍትሄዎች ቁልፍ አካላት" : "Key Components of Our Fair Employment Practice Training Solutions"}
              
            </motion.h2>
          </motion.div>
          {isAmharic ? <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              አጠቃላይ የስልጠና አካሄዳችን የሚያተኩረው፡
            </motion.h2>
            <motion.ul className="py-5 pl-6 list-disc" {...fadeInUp}>
              <li>
              <b>ፍትሃዊ የስራ ልምምዶችን መረዳት፡</b> ማስተማር
                በፍትሃዊ የስራ ስምሪት መርሆዎች ላይ ተሳታፊዎች እና የእሱ
                በሥራ ቦታ አስፈላጊነት.
              </li>
              <li>
              <b>አድሎአዊነትን እና አድልኦን እውቅና መስጠት፡</b> ሰራተኞችን መርዳት
                አድልዎ እና አድሎአዊ ድርጊቶችን መለየት እና መቃወም
                መቅጠር እና አስተዳደር.
              </li>
              <li>
              <b>ብዝሃነትን እና ማካተትን ማስተዋወቅ፡</b> አበረታች ስልቶች
                ለተለያዩ አመለካከቶች ዋጋ ያለው የተለያየ የሰው ኃይል ለመፍጠር
                እና ዳራዎች.
              </li>
              <li>
              <b>ፍትሃዊ ፖሊሲዎችን መተግበር፡</b> መመሪያዎችን መስጠት
              ፍትሃዊ የስራ ስምሪት ፖሊሲዎችን እና አሰራሮችን በማውጣትና በማስፈጸም ላይ።
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              ለግለሰቦች እና ድርጅቶች የለውጥ ጥቅሞች
            </motion.h2>
            <motion.p {...fadeInUp}>
            የእኛ የፍትሃዊ የስራ ስምሪት ልምምድ ስልጠና ተጽእኖ ከዚ በላይ ይዘልቃል
              ግለሰብ ተሳታፊዎች, መላውን ድርጅት ጥቅም. እንደ
              ሰራተኞች ስለ ፍትሃዊ አሠራሮች ያላቸውን ግንዛቤ ያሳድጋሉ።
              ጥቅሞቹ የሚከተሉትን ያካትታሉ:
            </motion.p>
            <motion.ul className="py-5 pl-6 list-disc" {...fadeInUp}>
              <li>
              ብዝሃነትን የሚያደንቅ እና የበለጠ ሁሉን ያካተተ የስራ ቦታ ባህል
              ፍትሃዊነት.
              </li>
              <li>
                የሰራተኛ ሞራል እና እርካታ መጨመር, ወደ ከፍተኛ ይመራል
                የማቆያ ደረጃዎች.
              </li>
              <li>
                የተሻሻለ ድርጅታዊ ስም እንደ ፍትሃዊ እና ፍትሃዊ
                ቀጣሪ.
              </li>
              <li>
                የተሻሻለ የቡድን ስራ እና ትብብር ሰራተኞች ዋጋ እንደሚሰማቸው እና
                የተከበረ.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
            እርስዎን ለማጎልበት ዛሬ በፍትሃዊ የስራ ልምድ ስልጠና ላይ ኢንቨስት ያድርጉ
            ፍትሃዊ፣ አካታች እና ስኬታማ የስራ ቦታ ለመፍጠር የሰው ሃይል!
            </motion.p>
          </motion.div> : 
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              Our comprehensive training approach focuses on:
            </motion.h2>
            <motion.ul className="py-5 pl-6 list-disc" {...fadeInUp}>
              <li>
                <b>Understanding Fair Employment Practices:</b> Educating
                participants on the principles of fair employment and its
                importance in the workplace.
              </li>
              <li>
                <b>Recognizing Bias and Discrimination:</b> Helping employees
                identify and challenge biases and discriminatory practices in
                hiring and management.
              </li>
              <li>
                <b>Promoting Diversity and Inclusion:</b> Encouraging strategies
                to create a diverse workforce that values different perspectives
                and backgrounds.
              </li>
              <li>
                <b>Implementing Fair Policies:</b> Providing guidelines for
                developing and enforcing fair employment policies and practices.
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p {...fadeInUp}>
              The impact of our Fair Employment Practice Training extends beyond
              individual participants, benefiting the entire organization. As
              employees enhance their understanding of fair practices, the
              advantages include:
            </motion.p>
            <motion.ul className="py-5 pl-6 list-disc" {...fadeInUp}>
              <li>
                A more inclusive workplace culture that values diversity and
                equity.
              </li>
              <li>
                Increased employee morale and satisfaction, leading to higher
                retention rates.
              </li>
              <li>
                Enhanced organizational reputation as a fair and equitable
                employer.
              </li>
              <li>
                Improved teamwork and collaboration as employees feel valued and
                respected.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
              Invest in Fair Employment Practice Training today to empower your
              workforce to create a fair, inclusive, and successful workplace!
            </motion.p>
          </motion.div>
          }
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FairEmployment;
