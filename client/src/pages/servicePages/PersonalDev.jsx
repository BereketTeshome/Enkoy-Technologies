import React from "react";

const PersonalDev = () => {
  return (
    <div className="py-20 ">
      <div className="flex flex-col items-center w-full">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/storytelling.png"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Personal Development Training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            LXD Training Services
          </h2>
          <p className="mb-7">
            At Enkoy, we offer comprehensive personal development training
            designed to empower individuals to reach their full potential. Our
            program focuses on enhancing self-awareness, goal-setting, and
            critical life skills that contribute to personal and professional
            growth.
          </p>
          <p className="mb-7">
            Through interactive workshops and engaging activities, participants
            will explore areas such as time management, effective communication,
            and emotional intelligence. Our experienced trainers provide
            valuable insights and practical tools to help individuals overcome
            challenges and build confidence.
          </p>
          <p className="mb-7">
            By investing in personal development training, you can unlock new
            opportunities for success and fulfillment. With our support,
            participants will gain the skills and mindset needed to navigate
            their journeys and achieve their aspirations.
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalDev;
