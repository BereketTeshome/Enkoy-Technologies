import { useSelector } from "react-redux";

const CaseStudies = () => {
  // Get the current language from Redux store
  const language = useSelector((state) => state.language.language);

  // Translations for case studies in English and Amharic
  const translations = {
    eng: {
      title: "Case Studies",
      subtitle:
        "See how we’ve taken inspired ideas and transformed them into workable realities for our clients.",
      caseStudies: [
        {
          logo: "/img/contentsMenuImg.png",
          title: "Enhancing Digital Learning for Decent Work",
          description:
            "This project, undertaken for GIZ STEP, aims to ensure that the training is not only effective but also accessible and tailored to the needs of all learners involved.",
          link: "/our-work/3",
        },
        {
          logo: "/img/contentsMenuImg.png",
          title: "Physical Soil and Water Conservation Measures",
          description:
            "Enkoy Technologies developed twenty engaging digital learning modules. This module covers erosion causes, impacts on agriculture, and farmers' well-being",
          link: "/our-work/2",
        },
        {
          logo: "/img/contentsMenuImg.png",
          title: "Local Level Participatory Land Use Planning",
          description:
            "Enkoy Technologies created 6 modules in this course to empower Development Agents to actively engage in planning and managing land resources with farmers.",
          link: "/our-work/1",
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
            "ኢትዮጵያ ፍትሃዊ እና ስነምግባርን የተላበሰ የስራ አካባቢን በመፍጠር ረገዳቸውን እንዴት እንደፈቱበት፣ ተመልከቱ።",
          link: "/our-work",
        },
        {
          logo: "/img/secondProject.png",
          title: "የኢ-ግራግር መፍትሄዎች",
          description:
            "አርሶ አደሮችን ከቴክኖሎጂ ጋር በመገናኘት ፈጣን ልማትን ማሳደግ።",
          link: "/our-work",
        },
        {
          logo: "/img/thirdProject.png",
          title: "ኢ-ትምህርት መድረክ",
          description:
            "በተገደበት አካባቢ በተሰማራነት የሚገኝ ትምህርት መድረክ መፍጠር።",
          link: "/our-work",
        },
      ],
    },
  };

  // Fallback to English if language is not recognized
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              <p className="mt-4 font-semibold text-gray-400">
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
