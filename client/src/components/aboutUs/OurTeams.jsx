import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const teamData = [
  {
    img: "/img/aboutUs/team2.png",
    name: "Abdi Abraham",
    title: "CEO",
    about:
      "our course developer & coordinator , takes ideas and turns them into dynamic digital courses. His technical expertise and creativity shine through in every module, ensuring that learning is interactive and effective.",
  },
  {
    img: "/img/aboutUs/team1.png",
    name: "Eyob Solomon",
    title: "COO",
    about:
      "Eyob Solomom is our talented UI/UX designer who crafts intuitive and seamless interfaces, ensuring an enjoyable user experience. Beyond his design skills, he's a compelling storyteller who brings learning to life and gives learners a memorable and engaging journey.",
  },
  {
    img: "/img/aboutUs/team3.png",
    name: "Temesgen Adera",
    title: "CFO",
    about:
      "our instructional designer, crafts engaging learning experiences. With a keen eye for educational effectiveness, he ensures that each course is not only informative but also engaging, making learning a joy for all.",
  },
  {
    img: "/img/aboutUs/team5.png",
    name: " Eyob Teklay",
    title: "CMO",
    about:
      "our animator and graphic designer, adds the finishing touch with stunning visuals. His artistic flair and technical skills create eye-catching animations that engage and captivate learners.",
  },
  {
    img: "/img/aboutUs/team4.png",
    name: "Dires Gashu",
    title: "CTO",
    about:
      "Our tech specialist ensures that all our digital solutions run smoothly. With his deep understanding of technology, he tackles any technical challenges that arise, enabling the team to focus on creating exceptional learning experiences.",
  },
  {
    img: "/img/aboutUs/team6.png",
    name: "Moges Wuletaw",
    title: "CDO",
    about:
      "Our master storyteller, weaves captivating narratives that breathe life into our animations and graphics. His ability to connect with audiences through compelling tales makes every project a memorable experience.",
  },
];

const OurTeams = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="px-6 py-12 lg:px-32">
      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
      >
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative overflow-hidden bg-white shadow-md rounded-xl"
          >
            <div className="p-4">
              <motion.img
                src={member.img}
                alt={member.name}
                className="object-cover w-full rounded-lg"
                whileHover={{ y: -20 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#FFCD57]  opacity-0 hover:opacity-100 transition-opacity duration-300 flex p-4">
                <p className="font-semibold text-justify text-gray-800">
                  {member.about}
                </p>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-gray-800">
                {member.name}
              </h2>
              <p className="text-gray-500">{member.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeams;
