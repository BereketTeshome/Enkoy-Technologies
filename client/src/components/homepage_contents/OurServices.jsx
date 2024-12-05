import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const OurServices = () => {
  const language = useSelector((state) => state.language.language);
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";

  const translations = {
    eng: [
      {
        icon: "/img/services/learningExperiences.png",
        title: "Customized learning",
        description:
          "Off-the-shelf eLearning might be a quick hack, but custom eLearning gets real results.",
        link: "/services/self-paced-learning",
      },
      {
        icon: "/img/services/gamificationImg.png",
        title: "Consulting and advisory",
        description:
          "We love a virtual approach, but sometimes, the best instructor is an actual instructor.",
        link: "/services/learning-experiences",
      },
      {
        icon: "/img/services/why_mobile_learning.png",
        title: "Animation and video production",
        description:
          "Scale your team with learning services and strategy from ELM Learning.",
        link: "/services/animation-videos",
      },
      {
        icon: "/img/services/animatedVideosImg.png",
        title: "Capacity Building",
        description:
          "We have content and delivery for soft skills, corporate compliance training, and more.",
        link: "/services/LXD",
      },
    ],
    amh: [
      {
        icon: "/img/services/learningExperiences.png",
        title: "ቅንብር የተሠራ ትምህርት",
        description:
          "ዝርዝር የተዘጋጀ ኢ-ትምህርት ፈጣን መፍትሔ ሊሆን ቢችልም፣ ቅንብር የተሠራ ኢ-ትምህርት እውነተኛ ውጤት ያመጣል።",
        link: "/services/self-paced-learning",
      },
      {
        icon: "/img/services/gamificationImg.png",
        title: "አማካሪነት እና ምክር",
        description:
          "ምናባዊ አቀራረብን እንወዳለን, ግን አንዳንድ ጊዜ, ምርጡ አስተማሪ ትክክለኛ አስተማሪ ነው።",
        link: "/services/learning-experiences",
      },
      {
        icon: "/img/services/why_mobile_learning.png",
        title: "አኒሜሽን እና ቪዲዮ ማምረት",
        description: "ቡድንዎን ከኤልኤም ትምህርት የመማር አገልግሎቶች እና ስትራቴጂ ጋር ያስመዝኑት።",
        link: "/services/animation-videos",
      },
      {
        icon: "/img/services/animatedVideosImg.png",
        title: "የአቅም ግንባታ",
        description: "ለስላሳ ክህሎት፣ ለድርጅት ተገዢነት ስልጠና እና ለሌሎችም ይዘት እና አቅርቦት አለን።",
        link: "/services/LXD",
      },
    ],
  };

  const services = translations[language] || translations.eng;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`py-12 ${isDarkTheme ? "bg-gray-800" : "bg-gray-50"}`}>
      <div className="px-6 mx-auto max-w-7xl sm:px-12">
        <motion.h2
          className={`mb-12 text-4xl font-semibold text-center ${
            isDarkTheme ? "text-gray-100" : "text-gray-700"
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {language === "amh" ? "አገልግሎቶቻችን" : "Our Services"}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex items-start p-6 rounded-lg shadow-md ${
                isDarkTheme ? "bg-gray-700" : "bg-white"
              }`}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotateX: 10,
                rotateY: 10,
                boxShadow: isDarkTheme
                  ? "0px 10px 30px rgba(255, 255, 255, 0.2)"
                  : "0px 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <div className="flex-shrink-0">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-16 h-16"
                />
              </div>
              <div className="ml-4">
                <h3
                  className={`text-xl font-semibold ${
                    isDarkTheme ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-2 ${
                    isDarkTheme ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className={`mt-4 font-medium ${
                    isDarkTheme
                      ? "text-indigo-400 hover:text-indigo-300"
                      : "text-indigo-600 hover:text-indigo-800"
                  }`}
                >
                  {language === "amh" ? "ተማሩ በተጨማሪ →" : "Learn more →"}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
