import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const SoftSkill = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const faqData = isAmharic
  ? [
      {
        question: "ለድርጅታዊ ግቦች ብጁ የመማሪያ መፍትሄዎች",
        answer: [
          `በእንኮይ ቴክኖሎጂዎች የድርጅትዎን ወቅታዊ ፍላጎቶች እና ተግዳሮቶች በመገምገም ለስላሳ የችሎታ ስልጠና እንጀምራለን ። ይህ በግል የግለሰቦችን ችሎታዎች ለማሻሻል የተወሰኑ ቦታዎችን የሚመለከቱ ብጁ ፕሮግራሞችን እንድንፈጥር ያስችለናል።`,
          "ተሳታፊዎች ልምድ የሚለዋወጡበት፣ ችሎታቸውን የሚለማመዱበት እና ገንቢ አስተያየት የሚያገኙበት አሳታፊ የመማሪያ አካባቢን እናሳድጋለን። ልምድ ያላቸው አሰልጣኞቻችን ግለሰቦች ለስላሳ ክህሎቶቻቸውን በብቃት እንዲያሳድጉ ቀጣይነት ያለው ድጋፍ እና ግብአት ይሰጣሉ።",
        ],
      },
      {
        question: "ለፈጣን ተጽእኖ የእውነተኛ አለም መተግበሪያዎች",
        answer: [
          "የእኛ የስልጠና ዘዴ በስራ ቦታ ላይ ለስላሳ ክህሎቶች አስፈላጊነትን የሚያሳዩ ተጨባጭ ሁኔታዎችን እና ተግባራዊ ልምምዶችን ያካትታል. ተሳታፊዎች ደጋፊ በሆነ አካባቢ ክህሎቶቻቸውን እንዲለማመዱ በሚያስችሉ የማስመሰል፣ የጉዳይ ጥናቶች እና የቡድን ስራዎች ላይ ይሳተፋሉ። የእውነተኛ ህይወት ተግዳሮቶችን በመቅረፍ፣ ተማሪዎች በተግባራቸው ለመወጣት በራስ መተማመን እና ብቃት ያዳብራሉ።",
        ],
      },
    ]
  : [
    {
      question: "Tailored Learning Solutions for Organizational Goals",
      answer: [
        `At Enkoy Technologies, we begin our Soft Skills Training with an assessment of your organization’s current needs and challenges. This allows us to create customized programs that address specific areas for improvement in interpersonal skills.`,
        "We foster an engaging learning environment where participants can share experiences, practice skills, and receive constructive feedback. Our experienced trainers provide ongoing support and resources to help individuals enhance their soft skills effectively.",
      ],
    },
    {
      question: "Real-World Applications for Immediate Impact",
      answer: [
        "Our training methodology incorporates real-world scenarios and practical exercises that illustrate the importance of soft skills in the workplace. Participants engage in simulations, case studies, and group activities that allow them to practice their skills in a supportive environment. By addressing real-life challenges, learners develop the confidence and competence needed to excel in their roles.",
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
            src="/img/corporate-training/personalDevelopment.webp"
            alt="Soft Skills Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "ቀላል የክህሎት ስልጠና" : "Soft skill training"}
            
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "ለስኬት አስፈላጊ የግለሰቦችን ችሎታዎች ማዳበር" : "Cultivating Essential Interpersonal Skills for Success"}
            
          </motion.h2>
          <motion.p
            className={`mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-800"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በእንኮይ ቴክኖሎጂስ፣ የቴክኒክ ችሎታዎች ብቻ መሆናቸውን እንገነዘባለን። በዛሬው የሥራ ቦታ ለማደግ በቂ አይደለም. የእኛ ለስላሳ ክህሎቶች ስልጠና የተነደፈው ግለሰቦችን አስፈላጊ የሆኑ ግለሰባዊ ግንኙነቶችን ለማስታጠቅ ነው። በብቃት ለመግባባት፣ ከሌሎች ጋር ለመተባበር የሚያስፈልጉ ክህሎቶች፣ እና ከተለዋዋጭ አካባቢዎች ጋር መላመድ. እነዚህን ወሳኝ በማዳበር ችሎታዎች, ሰራተኞች ሙያዊ ግንኙነታቸውን ሊያሳድጉ እና ለድርጅቶቻቸው አዎንታዊ አስተዋፅዖ ያደርጋሉ." : "At Enkoy Technologies, we recognize that technical skills alone are not enough to thrive in today’s workplace. Our Soft Skills Training is designed to equip individuals with the essential interpersonal skills needed to communicate effectively, collaborate with others, and adapt to changing environments. By developing these crucial skills, employees can enhance their professional relationships and contribute positively to their organizations."}
            
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
              src="/img/corporate-training/softSkillImg.webp"
              alt="Soft Skill Image"
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
              {isAmharic ? "ለተሻሻለ ግንኙነት እና ትራንስፎርሜቲቭ ትምህርት ትብብር" : "Transformative Learning for Enhanced Communication and Collaboration"}
              
            </motion.h2>
            <motion.p
              className={`mb-2 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic ? "ለስላሳ ክህሎት ስልጠና አቀራረባችን በተግባር ላይ ያተኩራል። ተሳታፊዎችን እንዲያሻሽሉ የሚያበረታቱ መተግበሪያዎች የግለሰቦች ችሎታዎች. እንደ አስፈላጊ ርዕሰ ጉዳዮችን እንሸፍናለን ግንኙነት ፣ የቡድን ስራ ፣ ስሜታዊ ብልህነት ፣ ችግር መፍታት ፣ እና የግጭት አፈታት. በይነተገናኝ አውደ ጥናቶች፣ ሚና መጫወት፣ እና የቡድን ውይይቶች፣ ተሳታፊዎች መተግበርን ይማራሉ። እነዚህ ችሎታዎች በገሃዱ ዓለም ሁኔታዎች፣ ትብብርን ማጎልበት እና ምርታማ የስራ አካባቢ." : "Our approach to Soft Skills Training focuses on practical applications that empower participants to improve their interpersonal skills. We cover essential topics such as communication, teamwork, emotional intelligence, problem-solving, and conflict resolution. Through interactive workshops, role-playing, and group discussions, participants learn to apply these skills in real-world situations, fostering a collaborative and productive work environment."}
              
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
              {isAmharic ? "ውጤታማ የግንኙነት እና የቡድን ስራ ባህል መገንባት" : "Building a Culture of Effective Communication and Teamwork"}
              
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
            {isAmharic ? "በዛሬው የተለያዩ የሥራ አካባቢ, ጠንካራ ለስላሳ ችሎታዎች ናቸው ውጤታማ ትብብር እና ግንኙነት ወሳኝ. በእንኮይ ቴክኖሎጂዎች፣ የእኛ ስልጠና ሀ የመፍጠርን አስፈላጊነት ያጎላል የግለሰቦችን ችሎታዎች የሚያደንቅ የሥራ ቦታ ባህል። የራሳችንን እናስተካክላለን የድርጅትዎን ልዩ ፍላጎቶች ለማሟላት ፕሮግራሞች, በማረጋገጥ ለሁሉም ሰራተኞች አግባብነት እና ተፅእኖ." : "In today’s diverse work environment, strong soft skills are crucial for effective collaboration and communication. At Enkoy Technologies, our training emphasizes the importance of creating a workplace culture that values interpersonal skills. We tailor our programs to meet the specific needs of your organization, ensuring relevance and impact for all employees."}
              
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
              src="/img/corporate-training/softSkillImg2.webp"
              alt="Soft Skill Image"
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
              {isAmharic ? "" : ""}
              Key Components of Our Soft Skills Training Solutions
            </motion.h2>
          </motion.div>
          {isAmharic ? 
            <motion.div
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
              <b>ውጤታማ ግንኙነት፡ </b>ተሳታፊዎችን እንዴት ማድረግ እንደሚችሉ ማስተማር
              ሀሳቦችን በግልፅ ያስተላልፉ እና በንቃት ያዳምጡ።
              </li>
              <li>
              <b>ስሜታዊ ብልህነት፡</b> ስለ ስሜቶች ግንዛቤን ማሳደግ
                እና የግል ግንኙነቶችን ማሻሻል.
              </li>
              <li>
              <b>የቡድን ስራ እና ትብብር፡</b>የመስራት ክህሎቶችን ማዳበር
                በቡድን ውስጥ ውጤታማ እና ለቡድን ስኬት አስተዋፅኦ ያድርጉ.
              </li>
              <li>
              <b>ችግር መፍታት እና ሂሳዊ አስተሳሰብ፡ </b>አበረታች
                የትንታኔ አስተሳሰብ እና የስራ ቦታ ፈጠራ መፍትሄዎች
                ፈተናዎች.
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              ለግለሰቦች እና ድርጅቶች የለውጥ ጥቅሞች
            </motion.h2>
            <motion.p {...fadeInUp}>
            የእኛ ለስላሳ ክህሎት ስልጠና ተጽእኖ ከግለሰብ በላይ ይዘልቃል
              ተሳታፊዎች, መላውን ድርጅት ተጠቃሚ. እንደ ሰራተኞች
              ለስላሳ ችሎታቸውን ያሳድጉ ፣ ጥቅሞቹ የሚከተሉትን ያካትታሉ: -
            </motion.p>
            <motion.ul className="py-5 pl-6 list-disc" {...fadeInUp}>
            <li>
                በቡድን አባላት መካከል የተሻሻለ ግንኙነት እና ትብብር.
              </li>
              <li>
                የሰራተኛ ተሳትፎ እና ስነ ምግባር ጨምሯል, ወደ ከፍተኛ ይመራል
                ምርታማነት.
              </li>
              <li>
                ግጭቶችን የመዳሰስ እና ችግሮችን ለመፍታት የተሻሻለ ችሎታ
                ውጤታማ በሆነ መንገድ.
              </li>
              <li>
                የቡድን ስራን የሚያበረታታ አዎንታዊ ድርጅታዊ ባህል እና
                እርስ በርስ መከባበር.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
            የስራ ኃይልዎን ለማጎልበት ዛሬ ለስላሳ ክህሎቶች ስልጠና ኢንቨስት ያድርጉ
              ስኬታማ ለመሆን ከሚያስፈልጉት አስፈላጊ የግለሰባዊ ክህሎቶች ጋር
              ተለዋዋጭ የሥራ አካባቢ!
            </motion.p>
          </motion.div>
          : 
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
                <b>Effective Communication: </b>Teaching participants how to
                convey ideas clearly and listen actively.
              </li>
              <li>
                <b>Emotional Intelligence:</b> Enhancing awareness of emotions
                and improving interpersonal relationships.
              </li>
              <li>
                <b>Teamwork and Collaboration: </b>Developing skills to work
                effectively in teams and contribute to group success.
              </li>
              <li>
                <b>Problem-Solving and Critical Thinking: </b>Encouraging
                analytical thinking and creative solutions to workplace
                challenges.
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p {...fadeInUp}>
              The impact of our Soft Skills Training extends beyond individual
              participants, benefiting the entire organization. As employees
              enhance their soft skills, the advantages include:
            </motion.p>
            <motion.ul className="py-5 pl-6 list-disc" {...fadeInUp}>
              <li>
                Improved communication and collaboration among team members.
              </li>
              <li>
                Increased employee engagement and morale, leading to higher
                productivity.
              </li>
              <li>
                Enhanced ability to navigate conflicts and resolve issues
                effectively.
              </li>
              <li>
                A positive organizational culture that fosters teamwork and
                mutual respect.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
              Invest in Soft Skills Training today to empower your workforce
              with the essential interpersonal skills needed to succeed in a
              dynamic work environment!
            </motion.p>
          </motion.div>
          }
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SoftSkill;
