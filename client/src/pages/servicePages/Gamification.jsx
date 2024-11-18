import React from "react";

const Gamification = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/gamification.svg"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Custom eLearning solution
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Elevate Your Learning through Gamification
          </h2>
          <p className="mb-7">
            Gamification training integrates game elements into the learning
            experience to boost engagement and motivation. At Enkoy, we leverage
            Learning Experience Design (LXD) to create immersive and meaningful
            learning environments. Our approach combines innovative game
            mechanics with effective design principles, enhancing knowledge
            retention and skill development. This strategy empowers learners to
            thrive in their educational journeys.
          </p>
          <a href="/contact" className="py-3 px-6 bg-gray-900 text-white">
            Contact Us
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row">
          <div className="flex-1">
            <img
              src="/img/services/gamificationImg.png"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Why Gamification in Digital Learning?
            </h2>
            <p>
              Gamification in digital learning boosts engagement and motivation
              by making the process interactive and enjoyable. It enhances
              knowledge retention through practice and provides immediate
              feedback on progress. Personalized experiences allow learners to
              focus on their interests while community-building elements foster
              collaboration. Overall, gamification creates a dynamic environment
              that keeps learners motivated and involved.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#F4B9AF] md:flex-row flex-col">
          <div className="flex-1 flex ">
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Our Approach <br /> to gamification
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px]">
            <p>
              At Enkoy, our approach to gamification begins with understanding
              the unique needs and preferences of our learners. We design
              immersive and interactive experiences that integrate game elements
              to enhance engagement and motivation. By leveraging Learning
              Experience Design (LXD), we create meaningful challenges and
              rewards that promote knowledge retention and skill development.
              Our goal is to foster a dynamic learning environment where
              learners feel empowered to achieve their educational objectives
              while enjoying the process.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Gamification;
