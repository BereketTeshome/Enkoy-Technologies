import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HowWeWork = () => {
  const language = useSelector((state) => state.language.language);
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";

  // Translations in English and Amharic
  const translations = {
    eng: [
      {
        img: "/img/services/why_mobile_learning.png",
        alt: "Gamification",
        title: "How We Work",
        heading: "We prioritize people over processes",
        content: `At Enkoy Technologies, we believe the best learning experiences come
        from truly understanding the learner. By placing people at the
        center of everything we do, we design solutions that are as
        meaningful as they are impactful. Whether we’re crafting a single
        course or a large-scale training program, our approach is agile and
        personalized. We use human-centered design principles to ensure that
        every learner’s unique needs, preferences, and contexts are
        considered, making sure the solution is not just effective, but also
        inclusive and relevant.`,
      },
      {
        img: "/img/services/training.png",
        alt: "Mobile Learning",
        title: "How We Work",
        heading: "This isn’t just training, it’s empathetic learning.",
        content: `We use a blend of human-centered design (HCD) and learning
        experience design (LXD) to create engaging, accessible, and
        learner-driven experiences. At Enkoy, we understand that learning is
        most effective when it feels personal. We go beyond just delivering
        content – we craft experiences that resonate with learners
        emotionally and intellectually. By incorporating empathy into our
        designs, we ensure that learners don’t just absorb information, they
        connect with it, retain it, and apply it meaningfully.`,
      },
      {
        img: "/img/services/gamificationImg.png",
        alt: "Gamification",
        title: "How We Work",
        heading: "We focus on real-world results.",
        content: `At Enkoy Technologies, measurable outcomes are at the heart of
        everything we do. We don't believe in training for the sake of
        training. Every learning solution we create is carefully crafted
        with clear objectives and measurable success criteria. Using a mix
        of data-driven methods and continuous feedback loops, we track
        learner progress and ensure that the learning is translating into
        tangible results. From engagement rates to practical skill
        application, our solutions always have a clear path to improvement
        and impact.`,
      },
    ],
    amh: [
      {
        img: "/img/services/gamificationImg.png",
        alt: "Gamification",
        title: "እንዴት እንደምንሰራ",
        heading: "ከሂደቱ ይልቅ ሰዎችን እናስቀድማለን",
        content: `በእንኮይ ቴክኖሎጂዎች፣ ምርጥ የመማር ተሞክሮዎች ይመጣሉ ብለን እናምናለን። 
        ...`,
      },
      {
        img: "/img/services/why_mobile_learning.png",
        alt: "Mobile Learning",
        title: "እንዴት እንደምንሰራ",
        heading: "ይህ ስልጠና ብቻ ሳይሆን ስሜታዊነት ያለው ትምህርት ነው",
        content: `አሳታፊ፣ ተደራሽ እና ለመፍጠር የሰውን ያማከለ ንድፍ ...`,
      },
      {
        img: "/img/services/gamificationImg.png",
        alt: "Gamification",
        title: "እንዴት እንደምንሰራ",
        heading: "በገሃዱ ዓለም ውጤቶች ላይ እናተኩራለን",
        content: `በእንኮይ ቴክኖሎጂዎች፣ ሊለካ የሚችል ውጤቶች የምንሰራው ...`,
      },
    ],
  };

  const content = translations[language] || translations.eng;

  const motionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="mt-16">
    {/* How We Work section that shows our skills sets */}
      {content.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col  items-center w-full px-5 py-16 md:py-10 md:px-20 overflow-hidden 
             ${
               index % 2 === 1
                 ? "lg:flex-row-reverse " +
                   (isDarkTheme ? "bg-gray-800" : "bg-[#F6F9FC]")
                 : "lg:flex-row"
             } ${isDarkTheme ? "bg-gray-800" : "bg-[#F6F9FC]"}`}
        >
          <motion.div
            className="flex justify-center flex-1 mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={motionVariants}
          >
            <img
              src={section.img}
              alt={section.alt}
              className="w-[90%] md:w-[80%] lg:w-[60%]"
            />
          </motion.div>
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={motionVariants}
          >
            <h3 className="mb-5 text-xl font-bold text-[#FFCD57]">
              {section.title}
            </h3>
            <h2
              className={`text-xl md:text-2xl lg:text-3xl mb-7 ${
                isDarkTheme ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {section.heading} 
            </h2>
            <p
              className={`text-sm md:text-base text-justify ${
                isDarkTheme ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {section.content}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default HowWeWork;
