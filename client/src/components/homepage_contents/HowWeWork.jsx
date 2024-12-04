import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const HowWeWork = () => {
  const language = useSelector((state) => state.language.language);

  const translations = {
    eng: {
      sections: [
        {
          img: "/img/services/gamificationImg.png",
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
          img: "/img/services/why_mobile_learning.png",
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
    },
    amh: {
      sections: [
        {
          img: "/img/services/gamificationImg.png",
          alt: "Gamification",
          title: "እንዴት እንደምንሰራ",
          heading: "ከሂደቱ ይልቅ ሰዎችን እናስቀድማለን",
          content: "በእንኮይ ቴክኖሎጂዎች፣ ምርጥ የመማር ተሞክሮዎች ይመጣሉ ብለን እናምናለን። ተማሪውን በትክክል ከመረዳት። ሰዎችን በምናደርጋቸው ነገሮች ሁሉ መሃል ላይ በማስቀመጥ፣ ተፅእኖ ያላቸውን ያህል ትርጉም ያላቸውን መፍትሄዎች እንቀርጻለን። ነጠላ እየሠራን እንደሆነ ኮርስ ወይም መጠነ ሰፊ የሥልጠና ፕሮግራም፣ አካሄዳችን ቀልጣፋ እና ግላዊ ነው። የእያንዳንዱ ተማሪ ልዩ ፍላጎቶች፣ ምርጫዎች እና ሁኔታዎች መሆናቸውን ለማረጋገጥ ሰውን ያማከለ የንድፍ መርሆዎችን እንጠቀማለን። ከግምት ውስጥ በማስገባት መፍትሄው ውጤታማ ብቻ ሳይሆን ጭምር ነው ሁሉን አቀፍ እና ተዛማጅ",
        },
        {
          img: "/img/services/why_mobile_learning.png",
          alt: "Mobile Learning",
          title: "እንዴት እንደምንሰራ",
          heading: "ይህ ስልጠና ብቻ ሳይሆን ስሜታዊነት ያለው ትምህርት ነው",
          content: "አሳታፊ፣ ተደራሽ እና ለመፍጠር የሰውን ያማከለ ንድፍ (ኤች.ሲ.ዲ.ዲ) እና የመማር ልምድ ንድፍ (LXD) እንጠቀማለን። በተማሪ-ተኮር ልምዶች. በእንኮይ፣ መማር በጣም ውጤታማ የሚሆነው ግላዊ ሆኖ ሲሰማ እንደሆነ እንረዳለን። ይዘትን ከማድረስ አልፈን እንሄዳለን - በስሜት እና በእውቀት ከተማሪዎች ጋር የሚስማሙ ልምዶችን እንሰራለን። ርህራሄን በውስጣችን በማካተት ዲዛይኖች፣ ተማሪዎች መረጃን ብቻ እንደማይወስዱ እናረጋግጣለን። ከእሱ ጋር ይገናኙ, ያቆዩት እና ትርጉም ባለው መልኩ ይተግብሩ",
        },
        {
          img: "/img/services/gamificationImg.png",
          alt: "Gamification",
          title: "እንዴት እንደምንሰራ",
          heading: "በገሃዱ ዓለም ውጤቶች ላይ እናተኩራለን",
          content: "በእንኮይ ቴክኖሎጂዎች፣ ሊለካ የሚችል ውጤቶች የምንሰራው የሁሉም ነገር ልብ ናቸው። ለስልጠና ሲባል በስልጠና አናምንም። እኛ የምንፈጥረው እያንዳንዱ የመማሪያ መፍትሄ ግልጽ በሆኑ ዓላማዎች እና በሚለካ የስኬት መስፈርቶች በጥንቃቄ የተሰራ ነው። ድብልቅን በመጠቀም በመረጃ የተደገፉ ዘዴዎች እና ተከታታይ የአስተያየት ምልከታዎች የተማሪዎችን እድገት እንከታተላለን እና ትምህርቱ ወደ ተጨባጭ ውጤቶች እየተተረጎመ መሆኑን እናረጋግጣለን። ከተሳትፎ ደረጃዎች እስከ ተግባራዊ ክህሎት አተገባበር ድረስ፣ የእኛ መፍትሄዎች ሁልጊዜ ወደ መሻሻል እና ተፅእኖ ግልጽ መንገድ አላቸው።",
        },
      ],
    },
  };

  const selectedContent = translations[language] || translations.eng;

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {selectedContent.sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col items-center w-full px-5 py-16 md:py-28 md:px-20 overflow-hidden ${
            index % 2 === 1 ? "lg:flex-row-reverse bg-[#F6F9FC]" : "lg:flex-row"
          }`}
        >
          <motion.div
            className="flex justify-center flex-1 mb-8 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={variants}
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
            variants={variants}
          >
            <h3 className="text-[#F1858B] text-lg font-medium mb-5">
              {section.title}
            </h3>
            <h2 className="text-xl text-gray-800 md:text-2xl lg:text-3xl mb-7">
              {section.heading}
            </h2>
            <p className="text-sm text-justify text-gray-900 md:text-base">
              {section.content}
            </p>
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default HowWeWork;
