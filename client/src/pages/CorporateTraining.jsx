import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const CorporateTraining = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const services = [
    {
      img: "/img/corporate-training/customerTraining.webp",
      title: isAmharic
        ? "መሪነት ልማት ስልጠና"
        : "Leadership development training",
      desc: isAmharic
        ? "ስልጠናው የተሰራው ለማነቃትና ውጤትን ለማግኘት ነው።"
        : "Leadership development training designed to motivate and achieve results.",
      path: "/corporate-training/leadership",
    },
    {
      img: "/img/corporate-training/bb.webp",
      title: isAmharic
        ? "ማማረሻ ተሞክሮ ዲዛይን ስልጠና (LXD)"
        : "Learning Experience Design (LXD) Training",
      desc: isAmharic
        ? "በበለጠ አስተያየት ትምህርትን ማሻሻል።"
        : "Enhancing Learning Through Thoughtful Design.",
      path: "/corporate-training/learning-experience",
    },
    {
      img: "/img/corporate-training/workLife.png",
      title: isAmharic
        ? "የግል ልማት ስልጠና"
        : "Personal development training",
      desc: isAmharic
        ? "ስልጠናው የተሰራው ለማነቃትና ውጤትን ለማግኘት ነው።"
        : "Leadership development training designed to motivate and achieve results.",
      path: "/corporate-training/personal-development",
    },
    {
      img: "/img/corporate-training/basicComputer.svg",
      title: isAmharic
        ? "የመሠረታዊ ኮምፒዩተር ክህሎት ስልጠና"
        : "Basic computer skill training",
      desc: isAmharic
        ? "እንደአለምአቀፍ ዜና ማድረግ የሚረዳ።"
        : "Empowering Individuals with Essential Digital Competencies",
      path: "/corporate-training/basic-computer",
    },
    {
      img: "/img/corporate-training/decentWork.webp",
      title: isAmharic
        ? "የሥራ አቅምና ኢንተርፕርነርሺፕ ስልጠና"
        : "Employability and entrepreneurship",
      desc: isAmharic
        ? "ኢንተርፕርነርሺፕ ማሻሻል።"
        : "Empowering Individuals for Career Success and Business Innovation",
      path: "/corporate-training/employability",
    },
    {
      img: "/img/corporate-training/dream.webp",
      title: isAmharic
        ? "አክብሮት ሥራና እና ኤስ.ዲ.ጂ ስልጠና"
        : "Decent work and SDG training",
      desc: isAmharic
        ? "ተግባራዊ ሥራና ታማኝ ልምድን ማስቻል።"
        : "Promoting Sustainable Employment and Responsible Practices",
      path: "/corporate-training/decent-work",
    },
    {
      img: "/img/corporate-training/employability.webp",
      title: isAmharic
        ? "እውቀትና ሥራ ልምድ ዝርጋት"
        : "Fair employment practice training",
      desc: isAmharic
        ? "በሥራ ቦታ ተቀባይነትንና ተስማማትን ማሳደግ።"
        : "Promoting Equity and Inclusion in the Workplace",
      path: "/corporate-training/fair-employment",
    },
    {
      img: "/img/corporate-training/safety.svg",
      title: isAmharic
        ? "እንደ ሥራ ቦታ ደህንነትና ጤና"
        : "Safety and Health at workplace training",
      desc: isAmharic
        ? "በሥራ ቦታ ደህንነትና ጤና አለመኖርን ማስቻል።"
        : "Ensuring a Safe and Healthy Work Environment",
      path: "/corporate-training/safety",
    },
    {
      img: "/img/corporate-training/aa.webp",
      title: isAmharic
        ? "የሥራ እና አሳልፎ ማስተዋወቅ"
        : "Work life balance training",
      desc: isAmharic
        ? "በማህበራዊነት እና ውጤት ላይ የተሰማሩ ምርጫዎችን ማስቻል።"
        : "Promoting Well-Being and Productivity",
      path: "/corporate-training/work-life",
    },
    {
      img: "/img/corporate-training/personalDevelopment.webp",
      title: isAmharic
        ? "የሴራ ችሎታ ስልጠና"
        : "Soft skill training",
      desc: isAmharic
        ? "ለስራ ሳንንቅ አስፈላጊ ተሟላቸው ክህሎቶችን ማሳደግ።"
        : "Cultivating Essential Interpersonal Skills for Success",
      path: "/corporate-training/soft-skill",
    },    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger duration between each child
      },
    },
  };

  // Variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={`pt-20 ${isDarkTheme ? "bg-gray-800 " : "bg-white"} `}>
      <div className="flex flex-col items-center w-full gap-10 px-5 overflow-hidden md:px-20 sm:px-10 lg:flex-row">
      <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p
            className={`uppercase text-sm font-semibold ${
              isDarkTheme ? "text-[#F28D8F]" : "text-[#FF8689]"
            } my-10 `}
          >
            {isAmharic ? "የኩባንያ ስልጠና አጠቃላይ መግለጫ" : "Corporate Training Overview"}
          </p>
          <h2
            className={`text-3xl font-semibold sm:text-5xl ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            } mb-7`}
          >
            {isAmharic ? "ኩባንያዊ ስልጠና" : "Corporate Training Services"}
          </h2>
          <p
            className={`mb-7 ${
              isDarkTheme ? "text-gray-300" : "text-gray-900"
            }`}
          >
            {isAmharic
              ? "የኮርፖሬት ስልጠና ብዙውን ጊዜ አሉታዊ ስም አለው, እና በጥሩ ምክንያት. ረጅም፣ ጊዜ ያለፈበት እና የማይረባ ሊሆን ይችላል። በእንኮይ ቴክኖሎጂዎች፣ ተማሪዎችን የሚያነሳሱ እና የሚያበረታቱ ብጁ እና በይነተገናኝ የኮርፖሬት ትምህርት ተሞክሮዎችን እናዳብራለን።"
              : "Corporate training often has a negative reputation, and for good reason. It can be lengthy, outdated, and unengaging. At Enkoy Technologies, we develop tailored and interactive corporate learning experiences that inspire and motivate learners."}
          </p>
          <div className="flex flex-col justify-between sm:items-center sm:flex-row gap-y-4">
            <a
              href="/contact"
              className={`px-6 py-3 text-white ${
                isDarkTheme ? "bg-[#FFCD57]" : "bg-gray-900"
              } `}
            >
              {isAmharic ? "አግኙን" : "Contact Us"}
            </a>
            <a
              href="#solutions"
              className={`flex items-center gap-3 py-3 font-semibold ${
                isDarkTheme ? "text-gray-300" : "text-gray-900"
              } sm:px-6`}
            >
              <span
                className={`p-4 rounded-full ${
                  isDarkTheme ? "bg-[#F28D8F]" : "bg-[#FF8689]"
                }`}
              >
                <IoIosArrowDown />
              </span>
              {isAmharic ? "መፍትሄዎቻችንን ይመልከቱ" : "See our solutions"}
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <img
            src="/img/corporate-training/corporate-training.png"
            alt=""
            className="w-[80%]"
          />
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <div
        className={`w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 ${"bg-[#B7D6D8]"} md:flex-row flex-col`}
      >
        <motion.div
          className="flex flex-1 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className={`inline-block md:text-5xl text-3xl ${"text-gray-900"} font-semibold`}
          >
            {isAmharic ? "የኮርፖሬት ስልጠና አገልግሎቶችን ለማቅረብ የእኛ ዘዴ." : "Our method for delivering corporate training services."}
          </h2>
        </motion.div>
        <motion.div
          className={`flex-1 text-[15px] ${"text-gray-900"}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            {isAmharic ? "“አስደሳች” እና “አዝናኝ” ከድርጅት ስልጠና ጋር ብዙም አይገናኙም። የሚያሳዝነው. የድርጅት ትምህርት እንደ ድርጊት መታየት አለበት። ከተራ ግዴታ ይልቅ እንክብካቤ።" 
            : " “Captivating” and “fun” are rarely linked to corporate training, which is unfortunate. Corporate learning should be viewed as an actof care rather than a mere obligation."}
          </p>
          {isAmharic ? 
            <p>
              At <b>Enkoy Technologies</b>, we aim for learners to connect with
              and engage with the content. That’s why we employ creative
              storytelling, interactive graphics and animations, and user
              preferences to foster genuine connections and provide more effective
              training.
            </p>
          : <p>
              በ <b>Enkoy Technologies</b>፣ ተማሪዎች እንዲገናኙ ዓላማ እናደርጋለን
              እና ከይዘቱ ጋር ይሳተፉ። ለዚህ ነው ፈጠራን የምንቀጥረው
              ተረት ተረት፣ በይነተገናኝ ግራፊክስ እና እነማዎች፣ እና ተጠቃሚ
              እውነተኛ ግንኙነቶችን ለመፍጠር እና የበለጠ ውጤታማ ለማቅረብ ምርጫዎች
              ስልጠና.
            </p>
            }
        </motion.div>
      </div>
      <br />
      <br id="solutions" />
      <br />
      <div className="px-5 sm:px-10 md:px-20">
        <div className="sm:text-center">
          <motion.h2
            className={`sm:text-5xl mb-10 text-4xl font-semibold ${
              isDarkTheme ? "text-gray-100" : "text-gray-950"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            {isAmharic ? `የእኛ የድርጅት የሥልጠና አገልግሎቶች` :  `Our corporate training services`}
          </motion.h2>
          {isAmharic ? 
            <motion.p
            className={`${isDarkTheme ? "text-gray-300" : "text-gray-900"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            
            ድርጅትዎ የታዛዥነት ስልጠና የሚያስፈልገው ወይም ለማሳደግ ያለመ ከሆነ የቡድን ስራ እና ርህራሄ፣ <br/> የኛ የድርጅት ማሰልጠኛ አገልግሎቶች ናቸው። የእርስዎን የስራ ኃይል ለማሳተፍ እና ለማበረታታት የተዘጋጀ።
          </motion.p>
          : <motion.p
            className={`${isDarkTheme ? "text-gray-300" : "text-gray-900"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            Whether your organization needs compliance training or aims to boost
            teamwork and empathy, <br /> our corporate training services are
            tailored to engage and motivate your workforce.
          </motion.p>}
        </div>
        <br />
        <motion.div
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((item, index) => {
            return (
              <motion.div
                className={`${isDarkTheme ? "text-gray-100 mt-10" : "text-gray-800 mt-10"}`}
                key={index}
                variants={childVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={item.img} alt="" className="w-[60px] mb-6" />
                <p className="mb-6 text-lg font-semibold">{item.title}</p>
                <p className="mb-2">{item.desc}</p>
                <a
                  href={item.path}
                  className={`mb-6 font-semibold border-b-2 pb-2 ${
                    isDarkTheme ? "border-[#FFB450]" : "border-[#F3858D]"
                  }`}
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CorporateTraining;
