
const CaseStudies = () => {
  const caseStudies = [
    {
      logo: "/img/contentsMenuImg.png",
      title: "Decent Work in Ethiopia",
      description:
        "Ethiopia faces challenges in creating fair and ethical work environments, especially for its young and growing workforce. Together with GIZ-STEP, Enkoy Technologies took a bold step to transform traditional labor training into a dynamic, self-paced online experience—accessible to learners nationwide.",
      link: "/our-work",
    },
    // {
    //   logo: "/img/contentsMenuImg.png",
    //   title: "MillerCoors Onboarding Revamp",
    //   description:
    //     "MillerCoors is the authority on beer but struggled when it came to being the authority on effective onboarding. ELM designed an eLearning course that helped new employees understand each department and their unique responsibilities so new recruits saw themselves as a vital cog in the MillerCoors machine.",
    //   link: "#",
    // },
  ];

  return (
    <div className="py-20 text-white bg-gray-900">
      <div className="container px-6 mx-auto md:px-12 lg:px-20">
        <h2 className="mb-8 text-3xl font-semibold text-center md:text-4xl">
          Case Studies
        </h2>
        <p className="mb-12 text-center text-gray-300">
          See how we’ve taken inspired ideas and transformed them into workable
          realities for our clients.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {caseStudies.map((caseStudy, index) => (
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
                className="inline-block mt-6 font-medium text-pink-500 hover:text-pink-400"
              >
                Read the story →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
