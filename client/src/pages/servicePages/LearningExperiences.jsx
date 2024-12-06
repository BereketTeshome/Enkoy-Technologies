import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const LearningExperiences = () => {
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

  const processSteps = isAmharic
    ? [
        { title: "ፍላጎት ግምገማ", description: "አቀራረባችንን በብቃት ለማበጀት የእርስዎን ልዩ ግቦች፣ ታዳሚዎች እና ተግዳሮቶች በመረዳት እንጀምራለን" },
        { title: "የትብብር ንድፍ", description: "ቡድናችን አጠቃላይ እቅድ ለማውጣት፣ የእርስዎን ግንዛቤዎች እና በመማር ልምድ ዲዛይን (LXD) ላይ ያለንን እውቀት በማካተት ከእርስዎ ጋር ይተባበራል" },
        { title: "የይዘት ፈጠራ", description: "አሳታፊ ምስሎችን፣ በይነተገናኝ ክፍሎችን እና የተረት አወጣጥ ቴክኒኮችን በመጠቀም፣ ተማሪዎችን የሚያስተጋባ አሳማኝ eLearning ይዘት እንፈጥራለን" },
        { title: "ግምገማ እና አስተያየት", description: "ኮርሱ ከምትጠብቁት ነገር እና የመማር ዓላማዎች ጋር የሚጣጣም መሆኑን ለማረጋገጥ ግብረ መልስ በመሰብሰብ በግምገማው ሂደት ውስጥ እናሳትፍዎታለን" },
        { title: "ትምህርት አቅርቦት", description: "አንዴ ከጸደቀ፣ ተደራሽነትን እና የአጠቃቀም ቀላልነትን በማረጋገጥ የኢLearning ሞጁሎችን በተመረጡት የመሣሪያ ስርዓቶች ላይ እናሰማራለን" },
        { title: "በመቀጠል ማሻሻል", description: "ከጀመርን በኋላ የተማሪዎችን ተሳትፎ እና አፈፃፀም እንመረምራለን፣የትምህርት ልምዱን ያለማቋረጥ ለማሳደግ አስፈላጊ ማስተካከያዎችን እናደርጋለን" },
      ]
    : [
        { title: "Needs Assessment", description: "We begin by understanding your specific goals, audience, and challenges to tailor our approach effectively." },
        { title: "Collaborative Design", description: "Our team collaborates with you to develop a comprehensive plan, incorporating your insights and our expertise in Learning Experience Design (LXD)." },
        { title: "Content Creation", description: "Using engaging visuals, interactive elements, and storytelling techniques, we create compelling eLearning content that resonates with learners." },
        { title: "Review and Feedback", description: "We involve you in the review process, gathering feedback to ensure the course aligns with your expectations and learning objectives." },
        { title: "Implementation", description: "Once approved, we deploy the eLearning modules across your chosen platforms, ensuring accessibility and ease of use." },
        { title: "Continuous Improvement", description: "After launch, we analyze learner engagement and performance, making necessary adjustments to enhance the learning experience continuously." },
      ];

  return (
    <motion.div className={`pt-20 ${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}>
      <motion.div className="flex flex-col items-center w-full" {...fadeInUp}>
        {/* Header Section */}
        <motion.div className="sm:w-[60%] pb-20 w-[80%]" {...fadeInUp}>
          <motion.img
            src="/img/services/learningExperiences.png"
            alt={isAmharic ? "የትምህርት ምሳሌ አማራጭ" : "Learning Experiences Icon"}
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FF8689] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "ትምህርት ምሳሌዎች" : "Learning Experiences"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${isDarkTheme ? "text-gray-100" : "text-gray-950"}`}
            {...fadeInUp}
          >
            {isAmharic
              ? "የተሻሻለ ምሳሌዎች"
              : "Elevating Learning Experiences with Design Consulting"}
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`}
            {...fadeInUp}
          >
            {isAmharic
              ? "በቀላል እና ምሳሌዎች ከፍተኛ የተገኘ ለምሳሌ ከምሳሌዎች ምሳሌ ምሳሌ እና ምሳሌ."
              : "At Enkoy, we combine innovative design and dynamic engagement techniques to provide exceptional consulting services for designing effective eLearning solutions."}
          </motion.p>

          {/* Process Section */}
          <motion.h2
            className={`text-2xl font-semibold my-5 ${isDarkTheme ? "text-gray-100" : "text-gray-950"}`}
            {...fadeInUp}
          >
            {isAmharic ? "ሂደታችን" : "Our Process"}
          </motion.h2>
          <motion.ol className={`list-decimal pl-6 ${isDarkTheme ? "text-gray-100" : "text-gray-900"}`} {...fadeInUp}>
            {processSteps.map((step, index) => (
              <li key={index} className="mb-5">
                <b>{step.title}:</b> {step.description}
              </li>
            ))}
          </motion.ol>
          <motion.a
            href="/contact"
            className={`px-6 py-3 text-white ${isDarkTheme ? "bg-yellow-500" : "bg-gray-900"}`}
            {...fadeInUp}
          >
            {isAmharic ? "ያግኙን" : "Contact Us"}
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LearningExperiences;
