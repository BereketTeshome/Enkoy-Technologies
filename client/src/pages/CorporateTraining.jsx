import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger duration between each child
      },
    },
  };

  // Variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="pt-20">
      <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row gap-10 overflow-hidden">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
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
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <img
            src="/img/corporate-training/corporate-training.png"
            alt=""
            className="w-[80%]"
          />
        </motion.div>
      </div>
      <br />
      <br />
      <br />
      <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#B7D6D8] md:flex-row flex-col">
        <motion.div
          className="flex-1 flex "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className=" inline-block md:text-5xl text-3xl text-gray-900 font-semibold">
            Our method for delivering corporate training services.
          </h2>
        </motion.div>
        <motion.div
          className="flex-1 text-gray-900 text-[15px] *:mb-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.8 }}
        >
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
        </motion.div>
      </div>
      <br />
      <br id="solutions" />
      <br />
      <div className="px-5 sm:px-10 md:px-20">
        <div className="sm:text-center *:mb-8 text-gray-900">
          <motion.h2
            className="sm:text-5xl text-4xl font-semibold "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            Our corporate <br /> training services
          </motion.h2>
          <motion.p
            className=""
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.8 }}
          >
            Whether your organization needs compliance training or aims to boost
            teamwork and empathy, <br /> our corporate training services are
            tailored to engage and motivate your workforce.
          </motion.p>
        </div>
        <br />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {services.map((item, index) => {
            return (
              <motion.div
                className="text-gray-800"
                key={index}
                variants={childVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={item.img} alt="" className="w-[60px] mb-6" />
                <p className="mb-6 text-lg font-semibold">{item.title}</p>
                <p className="mb-6">{item.desc}</p>
                <a
                  href={item.path}
                  className="mb-6 font-semibold border-b-2 pb-2 border-[#F3858D]"
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default CorporateTraining;
