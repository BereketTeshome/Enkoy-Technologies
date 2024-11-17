import React from "react";

const OurServices = () => {
  const services = [
    {
      icon: "/img/services/learningExperiences.png",
      title: "Customized learning",
      description:
        "Off-the-shelf eLearning might be a quick hack, but custom eLearning gets real results.",
    },
    {
      icon: "/img/services/gamificationImg.png",
      title: "Consulting and advisory",
      description:
        "We love a virtual approach, but sometimes, the best instructor is an actual instructor.",
    },
    {
      icon: "/img/services/why_mobile_learning.png",
      title: "Animation and video production",
      description:
        "Scale your team with learning services and strategy from ELM Learning.",
    },
    {
      icon: "/img/services/animatedVideosImg.png",
      title: "Capacity Building",
      description:
        "We have content and delivery for soft skills, corporate compliance training, and more.",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl sm:px-12">
        <h2 className="mb-12 text-4xl font-semibold text-center text-gray-700">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start p-6 transition-all duration-300 transform bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105"
            >
              <div className="flex-shrink-0">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-16 h-16"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button className="mt-4 font-medium text-indigo-600 hover:text-indigo-800">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
