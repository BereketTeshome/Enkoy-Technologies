import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CorporateTraining = () => {
  const services = [
    {
      img: "/img/corporate-training/customerTraining.webp",
      title: "Leadership development training",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "/corporate-training/leadership",
    },
    {
      img: "/img/corporate-training/bb.webp",
      title: "Learning Experience Design (LXD) Training",
      desc: "Enhancing Learning Through Thoughtful Design.",
      path: "/corporate-training/learning-experience",
    },
    {
      img: "/img/corporate-training/workLife.png",
      title: "Personal development training ",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "/corporate-training/personal-development",
    },
    {
      img: "/img/corporate-training/basicComputer.svg",
      title: "Basic computer skill training",
      desc: "Empowering Individuals with Essential Digital Competencies",
      path: "/corporate-training/basic-computer",
    },
    {
      img: "/img/corporate-training/decentWork.webp",
      title: "Employability and entrepreneurship",
      desc: "Empowering Individuals for Career Success and Business Innovation",
      path: "/corporate-training/employability",
    },
    {
      img: "/img/corporate-training/dream.webp",
      title: "Decent work and SDG training",
      desc: "Promoting Sustainable Employment and Responsible Practices",
      path: "/corporate-training/decent-work",
    },
    {
      img: "/img/corporate-training/employability.webp",
      title: "Fair employment practice training",
      desc: "Promoting Equity and Inclusion in the Workplace",
      path: "/corporate-training/fair-employment",
    },
    {
      img: "/img/corporate-training/safety.svg",
      title: "Safety and Health at workplace training",
      desc: "Ensuring a Safe and Healthy Work Environment",
      path: "/corporate-training/safety",
    },
    {
      img: "/img/corporate-training/aa.webp",
      title: "Work life balance training",
      desc: "Promoting Well-Being and Productivity",
      path: "/corporate-training/work-life",
    },
    {
      img: "/img/corporate-training/personalDevelopment.webp",
      title: "Soft skill training",
      desc: "Cultivating Essential Interpersonal Skills for Success",
      path: "/corporate-training/soft-skill",
    },
  ];
  return (
    <div className="pt-20">
      <div className="flex flex-col items-center w-full gap-10 px-5 md:px-20 sm:px-10 lg:flex-row">
        <div className="flex-1">
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Corporate Training overview
          </p>
          <h2 className="text-3xl font-semibold sm:text-5xl text-gray-950 mb-7">
            Corporate <br />
            Training Services
          </h2>
          <p className="mb-7">
            Corporate training often has a negative reputation, and for good
            reason. It can be lengthy, outdated, and unengaging. At Enkoy
            Technologies, we develop tailored and interactive corporate learning
            experiences that inspire and motivate learners.
          </p>
          <div className="flex justify-between sm:items-center flex-col sm:flex-row *:w-fit gap-y-4">
            <a href="/contact" className="px-6 py-3 text-white bg-gray-900 ">
              Contact Us
            </a>
            <a
              href="#solutions"
              className="flex items-center gap-3 py-3 font-semibold text-gray-900 sm:px-6"
            >
              <span className="p-4 rounded-full bg-[#FF8689]">
                <IoIosArrowDown />
              </span>
              See our solutions
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="/img/corporate-training/corporate-training.png"
            alt=""
            className="w-[80%]"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
        <div className="flex flex-1 ">
          <h2 className="inline-block text-3xl font-semibold text-gray-900 md:text-5xl">
            Our method for delivering corporate training services.
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px] *:mb-3">
          <p>
            “Captivating” and “fun” are rarely linked to corporate training,
            which is unfortunate. Corporate learning should be viewed as an act
            of care rather than a mere obligation.
          </p>
          <p>
            At <b>Enkoy Technologies</b>, we aim for learners to connect with
            and engage with the content. That’s why we employ creative
            storytelling, interactive graphics and animations, and user
            preferences to foster genuine connections and provide more effective
            training.
          </p>
        </div>
      </div>
      <br />
      <br id="solutions" />
      <br />
      <div className="px-5 sm:px-10 md:px-20">
        <div className="sm:text-center *:mb-8 text-gray-900">
          <h2 className="text-4xl font-semibold sm:text-5xl ">
            Our corporate <br /> training services
          </h2>
          <p>
            Whether your organization needs compliance training or aims to boost
            teamwork and empathy, <br /> our corporate training services are
            tailored to engage and motivate your workforce.
          </p>
        </div>
        <br />
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => {
            return (
              <div className="text-gray-800" key={index}>
                <img src={item.img} alt="" className="w-[60px] mb-6" />
                <p className="mb-6 text-lg font-semibold">{item.title}</p>
                <p className="mb-6">{item.desc}</p>
                <a
                  href={item.path}
                  className="mb-6 font-semibold border-b-2 pb-2 border-[#F3858D]"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CorporateTraining;
