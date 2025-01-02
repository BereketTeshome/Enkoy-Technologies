import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const LearningExperience = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const faqData = isAmharic
  ? [
      {
        question: "ለልዩ አውድዎ ብጁ የመማሪያ መፍትሄዎች",
        answer: [
          `በ Enkoy technologies የ LXD ስልጠና አካሄዳችን በድርጅትዎ ባህል እና ዓላማዎች ውስጥ ስር የሰደደ ነው። ስለ ተልእኮዎ፣ እይታዎ፣ እሴቶችዎ እና የሚፈልጓቸው የትምህርት ውጤቶች ላይ ጥልቅ ትንተና በማካሄድ እንጀምራለን። ይህ የመሠረታዊ ግንዛቤ ከድርጅታዊ አውድዎ ጋር ያለችግር የሚጣጣሙ የመማር ልምዶችን እንድናዳብር ያስችለናል።`,
          "እንዲሁም የአመራር ስልጠናዎ የሚፈለገውን ውጤት በትኩረት እንከታተላለን። በመሪዎችዎ አፈጻጸም ላይ ሊያዩዋቸው የሚፈልጓቸውን ልዩ ማሻሻያዎች በመለየት፣ እውነተኛ ውጤቶችን የሚመሩ የታለሙ መፍትሄዎችን መፍጠር እንችላለን። በተጨማሪም፣ የተለያዩ ደረጃዎች የተለየ የአመራር ችሎታዎች እንደሚፈልጉ በመገንዘብ የድርጅትዎን የሕይወት ዑደት ደረጃ እንገመግማለን።",
        ],
      },
      {
        question: "በደጋፊ አካባቢ ውስጥ የእውነተኛ ዓለም መተግበሪያዎች",
        answer: [
          "የኛ የሥልጠና ዘዴ ተሳታፊዎች የገሃዱ ዓለም ፈተናዎችን በሚመስሉ በተጨባጭ የትምህርት ሁኔታዎች ውስጥ ያጠምቃል። በይነተገናኝ ማስመሰያዎች እና በትብብር ፕሮጄክቶች፣ የትምህርታቸውን ውጤት እንገመግማለን እና ከበርካታ አመለካከቶች - እኩዮች፣ አማካሪዎች እና ባለድርሻ አካላት ግብረ መልስ እንሰበስባለን።",
          "ተማሪዎችን በተጨባጭ ሁኔታዎች ውስጥ በማስቀመጥ፣ ውስብስብ ፈተናዎችን በብቃት እንዲወጡ እናዘጋጃቸዋለን። የእኛ ስልጠና ወዲያውኑ ሊተገበሩ የሚችሉ የተግባር ክህሎቶችን ማዳበር ላይ አፅንዖት ይሰጣል፣ ይህም ተሳታፊዎች ሊተገበሩ በሚችሉ ግንዛቤዎች እንዲተዉ ያደርጋል።",
        ],
      },
    ]
  : [
    {
      question: "Tailored Learning Solutions for Your Unique Context",
      answer: [
        `At Enkoy Technologies, our approach to LXD training is deeply rooted in your organization’s culture and objectives. We begin by conducting a thorough analysis of your mission, vision, values, and desired learning outcomes. This foundational understanding enables us to develop learning experiences that align seamlessly with your organizational context.`,
        "We also pay close attention to the desired outcomes of your leadership training. By identifying the specific improvements you want to see in your leaders’ performance, we can create targeted solutions that drive real results. Additionally, we assess your organization’s life cycle stage, recognizing that different phases demand distinct leadership capabilities.",
      ],
    },
    {
      question: "Real-World Applications in a Supportive Environment",
      answer: [
        "Our training methodology immerses participants in realistic learning scenarios that mimic real-world challenges. Through interactive simulations and collaborative projects, we evaluate their learning outcomes and gather feedback from multiple perspectives—peers, mentors, and stakeholders.",
        "By placing learners in authentic situations, we prepare them to tackle complex challenges effectively. Our training emphasizes developing practical skills that can be immediately applied, ensuring that participants leave with actionable insights.",
      ],
    },
  ];


  // Updated fadeInUp object
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
            src="/img/corporate-training/bb.webp"
            alt=""
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "በአስተሳሰብ ንድፍ ትምህርትን ማሳደግ" : "Enhancing Learning Through Thoughtful Design"}
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "የመማር ልምድ ንድፍ (LXD) ስልጠና" : "Learning Experience Design (LXD) Training"}
            
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በ Enkoy technologies ውጤታማ የመማር ተሞክሮዎች አቅምን ለመክፈት ቁልፍ ናቸው ብለን እናምናለን። የእኛ የመማር ልምድ ንድፍ (LXD) ስልጠና ተሳታፊዎችን ለማሳተፍ እና ትርጉም ያለው የትምህርት ውጤቶችን ለማስተዋወቅ የተነደፈ ነው። ለአዳዲስ ሰራተኞች ስልጠና እያዳበርክም ይሁን ያለውን የስራ ሃይልህን እያሳደግክ ከሆነ፣ የእኛ አካሄድ መማር ጠቃሚ እና አስደሳች መሆኑን ያረጋግጣል።" : "At Enkoy Technologies, we believe that effective learning experiences are key to unlocking potential. Our Learning Experience Design (LXD) training is crafted to engage participants and promote meaningful learning outcomes. Whether you’re developing training for new employees or upskilling your existing workforce, our approach ensures that learning is both impactful and enjoyable."}
            
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
              src="/img/corporate-training/learningExperienceImg.webp"
              alt=""
              className="w-[90%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            />
          </motion.div>
          <motion.div className="flex-1" {...fadeInUp}>
            <h2
              className={`text-4xl sm:text-5xl mb-7 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-950"
              }`}
            >
              {isAmharic ? "ለዘላቂ ለውጥ የለውጥ ትምህርት ተሞክሮዎች" : "Transformative Learning Experiences for Lasting Change"}
              
            </h2>
            <p
              className={`mb-2 text-justify ${
                isDarkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {isAmharic ? "የእኛ የLXD ስልጠና ተሳትፎን እና ማቆየትን የሚያበረታቱ ተለዋዋጭ የመማር ተሞክሮዎችን በመፍጠር ላይ ያተኩራል። የፈጠራ ንድፍ መርሆዎችን ከጎልማሶች ትምህርት ምርጥ ተሞክሮዎች ጋር በማዋሃድ፣ ድርጅቶች ተማሪዎችን የሚያስተጋቡ እና ውጤቶችን የሚያመጡ ፕሮግራሞችን እንዲያዘጋጁ እናግዛለን። የእኛ ስልጠና ተሳታፊዎች ከይዘት ጋር በንቃት እንዲሳተፉ ያበረታታል፣ ይህም የተማሩትን በገሃዱ ዓለም ሁኔታዎች ውስጥ የመተግበር ችሎታቸውን ያሳድጋል።" : "Our LXD training focuses on creating transformative learning experiences that foster engagement and retention. By integrating innovative design principles with best practices in adult learning, we help organizations develop programs that resonate with learners and drive results. Our training encourages participants to actively engage with content, enhancing their ability to apply what they learn in real-world situations."}
              
            </p>
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
            <h2 className="inline-block text-4xl font-semibold text-gray-900 md:text-5xl">
            {isAmharic ? "ለወደፊት ዝግጁ የሆኑ የመማሪያ አካባቢዎችን መገንባት" : "Building Future-Ready Learning Environments"}
              
            </h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px] text-justify"
            {...fadeInUp}
          >
            <p>
            {isAmharic ? "የትምህርታዊ ገጽታው እየተሻሻለ ሲመጣ፣ የመማር አካሄዳችንም እንዲሁ መሆን አለበት። በእንኮይ ቴክኖሎጂዎች፣ ከድርጅትዎ ፍላጎቶች ጋር የሚጣጣሙ ለወደፊት ዝግጁ የሆኑ የመማር ተሞክሮዎችን በመንደፍ ላይ ያተኮረ ነው። የእኛ የLXD ስልጠና ተማሪዎች ወደፊት ላሉ ፈተናዎች የታጠቁ መሆናቸውን በማረጋገጥ እንደ ሂሳዊ አስተሳሰብ፣ ትብብር እና መላመድ ያሉ ቁልፍ ችሎታዎችን ያጎላል።" : "As the educational landscape evolves, so must our approaches to learning. At Enkoy Technologies, we specialize in designing future-ready learning experiences that adapt to the changing needs of your organization. Our LXD training emphasizes key skills such as critical thinking, collaboration, and adaptability, ensuring that learners are equipped for the challenges ahead."}
              
            </p>
            <p>
            {isAmharic ? "ልዩ ፍላጎቶቹን እና ተግዳሮቶቹን ለመረዳት ከድርጅትዎ ጋር በቅርበት እንሰራለን፣ ይህም የተወሰኑ ፍላጎቶችን የሚፈታ ብጁ የመማር ተሞክሮዎችን እንድንፈጥር ያስችለናል። ቀጣይነት ያለው የመማር ባህልን በማስተዋወቅ ድርጅቶች በየጊዜው በሚለዋወጠው አካባቢ ለመልማት የተዘጋጀ የሰው ኃይል እንዲገነቡ እንረዳቸዋለን።" : "We work closely with your organization to understand its unique goals and challenges, allowing us to create customized learning experiences that address specific needs. By promoting a culture of continuous learning, we help organizations build a workforce that is prepared to thrive in an ever-changing environment."}
              
            </p>
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
              src="/img/corporate-training/learningExperienceImg2.png"
              alt=""
              className="w-[90%]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>
        <br />
        <br />
        <br />
        {/* <motion.div
          className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col"
          variants={{ animate: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div className="flex flex-1" {...fadeInUp}>
            <h2 className="inline-block text-3xl font-semibold text-gray-900 md:text-5xl">
            {isAmharic ? "የእኛ የመማር ልምድ ንድፍ መፍትሄዎች ቁልፍ አካላት" : "Key Components of Our Learning Experience Design Solutions"}
              
            </h2>
          </motion.div>
          {isAmharic ?
            <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <p>አጠቃላይ የስልጠና አካሄዳችን የሚያተኩረው፡</p>
            <ul className="py-5 pl-6 text-justify list-disc">
              <li>
              <b>አሳታፊ ይዘት፡</b> የሚማርኩ እና ተሞክሮዎችን መማር
              ተሳታፊዎችን ማበረታታት.
              </li>
              <li>
              <b>የጋራ ትምህርት፡</b> የቡድን ስራ እድሎች እና
              ግንዛቤን ለመጨመር የአቻ መስተጋብር።
              </li>
              <li>
              <b>ተጨባጭ ሁኔታዎች፡</b> ትክክለኛ የሚያንፀባርቁ ማስመሰያዎች
              ተማሪዎች ሊያጋጥሟቸው የሚችሉ ተግዳሮቶች።
              </li>
              <li>
              <b>የግብረመልስ ዘዴዎች፡</b> ለማሳወቅ ቀጣይነት ያለው የግብረመልስ ቀለበቶች
              እና የትምህርት ውጤታማነትን ማሻሻል.
              </li>
            </ul>
            <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
            ለድርጅትዎ የሚለወጡ ጥቅሞች
            </h2>
            <p className={`text-justify ${"text-gray-900"}`}>
            የእኛ የመማር ልምድ የንድፍ መፍትሔዎች ተጽእኖ እየሰፋ ይሄዳል
              በድርጅትዎ ውስጥ በሙሉ። የሰው ሃይልዎ ሲሳተፍ
              ውጤታማ የመማር ልምዶች, ጥቅሞቹ የሚከተሉትን ያካትታሉ:
            </p>
            <ul className="py-5 pl-6 text-justify list-disc">
              <li>
              በሠራተኞች መካከል የተሻሻለ እውቀት ማቆየት እና አተገባበር.
              </li>
              <li>
              የተሻሻለ ተሳትፎ እና ስነ ምግባር፣ አወንታዊ ትምህርትን ማዳበር
              ባህል.
              </li>
              <li>
              ተማሪዎች ለማበርከት ስልጣን ሲሰማቸው ፈጠራን ይጨምራል
              ሀሳቦች.
              </li>
              <li>
              የተጠናከረ ትብብር እና ግንኙነት በቡድን ውስጥ።
              </li>
              <li>
              አጠቃላይ ምርታማነት እና የአፈፃፀም ማሻሻያዎች, መንዳት
              ድርጅታዊ ስኬት.
              </li>
            </ul>
            <p>
            ዛሬ በመማሪያ ንድፍዎ ላይ ኢንቨስት ያድርጉ እና ለወደፊት ዝግጁ የሆነ ይፍጠሩ
            በየትኛውም አካባቢ የላቀ የሰው ኃይል!
            </p>
          </motion.div>
          : <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <p>Our comprehensive training approach focuses on:</p>
            <ul className="py-5 pl-6 text-justify list-disc">
              <li>
                <b>Engaging Content:</b> Learning experiences that captivate and
                motivate participants.
              </li>
              <li>
                <b>Collaborative Learning:</b> Opportunities for teamwork and
                peer interaction to enhance understanding.
              </li>
              <li>
                <b>Realistic Scenarios:</b> Simulations that reflect actual
                challenges learners may face.
              </li>
              <li>
                <b>Feedback Mechanisms:</b> Continuous feedback loops to inform
                and improve learning effectiveness.
              </li>
            </ul>
            <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
              Transformative Benefits for Your Organization
            </h2>
            <p className={`text-justify ${"text-gray-900"}`}>
              The impact of our Learning Experience Design solutions extends
              throughout your organization. As your workforce engages with
              effective learning experiences, the benefits include:
            </p>
            <ul className="py-5 pl-6 text-justify list-disc">
              <li>
                Improved knowledge retention and application among employees.
              </li>
              <li>
                Enhanced engagement and morale, fostering a positive learning
                culture.
              </li>
              <li>
                Increased innovation as learners feel empowered to contribute
                ideas.
              </li>
              <li>
                Strengthened collaboration and communication across teams.
              </li>
              <li>
                Overall productivity and performance improvements, driving
                organizational success.
              </li>
            </ul>
            <p>
              Invest in your learning design today and create a future-ready
              workforce that excels in any environment!
            </p>
          </motion.div>}
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default LearningExperience;
