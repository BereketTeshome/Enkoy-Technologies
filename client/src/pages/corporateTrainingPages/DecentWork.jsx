import { motion } from "framer-motion";
import FAQSection from "../../components/corporateTraining/FAQSection";
import { useSelector } from "react-redux";

const DecentWork = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const language = useSelector((state) => state.language?.language);
  const isAmharic = language === "amh";

  const faqData = isAmharic
  ? [
      {
        question: "ለድርጅታዊ ተጽእኖ ብጁ የመማሪያ መፍትሄዎች",
        answer: [
          `በEnkoy Technologies፣ የኛን ጨዋ ስራ እና የኤስዲጂ ስልጠና የምንጀምረው በድርጅትዎ ወቅታዊ አሰራር እና ግቦች ላይ በጥልቀት በመገምገም ነው። ይህ ከጥሩ ስራ እና ዘላቂ ልማት ጋር የተያያዙ ልዩ ተግዳሮቶችን እና እድሎችን የሚፈቱ ብጁ ፕሮግራሞችን እንድንፈጥር ያስችለናል።`,
          "ተሳታፊዎች በውይይት የሚሳተፉበት፣ ልምድ የሚለዋወጡበት እና ተግባራዊ ስልቶችን የሚያዘጋጁበት የትብብር የመማሪያ አካባቢ ላይ አፅንዖት እንሰጣለን። ድርጅቶች የተማሩትን በብቃት እንዲተገብሩ ለመርዳት መምህሮቻችን ቀጣይነት ያለው ድጋፍ እና ግብአት ይሰጣሉ።",
        ],
      },
      {
        question: "የእውነተኛ ዓለም መተግበሪያዎች ትርጉም ያለው ለውጥ",
        answer: [
          "የኛ የሥልጠና ዘዴ ትክክለኛ ሥራን እና ዘላቂ ልማዶችን ተፅእኖ የሚያሳዩ ተጨባጭ ጥናቶችን እና ተግባራዊ ልምምዶችን ያካትታል። ተሳታፊዎች ትምህርታቸውን ትርጉም ባለው መንገድ ተግባራዊ ለማድረግ በቡድን ፕሮጀክቶች፣ ሚና-ተጫዋች ሁኔታዎች እና የተግባር እቅድ ውስጥ ይሳተፋሉ። እውነተኛ ፈተናዎችን በመፍታት፣ ተማሪዎች በድርጅታቸው እና በማህበረሰባቸው ውስጥ አወንታዊ ለውጥ ለማምጣት የሚያስፈልጉትን ክህሎቶች ያዳብራሉ።",
        ],
      },
    ]
  : [
    {
      question: "Tailored Learning Solutions for Organizational Impact",
      answer: [
        `At Enkoy Technologies, we begin our Decent Work and SDG Training with a thorough assessment of your organization’s current practices and goals. This allows us to create customized programs that address specific challenges and opportunities related to decent work and sustainable development.`,
        "We emphasize a collaborative learning environment where participants can engage in discussions, share experiences, and develop actionable strategies. Our instructors provide ongoing support and resources to help organizations implement what they learn effectively.",
      ],
    },
    {
      question: "Real-World Applications for Meaningful Change",
      answer: [
        "Our training methodology incorporates real-world case studies and practical exercises that illustrate the impact of decent work and sustainable practices. Participants engage in group projects, role-playing scenarios, and action planning to apply their learning in a meaningful way. By tackling real challenges, learners develop the skills needed to drive positive change within their organizations and communities.",
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
            src="/img/corporate-training/dream.webp"
            alt=""
            className="w-[70px]"
            {...fadeInUp}
          />
          <motion.p
            className="uppercase text-sm font-semibold text-[#FFCD46] my-10"
            {...fadeInUp}
          >
            {isAmharic ? "ጥሩ ስራ እና የኤስዲጂ ስልጠና" : "Decent work and SDG training"}
            
          </motion.p>
          <motion.h2
            className={`text-4xl sm:text-5xl mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-950"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "ቀጣይነት ያለው ሥራ እና ኃላፊነት የሚሰማቸው ተግባራትን ማሳደግ" : "Promoting Sustainable Employment and Responsible Practices"}
            
          </motion.h2>
          <motion.p
            className={`text-justify mb-7 ${
              isDarkTheme ? "text-gray-100 " : "text-gray-900"
            }`}
            {...fadeInUp}
          >
            {isAmharic ? "በእንኮይ ቴክኖሎጂስ፣ ዘላቂ ልማትን ለማስፈን ጨዋነት ያለው ሥራ አስፈላጊ መሆኑን እንረዳለን። የእኛ የጨዋ ስራ እና ዘላቂ ልማት ግቦች (SDG) ስልጠና ግለሰቦች እና ድርጅቶች ፍትሃዊ የስራ ልምዶችን ለማራመድ እና በተባበሩት መንግስታት ለተቋቋሙት አለምአቀፍ ግቦች አስተዋፅዖ ለማድረግ አስፈላጊውን እውቀትና ክህሎት ለማስታጠቅ የተዘጋጀ ነው። የመከባበር፣ የፍትሃዊነት እና የዘላቂነት ባህልን በማሳደግ ጠንካራ የስራ ቦታዎችን እና ማህበረሰቦችን እንገነባለን።" : "At Enkoy Technologies, we understand the importance of decent work in achieving sustainable development. Our Decent Work and Sustainable Development Goals (SDG) Training is designed to equip individuals and organizations with the knowledge and skills necessary to promote fair labor practices and contribute to the global goals established by the United Nations. By fostering a culture of respect, equity, and sustainability, we help build stronger workplaces and communities."}
            
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
              src="/img/corporate-training/decentWorkImg.webp"
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
              {isAmharic ? "ለዘላቂ የቅጥር ለውጥ ትምህርት" : "Transformative Learning for Sustainable Employment"}
              
            </motion.h2>
            <motion.p
              className={`mb-2 text-justify ${
                isDarkTheme ? "text-gray-300" : "text-gray-900"
              }`}
              {...fadeInUp}
            >
              {isAmharic ? "የጨዋ ስራ እና የኤስዲጂ ስልጠና አቀራረባችን ተሳታፊዎች የጨዋ ስራ እና ዘላቂነት መርሆዎችን እንዲረዱ እና እንዲተገብሩ በሚያስችሉ ተግባራዊ አተገባበር ላይ ያተኩራል። እንደ የሰራተኞች መብት፣ ማህበራዊ ፍትህ፣ የአካባቢ ሃላፊነት እና የንግድ ስራዎች በዘላቂ ልማት ላይ የሚያሳድሩትን ተፅእኖ የመሳሰሉ አስፈላጊ ርዕሶችን እንሸፍናለን። በይነተገናኝ ወርክሾፖች እና ውይይቶች ተሳታፊዎች ስራቸውን ከኤስዲጂዎች ጋር እንዴት ማቀናጀት እንደሚችሉ ይማራሉ እና ለድርጅቶቻቸው እና ለህብረተሰቡ አወንታዊ አስተዋፅዖ ያደርጋሉ።" : "Our approach to Decent Work and SDG Training focuses on practical applications that empower participants to understand and implement the principles of decent work and sustainability. We cover essential topics such as workers' rights, social justice, environmental responsibility, and the impact of business practices on sustainable development. Through interactive workshops and discussions, participants learn how to align their work with the SDGs and contribute positively to their organizations and society."}
              
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
            <motion.p
              {...fadeInUp}
              className={`text-justify ${"text-gray-900"}`}
            >
              {isAmharic ? "ዓለም አቀፉ የሥራ ገበያ እየተሻሻለ ሲመጣ፣ ግለሰቦች እና ድርጅቶች ኃላፊነት የሚሰማቸው የሥራ ልምዶችን እንዲቀበሉ ወሳኝ ነው። በእንኮይ ቴክኖሎጂዎች፣ ስልጠናችን ስለ SDGs ግንዛቤ ላይ ያተኩራል፣ በተለይም ግብ 8፡ ጨዋ ስራ እና የኢኮኖሚ እድገት። ተሳታፊዎች የሁሉንም ሰራተኞች ደህንነት የሚደግፉ አካታች፣ደህንነታቸው የተጠበቀ እና ውጤታማ የስራ አካባቢዎችን መፍጠር አስፈላጊ መሆኑን እንዲገነዘቡ እንረዳቸዋለን። ፕሮግራሞቻችን የድርጅትዎን ልዩ ፍላጎቶች ለማሟላት፣ ተገቢነት እና ውጤታማነትን ለማረጋገጥ የተበጁ ናቸው።" : "As the global job market evolves, it’s crucial for individuals and organizations to embrace responsible work practices. At Enkoy Technologies, our training emphasizes awareness of the SDGs, particularly Goal 8: Decent Work and Economic Growth. We help participants recognize the importance of creating inclusive, safe, and productive work environments that support the well-being of all employees. Our programs are tailored to meet the specific needs of your organization, ensuring relevance and effectiveness."}
              
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
              src="/img/corporate-training/decentWorkImg2.png"
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
              {isAmharic ? "የጨዋ ስራችን ቁልፍ አካላት እና የኤስዲጂ ስልጠና መፍትሄዎች" : "Key Components of Our Decent Work and SDG Training Solutions"}
              
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
              አጠቃላይ የስልጠና አካሄዳችን የሚያተኩረው፡-
            </motion.h2>
            <motion.ul
              className="py-5 pl-6 text-justify list-disc"
              {...fadeInUp}
            >
              <li>
              <b>ጨዋ ሥራን መረዳት፡</b> ተሳታፊዎችን በ ላይ ማስተማር
              የጨዋ ሥራ መርሆዎች እና በኤስዲጂዎች ውስጥ ያለው ጠቀሜታ።
              </li>
              <li>
              <b>የሰራተኞች መብት እና ማህበራዊ ፍትህ፡</b> ማጉላት
                በ ውስጥ የፍትሃዊ የስራ ልምዶች, ፍትሃዊነት እና አክብሮት አስፈላጊነት
                የስራ ቦታ.
              </li>
              <li>
              <b>አካባቢያዊ ኃላፊነት፡</b> ዘላቂነትን ማበረታታት
                የአካባቢ ተፅእኖን የሚቀንሱ እና ማህበራዊን የሚያበረታቱ ልምዶች
                ደህንነት.
              </li>
              <li>
              <b>ለውጡን በመተግበር ላይ፡</b> የመዋሃድ ስልቶችን መስጠት
                ጨዋ የሥራ መርሆች ወደ ድርጅታዊ ፖሊሲዎች እና
                ልምዶች.
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              ለግለሰቦች እና ድርጅቶች የለውጥ ጥቅሞች
            </motion.h2>
            <motion.p
              {...fadeInUp}
              className={`text-justify ${"text-gray-900"}`}
            >
              የጨዋ ስራችን እና የኤስዲጂ ስልጠና ተፅእኖ እስከመጨረሻው ይዘልቃል
              የእርስዎ ድርጅት እና ከዚያ በላይ. ተሳታፊዎች ሲያሳድጉ
              ጥሩ ሥራ እና ዘላቂነት ያለው ግንዛቤ ፣ ጥቅሞቹ
              ያካትቱ፡
            </motion.p>
            <motion.ul
              className="py-5 pl-6 text-justify list-disc"
              {...fadeInUp}
            >
              <li>
                ስለ ማህበራዊ እና አካባቢያዊ ሃላፊነት ግንዛቤ መጨመር
                በሠራተኞች መካከል.
              </li>
              <li>
                የተሻሻለ የስራ ቦታ ባህል ፍትሃዊነትን፣ አካታችነትን፣
                እና አክብሮት.
              </li>
              <li>
                እንደ ማህበራዊ ሃላፊነት የላቀ ስም እና ታማኝነት
                ድርጅት.
              </li>
              <li>
                ከዓለም አቀፍ ዘላቂነት ግቦች ጋር የላቀ አሰላለፍ፣ ማሳደግ
                የረጅም ጊዜ ስኬት.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
            እርስዎን ለማጎልበት ዛሬ በጨዋ ስራ እና በኤስዲጂ ስልጠና ላይ ኢንቨስት ያድርጉ
              የበለጠ ዘላቂ እና ፍትሃዊ እንዲሆን ለማድረግ የሰው ኃይል
              ወደፊት!
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
            <motion.ul
              className="py-5 pl-6 text-justify list-disc"
              {...fadeInUp}
            >
              <li>
                <b>Understanding Decent Work:</b> Educating participants on the
                principles of decent work and its significance in the SDGs.
              </li>
              <li>
                <b>Workers' Rights and Social Justice:</b> Highlighting the
                importance of fair labor practices, equity, and respect in the
                workplace.
              </li>
              <li>
                <b>Environmental Responsibility:</b> Encouraging sustainable
                practices that minimize environmental impact and promote social
                well-being.
              </li>
              <li>
                <b>Implementing Change:</b> Providing strategies for integrating
                decent work principles into organizational policies and
                practices.
              </li>
            </motion.ul>
            <motion.h2
              className="mt-2 mb-5 text-2xl font-semibold text-gray-950"
              {...fadeInUp}
            >
              Transformative Benefits for Individuals and Organizations
            </motion.h2>
            <motion.p
              {...fadeInUp}
              className={`text-justify ${"text-gray-900"}`}
            >
              The impact of our Decent Work and SDG Training extends throughout
              your organization and beyond. As participants enhance their
              understanding of decent work and sustainability, the advantages
              include:
            </motion.p>
            <motion.ul
              className="py-5 pl-6 text-justify list-disc"
              {...fadeInUp}
            >
              <li>
                Increased awareness of social and environmental responsibilities
                among employees.
              </li>
              <li>
                Improved workplace culture that values fairness, inclusivity,
                and respect.
              </li>
              <li>
                Enhanced reputation and credibility as a socially responsible
                organization.
              </li>
              <li>
                Greater alignment with global sustainability goals, fostering
                long-term success.
              </li>
            </motion.ul>
            <motion.p {...fadeInUp}>
              Invest in Decent Work and SDG Training today to empower your
              workforce to contribute to a more sustainable and equitable
              future!
            </motion.p>
          </motion.div>
          }
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DecentWork;
