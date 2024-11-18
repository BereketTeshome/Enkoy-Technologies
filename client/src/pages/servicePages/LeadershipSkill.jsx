import React from "react";

const LeadershipSkill = () => {
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
            Leadership Skills Training for Student
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            LXD Training Services
          </h2>
          <p className="mb-7">
            At Enkoy, we provide specialized leadership skills training designed
            specifically for students. Our program focuses on equipping young
            individuals with the essential skills and confidence needed to
            become effective leaders in their academic and future professional
            environments.
          </p>
          <p className="mb-7">
            Through interactive workshops and engaging activities, students will
            develop critical thinking, communication, and teamwork skills. Our
            experienced facilitators guide participants in exploring their
            leadership styles and understanding the importance of collaboration
            and adaptability.
          </p>
          <p className="mb-7">
            By participating in our leadership skills training, students will
            not only enhance their personal growth but also prepare themselves
            for future challenges. With our support, they can cultivate the
            qualities needed to lead with impact and inspire others.
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSkill;
