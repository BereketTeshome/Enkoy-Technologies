import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const CorporateTraining = () => {
  const services = [
    {
      img: "/img/corporate-training/customerTraining.webp",
      title: "Leadership development training",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "#",
    },
    {
      img: "/img/corporate-training/employability.webp",
      title: "Learning Experience Design (LXD) Training",
      desc: "Enhancing Learning Through Thoughtful Design.",
      path: "#",
    },
    {
      img: "/img/corporate-training/personalDevelopment.webp",
      title: "Personal development training ",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "#",
    },
    {
      img: "/img/corporate-training/basicComputer.png",
      title: "Leadership development training",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "#",
    },
    {
      img: "/img/corporate-training/employability.webp",
      title: "Leadership development training",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "#",
    },
    {
      img: "/img/corporate-training/fairEmployment.webp",
      title: "Leadership development training",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "#",
    },
    {
      img: "/img/corporate-training/Safety.webp",
      title: "Leadership development training",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "#",
    },
    {
      img: "/img/corporate-training/workLife.png",
      title: "Leadership development training",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "#",
    },
    {
      img: "/img/corporate-training/aa.webp",
      title: "Leadership development training",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "#",
    },
    {
      img: "/img/corporate-training/bb.webp",
      title: "Leadership development training",
      desc: "Leadership development training designed to motivate and achieve results.",
      path: "#",
    },
  ];
  return (
    <div className="pt-20">
      <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Corporate Training overview
          </p>
          <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7 font-semibold">
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
            <a href="/contact" className="py-3 px-6 bg-gray-900 text-white ">
              Contact Us
            </a>
            <a
              href="#solutions"
              className="py-3 sm:px-6 flex items-center gap-3 font-semibold text-gray-900"
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
      <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#B7D6D8] md:flex-row flex-col">
        <div className="flex-1 flex ">
          <h2 className=" inline-block md:text-5xl text-3xl text-gray-900 font-semibold">
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
          <h2 className="sm:text-5xl text-4xl font-semibold ">
            Our corporate <br /> training services
          </h2>
          <p>
            Whether your organization needs compliance training or aims to boost
            teamwork and empathy, <br /> our corporate training services are
            tailored to engage and motivate your workforce.
          </p>
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
