import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const OurTeams = () => {
  const teams = [
    {
      img: "/img/aboutUs/team1.png",
      name: "Eyob Solomon-COO",
      about:
        "Eyob Solomom is our talented UI/UX designer who crafts intuitive and seamless interfaces, ensuring an enjoyable user experience. Beyond his design skills, he's a compelling storyteller who brings learning to life and gives learners a memorable and engaging journey.",
    },
    {
      img: "/img/aboutUs/team1.png",
      name: "Eyob Solomon-COO",
      about:
        "Eyob Solomom is our talented UI/UX designer who crafts intuitive and seamless interfaces, ensuring an enjoyable user experience. Beyond his design skills, he's a compelling storyteller who brings learning to life and gives learners a memorable and engaging journey.",
    },
    {
      img: "/img/aboutUs/team1.png",
      name: "Eyob Solomon-COO",
      about:
        "Eyob Solomom is our talented UI/UX designer who crafts intuitive and seamless interfaces, ensuring an enjoyable user experience. Beyond his design skills, he's a compelling storyteller who brings learning to life and gives learners a memorable and engaging journey.",
    },
    {
      img: "/img/aboutUs/team1.png",
      name: "Eyob Solomon-COO",
      about:
        "Eyob Solomom is our talented UI/UX designer who crafts intuitive and seamless interfaces, ensuring an enjoyable user experience. Beyond his design skills, he's a compelling storyteller who brings learning to life and gives learners a memorable and engaging journey.",
    },
    {
      img: "/img/aboutUs/team1.png",
      name: "Eyob Solomon-COO",
      about:
        "Eyob Solomom is our talented UI/UX designer who crafts intuitive and seamless interfaces, ensuring an enjoyable user experience. Beyond his design skills, he's a compelling storyteller who brings learning to life and gives learners a memorable and engaging journey.",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div>
      <p className="px-32">
        Everyone at ELM is a learner through and through. Author, indoor
        horticulturist, Ph.D. holder in physics, weekend DJ, award-winning
        learning architect, the list goes on. Our team brings a wealth of
        diverse experience to our projects.
      </p>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1
          className="text-2xl font-bold text-center mb-6 animation"
          data-aos="fade-left"
        >
          OUR TEAMS
        </h1>
        <div
          className="flex flex-wrap justify-center animation"
          data-aos="zoom-in"
        >
          {teams.map((item) => {
            return (
              <div
                key={item.id}
                className="relative w-56 h-56 bg-yellow-500 bg-opacity-80 p-6 rounded-full shadow-lg transition-all duration-400 transform hover:rounded-lg hover:h-64 cursor-pointer m-5"
              >
                <div className="relative w-full h-full ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-400 hover:transform hover:translate-y-[-70px]"
                  />
                </div>
                <div className="absolute w-full text-center transition-all duration-500 transform translate-y-[-90px] opacity-0 pointer-events-none hover:opacity-100">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm">{item.about}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
