import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const WorkLife = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const faqData = isAmharic
  ? [
      {
        question: "ለግለሰብ ፍላጎቶች ብጁ የመማሪያ መፍትሄዎች",
        answer: [
          `በእንኮይ ቴክኖሎጂዎች የስራ-ህይወት ሚዛን ስልጠና በድርጅትዎ ወቅታዊ አሰራር እና የሰራተኛ ፍላጎቶች ግምገማ እንጀምራለን። ይህ ከስራ-ህይወት ሚዛን ጋር የተያያዙ ልዩ ተግዳሮቶችን የሚፈቱ ብጁ ፕሮግራሞችን እንድንፈጥር ያስችለናል።`,
          "ተሳታፊዎችን በዕለት ተዕለት ሕይወታቸው ውስጥ ሊዋሃዱ የሚችሉ ተግባራዊ መሳሪያዎችን እና ቴክኒኮችን በማስታጠቅ የግል እና ሙያዊ ውጤታማነታቸውን በማጎልበት ላይ እናተኩራለን።",
        ],
      },
      {
        question: "የእውነተኛ ዓለም አፕሊኬሽኖች ለዘላቂ ለውጥ",
        answer: [
          "የኛ የስልጠና ዘዴ ሚዛናዊ የአኗኗር ዘይቤን የመጠበቅን አስፈላጊነት የሚያሳዩ ተጨባጭ ሁኔታዎችን እና ተግባራዊ ልምምዶችን ያካትታል። ተሳታፊዎች ትምህርታቸውን በተግባራዊ አውድ ውስጥ ተግባራዊ ለማድረግ በሚና በመጫወት፣ በቡድን ውይይቶች እና የተግባር እቅድ ውስጥ ይሳተፋሉ። የእውነተኛ ህይወት ተግዳሮቶችን በመፍታት፣ ተማሪዎች ጤናማ የስራ እና የህይወት ሚዛንን ለማሳካት እና ለማስቀጠል የሚያስፈልጉትን ክህሎቶች ያዳብራሉ።",
        ],
      },
    ]
  : [
    {
      question: "Tailored Learning Solutions for Individual Needs",
      answer: [
        `At Enkoy Technologies, we begin our Work-Life Balance Training with an assessment of your organization’s current practices and employee needs. This allows us to create customized programs that address specific challenges related to work-life balance.`,
        "We foster a supportive learning environment where participants can share their experiences, discuss challenges, and develop actionable strategies. Our experienced trainers provide ongoing support and resources to help individuals implement practices that enhance their work-life balance.",
      ],
    },
    {
      question: "Real-World Applications for Lasting Change",
      answer: [
        "Our training methodology incorporates real-world scenarios and practical exercises that illustrate the importance of maintaining a balanced lifestyle. Participants engage in role-playing, group discussions, and action planning to apply their learning in a practical context. By addressing real-life challenges, learners develop the skills needed to achieve and sustain a healthy work-life balance.",
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
            src="/img/corporate-training/aa.webp"
            alt="Work Life Balance Icon"
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "የስራ ህይወት ሚዛን ስልጠና" : "Work life balance training"}
            
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "ደህንነትን እና ምርታማነትን ማሳደግ" : "Promoting Well-Being and Productivity"}
            
          </motion.h2>
          <motion.p
            className={`mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-800"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በ Enkoy Technologies ጤናማ መሆንን እንረዳለን። የስራ-ህይወት ሚዛን ለአጠቃላይ ደህንነት እና ድርጅታዊ ስኬት. የእኛ የስራ-ህይወት ሚዛን ስልጠና የተነደፈ ነው። ሰራተኞችን ለማስተዳደር በሚያስፈልጋቸው ስልቶች እና መሳሪያዎች ለማስታጠቅ ሙያዊ እና የግል ሕይወታቸው በአንድነት. በማሳደግ ሀ ሚዛናዊ አቀራረብ ፣ ድርጅቶች የሰራተኞችን እርካታ ሊያሳድጉ ይችላሉ ፣ ማቃጠልን ይቀንሱ እና ምርታማነትን ያሻሽሉ." : "2, we understand that achieving a healthy work-life balance is crucial for overall well-being and organizational success. Our Work-Life Balance Training is designed to equip employees with the strategies and tools they need to manage their professional and personal lives harmoniously. By fostering a balanced approach, organizations can enhance employee satisfaction, reduce burnout, and improve productivity."}
            
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
              src="/img/corporate-training/workLifeImg.png"
              alt="Work Life Image"
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
              {isAmharic ? "ለተመጣጠነ የአኗኗር ዘይቤ የሚለወጥ ትምህርት" : "Transformative Learning for a Balanced Lifestyle"}
              
            </motion.h2>
            <motion.p
              className={`mb-2 ${
                isDarkTheme ? "text-gray-100 " : "text-gray-800"
              }`}
              {...fadeInUp}
            >
              {isAmharic ? "የስራ-ህይወት ሚዛን ስልጠና አቀራረባችን በተግባራዊ ላይ ያተኩራል። ተሟጋች ለመፍጠር ተሳታፊዎችን የሚያበረታቱ ስልቶች በሥራ ኃላፊነቶች እና በግል ሕይወት መካከል ሚዛን. እንሸፍናለን እንደ ጊዜ አስተዳደር ፣ ጭንቀትን መቀነስ ፣ ድንበሮችን ማዘጋጀት, እና ለደህንነት ቅድሚያ መስጠት. በኩል በይነተገናኝ ወርክሾፖች እና ውይይቶች፣ ተሳታፊዎች እንዴት እንደሚማሩ ይማራሉ። ጤናማ የአኗኗር ዘይቤን የሚያበረታቱ ውጤታማ ልምዶችን መተግበር በስራም ሆነ በቤት ውስጥ." : "Our approach to Work-Life Balance Training focuses on practical strategies that empower participants to create a fulfilling balance between work responsibilities and personal life. We cover essential topics such as time management, stress reduction, setting boundaries, and prioritizing well-being. Through interactive workshops and discussions, participants learn how to implement effective practices that promote a healthier lifestyle both at work and at home."}        
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
              {isAmharic ? "የተመጣጠነ እና ደህንነት ባህል መገንባት" : "Building a Culture of Balance and Well-Being"}
              
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex-1 text-gray-900 text-[15px]"
            {...fadeInUp}
          >
            <motion.p {...fadeInUp}>
            {isAmharic ? "በዛሬው ፈጣን ፍጥነት ያለው የሥራ አካባቢ, ጤናማ መጠበቅ የሥራ-ሕይወት ሚዛን ከመቼውም ጊዜ ይበልጥ አስፈላጊ ነው. በእንኮይ ቴክኖሎጂዎች, የእኛ ስልጠና የመፍጠርን አስፈላጊነት ያጎላል ሚዛን እና ደህንነትን የሚደግፍ የስራ ቦታ ባህል. እኛ የእርስዎን ልዩ ፍላጎቶች ለማሟላት ፕሮግራሞቻችንን ብጁ ያድርጉ አደረጃጀት, ስልጠናው ጠቃሚ እና ተፅዕኖ ያለው መሆኑን ማረጋገጥ ለሁሉም ሰራተኞች." : "In today’s fast-paced work environment, maintaining a healthy work-life balance is more important than ever. At Enkoy Technologies, our training emphasizes the significance of creating a workplace culture that supports balance and well-being. We tailor our programs to meet the specific needs of your organization, ensuring that the training is relevant and impactful for all employees."}
              
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
              src="/img/corporate-training/workLifeImg2.webp"
              alt="Work Life Balance Image"
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
              {isAmharic ? "የእኛ የስራ-ህይወት ሚዛን የስልጠና መፍትሄዎች ቁልፍ አካላት" : "Key Components of Our Work-Life Balance Training Solutions"}
              
            </motion.h2>
          </motion.div>
          <br />
          <br />
          <br />
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
                <b>ጊዜ አስተዳደር፡</b> ውጤታማ ቴክኒኮችን ማስተማር
                ተግባራትን ቅድሚያ መስጠት እና ጊዜን በብቃት ማስተዳደር.
              </li>
              <li>
                <b>የጭንቀት አስተዳደር፡</b> መሳሪያዎችን እና ስልቶችን መስጠት
                ጭንቀትን ይቀንሱ እና የአእምሮ ደህንነትን ያበረታታሉ.
              </li>
              <li>
                <b>ድንበሮችን ማዘጋጀት፡</b> ግለሰቦች እንዲመሰርቱ ማበረታታት
                በሥራ እና በግል ሕይወት መካከል ግልጽ ድንበሮች.
              </li>
              <li>
                <b>ራስን የመንከባከብ ልምምዶች፡</b> አስፈላጊነትን በማጉላት
                ሚዛንን በማሳካት ራስን መንከባከብ እና ደህንነት.
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              ለግለሰቦች እና ድርጅቶች የለውጥ ጥቅሞች
            </motion.h2>
            <motion.p {...fadeInUp}>
            የእኛ የስራ-ህይወት ሚዛን ስልጠና ተጽእኖ በመላው ይዘልቃል
              የእርስዎ ድርጅት. ተሳታፊዎች ግንዛቤያቸውን ሲያሳድጉ
              የሥራ-ህይወት ሚዛን, ጥቅሞቹ የሚከተሉትን ያካትታሉ:
            </motion.p>
            <motion.ul className="py-5 pl-6 list-disc" {...fadeInUp}>
            <li>
                የሰራተኛ እርካታ እና ሞራል ጨምሯል, ወደ ከፍተኛ ይመራል
                የማቆያ ደረጃዎች.
              </li>
              <li>
                የተቃጠለ እና የጭንቀት ደረጃዎች ቀንሷል, ለተሻሻለ አስተዋፅዖ ያደርጋል
                የአእምሮ ጤና.
              </li>
              <li>
                ሰራተኞች የበለጠ ሲሰማቸው የተሻሻለ ምርታማነት እና አፈፃፀም
                ትኩረት እና ተሳትፎ.
              </li>
              <li>
                ደህንነትን የሚያከብር አዎንታዊ ድርጅታዊ ባህል እና
                የስራ-ህይወት ስምምነት.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
            እርስዎን ለማጎልበት ዛሬ በስራ-ህይወት ሚዛን ስልጠና ላይ ኢንቨስት ያድርጉ
              በመካከላቸው ጤናማ እና የበለጠ የተሟላ ሚዛን ለማግኘት የሰው ኃይል
              ሥራ እና ሕይወት!
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
                <b>Time Management:</b> Teaching effective techniques for
                prioritizing tasks and managing time efficiently.
              </li>
              <li>
                <b>Stress Management:</b> Providing tools and strategies to
                reduce stress and promote mental well-being.
              </li>
              <li>
                <b>Setting Boundaries:</b> Encouraging individuals to establish
                clear boundaries between work and personal life.
              </li>
              <li>
                <b>Self-Care Practices:</b> Highlighting the importance of
                self-care and well-being in achieving balance.
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p {...fadeInUp}>
              The impact of our Work-Life Balance Training extends throughout
              your organization. As participants enhance their understanding of
              work-life balance, the advantages include:
            </motion.p>
            <motion.ul className="py-5 pl-6 list-disc" {...fadeInUp}>
              <li>
                Increased employee satisfaction and morale, leading to higher
                retention rates.
              </li>
              <li>
                Reduced burnout and stress levels, contributing to improved
                mental health.
              </li>
              <li>
                Enhanced productivity and performance as employees feel more
                focused and engaged.
              </li>
              <li>
                A positive organizational culture that values well-being and
                work-life harmony.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
              Invest in Work-Life Balance Training today to empower your
              workforce to achieve a healthier, more fulfilling balance between
              work and life!
            </motion.p>
          </motion.div>
          }
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkLife;
