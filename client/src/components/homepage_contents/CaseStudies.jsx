import { useSelector } from "react-redux";

const CaseStudies = () => {
  const language = useSelector((state) => state.language.language);

  const translations = {
    eng: {
      title: "Case Studies",
      subtitle:
        "See how we’ve taken inspired ideas and transformed them into workable realities for our clients.",
      caseStudies: [
        {
          logo: "/img/contentsMenuImg.png",
          title: "Decent Work in Ethiopia",
          description:
            "Ethiopia faces challenges in creating fair and ethical work environments, especially for its young and growing workforce. Together with GIZ-STEP, Enkoy Technologies took a bold step to transform traditional labor training into a dynamic, self-paced online experience—accessible to learners nationwide.",
          link: "/our-work",
        },
      ],
    },
    amh: {
      title: "የጉዳይ ጥናቶች",
      subtitle:
        "አነሳሽ ሀሳቦችን እንዴት እንደወሰድን እና ለደንበኞቻችን ወደ ተግባራዊ እውነታዎች እንደቀየርናቸው ይመልከቱ",
      caseStudies: [
        {
          logo: "/img/contentsMenuImg.png",
          title: "ጥሩ ስራ በኢትዮጵያ",
          description:
            "ኢትዮጵያ ፍትሃዊ እና ስነምግባርን የተላበሰ የስራ አካባቢን በመፍጠር ረገድ ተግዳሮቶች ከፊቷ ተጋርጦባታል፣በተለይም ለወጣት እና እያደገ ለሚሄደው የሰው ሃይል። ከGIZ-STEP ጋር፣ እንኮይ ቴክኖሎጂዎች ባህላዊ የሰው ኃይል ስልጠናን ወደ ተለዋዋጭ እና በራስ የመመራት የመስመር ላይ ተሞክሮ ለመቀየር ደፋር እርምጃ ወስደዋል—በአገር አቀፍ ደረጃ ለተማሪዎች ተደራሽ።",
          link: "/our-work",
        },
      ],
    },
  };

  const selectedContent = translations[language] || translations.eng;

  return (
    <div className="py-20 text-white bg-gray-900">
      <div className="container px-6 mx-auto md:px-12 lg:px-20">
        <h2 className="mb-8 text-3xl font-semibold text-center md:text-4xl">
          {selectedContent.title}
        </h2>
        <p className="mb-12 text-center text-gray-300">
          {selectedContent.subtitle}
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {selectedContent.caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-gray-800 rounded-lg hover:bg-gray-700"
            >
              <div className="flex items-center mb-4">
                <img
                  src={caseStudy.logo}
                  alt={`${caseStudy.title} logo`}
                  className="w-16 h-auto"
                />
              </div>
              <h3 className="text-xl font-semibold">{caseStudy.title}</h3>
              <p className="mt-4 font-semibold text-justify text-gray-400">
                {caseStudy.description}
              </p>
              <a
                href={caseStudy.link}
                className="inline-block mt-6 font-medium text-yellow-500 hover:text-yellow-400"
              >
                {language === "amh" ? "ታሪኩን ያንብቡ" : "Read the story"} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
