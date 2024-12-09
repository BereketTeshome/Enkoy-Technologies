import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const Safety = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const faqData = isAmharic
  ? [
      {
        question: "ለድርጅታዊ ፍላጎቶች ብጁ የመማሪያ መፍትሄዎች",
        answer: [
          `በእንኮይ ቴክኖሎጂስ፣ ደህንነት እና ጤና በስራ ቦታ ስልጠና እንጀምራለን በድርጅትዎ ወቅታዊ የደህንነት ልምዶች እና ተግዳሮቶች ላይ በጥልቀት በመገምገም። ይህ የተወሰኑ ፍላጎቶችን እና የተሟሉ መስፈርቶችን የሚያሟሉ ብጁ የሥልጠና ፕሮግራሞችን እንድንፈጥር ያስችለናል።`,
          "ተሳታፊዎች በውይይቶች ላይ በንቃት የሚሳተፉበት፣ ልምድ የሚለዋወጡበት እና ተግባራዊ የደህንነት ስልቶችን የሚያዘጋጁበት አሳታፊ የመማሪያ አካባቢን እናሳድጋለን። የእኛ ልምድ ያላቸው አሰልጣኞች ድርጅቶች የደህንነት ልምዶችን በብቃት እንዲተገብሩ ለመርዳት ቀጣይነት ያለው ድጋፍ እና ግብዓት ይሰጣሉ።",
        ],
      },
      {
        question: "ለፈጣን ተጽእኖ የእውነተኛ አለም መተግበሪያዎች",
        answer: [
          "የእኛ የሥልጠና ዘዴ የሥራ ቦታን ደህንነት አስፈላጊነት የሚያሳዩ የገሃዱ ዓለም ሁኔታዎችን እና ምሳሌዎችን ያካትታል። ተሳታፊዎች ትምህርታቸውን ትርጉም ባለው መንገድ ተግባራዊ ለማድረግ በተግባራዊ ልምምዶች፣ የቡድን ውይይቶች እና የድርጊት መርሃ ግብሮች ውስጥ ይሳተፋሉ። የእውነተኛ ህይወት ተግዳሮቶችን በመፍታት፣ ተማሪዎች ለአስተማማኝ የስራ አካባቢ አስተዋፅኦ ለማድረግ የሚያስፈልጉትን ክህሎቶች ያዳብራሉ።",
        ],
      },
    ]
  : [
    {
      question: "Tailored Learning Solutions for Organizational Needs",
      answer: [
        `At Enkoy Technologies, we begin our Safety and Health at Workplace Training with a thorough assessment of your organization’s current safety practices and challenges. This allows us to create customized training programs that address specific needs and compliance requirements.`,
        "We foster an engaging learning environment where participants can actively participate in discussions, share experiences, and develop actionable safety strategies. Our experienced trainers provide ongoing support and resources to help organizations effectively implement safety practices.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and simulations that illustrate the importance of workplace safety. Participants engage in practical exercises, group discussions, and action planning to apply their learning in a meaningful way. By tackling real-life challenges, learners develop the skills needed to contribute to a safer work environment.",
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
            src="/img/corporate-training/safety.svg"
            alt="Safety Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
           {isAmharic ? "ደህንነት እና ጤና በስራ ቦታ ስልጠና" : "Safety and Health at workplace training"} 
            
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "" : ""}
            Ensuring a Safe and Healthy Work Environment
          </motion.h2>
          <motion.p
            className={`mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-800"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "" : ""}
            At Enkoy Technologies, we prioritize the well-being of employees as
            a fundamental aspect of organizational success. Our Safety and
            Health at Workplace Training is designed to equip individuals and
            organizations with the knowledge and skills necessary to promote a
            safe and healthy work environment. By understanding and implementing
            effective safety practices, businesses can reduce risks, enhance
            productivity, and foster a culture of care.
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

        <motion.div
          className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex-1" {...fadeInUp}>
            <motion.img
              src="/img/corporate-training/safetyImg.webp"
              alt="Workplace Safety"
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
              {isAmharic ? "ለስራ ቦታ ደህንነት የሚለወጥ ትምህርት" : "Transformative Learning for Workplace Safety"}
              
            </motion.h2>
            <motion.p
              className={`mb-2 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic ? "ለደህንነት እና ጤና ስልጠና አቀራረባችን በተግባር ላይ ያተኩራል። ተሳታፊዎችን እንዲያውቁ፣ እንዲገመግሙ እና እንዲያውቁ የሚያበረታቱ መተግበሪያዎች በሥራ ቦታ አደጋዎችን መቀነስ. እንደ አስፈላጊ ርዕሰ ጉዳዮችን እንሸፍናለን የአደጋ ጊዜ ዝግጁነት፣ ergonomics፣ አደጋን መለየት፣ እና የጤና ደንቦች. በይነተገናኝ ወርክሾፖች እና በእጅ ላይ መልመጃዎች, ተሳታፊዎች የደህንነት ፕሮቶኮሎችን እንዴት እንደሚተገበሩ ይማራሉ እና በእነርሱ ውስጥ የጤና እና የደህንነት ባህልን ያስፋፋሉ ድርጅቶች." : "Our approach to Safety and Health Training focuses on practical applications that empower participants to recognize, assess, and mitigate workplace hazards. We cover essential topics such as emergency preparedness, ergonomics, hazard identification, and health regulations. Through interactive workshops and hands-on exercises, participants learn how to implement safety protocols and promote a culture of health and safety within their organizations."}
              
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
              {isAmharic ? "የደህንነት እና ደህንነት ባህል መገንባት" : "Building a Culture of Safety and Well-Being"}
              
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
            {isAmharic ? "ዛሬ በተለዋዋጭ የሥራ አካባቢ, ለደህንነት እና ለጤንነት ቅድሚያ መስጠት ለእያንዳንዱ ድርጅት ወሳኝ ነው. በእንኮይ ቴክኖሎጂስ፣ የእኛ ስልጠና እያንዳንዱ ሰራተኛ ደህንነቱ የተጠበቀ የስራ ቦታን የመጠበቅ ሃላፊነት የሚሰማው ንቁ የደህንነት ባህል መፍጠር አስፈላጊ መሆኑን ያጎላል። ተገቢነት እና ውጤታማነትን በማረጋገጥ የድርጅትዎን ልዩ ፍላጎቶች ለማሟላት ፕሮግራሞቻችንን እናዘጋጃለን።" : "In today’s dynamic work environment, prioritizing safety and health is crucial for every organization. At Enkoy Technologies, our training emphasizes the importance of creating a proactive safety culture where every employee feels responsible for maintaining a safe workplace. We tailor our programs to meet the specific needs of your organization, ensuring relevance and effectiveness."}
              
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
              src="/img/corporate-training/safetyImg2.webp"
              alt="Safety Training"
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
              {isAmharic ? "የእኛ የደህንነት እና የጤና ስልጠና መፍትሄዎች ቁልፍ አካላት" : "Key Components of Our Safety and Health Training Solutions"}
              
            </motion.h2>
          </motion.div>
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
                <b>Understanding Safety Regulations:</b> Educating participants
                on relevant workplace safety laws and regulations.
              </li>
              <li>
                <b>Hazard Recognition and Assessment:</b> Teaching employees how
                to identify potential hazards and assess risks in their work
                environment.
              </li>
              <li>
                <b>Emergency Preparedness:</b> Providing strategies for
                responding to emergencies, including evacuation procedures and
                first aid.
              </li>
              <li>
                <b>Promoting Ergonomics:</b> Encouraging practices that enhance
                physical well-being and reduce the risk of injury.
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p {...fadeInUp}>
              The impact of our Safety and Health at Workplace Training extends
              throughout your organization. As participants enhance their
              understanding of safety practices, the advantages include:
            </motion.p>
            <motion.ul className="py-5 pl-6 list-disc" {...fadeInUp}>
              <li>
                A safer work environment that reduces the likelihood of
                accidents and injuries.
              </li>
              <li>
                Increased employee morale and productivity as workers feel
                secure and valued.
              </li>
              <li>
                Enhanced organizational reputation as a company that prioritizes
                employee safety and health.
              </li>
              <li>
                Improved compliance with safety regulations, minimizing legal
                and financial risks.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
              Invest in Safety and Health at Workplace Training today to empower
              your workforce to create a safe, healthy, and productive work
              environment!
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Safety;
