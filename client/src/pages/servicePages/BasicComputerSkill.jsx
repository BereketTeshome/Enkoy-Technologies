import React from "react";

const BasicComputerSkill = () => {
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
            Basic Computer Skills Training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            LXD Training Services
          </h2>
          <p className="mb-7">
            At Enkoy, we provide essential basic computer skills training
            designed to help individuals navigate today’s digital world with
            confidence. Our program focuses on teaching fundamental skills such
            as using operating systems, managing files, and utilizing essential
            software applications.
          </p>
          <p className="mb-7">
            Through interactive lessons and hands-on practice, participants will
            learn how to effectively use tools like word processors,
            spreadsheets, and presentation software. Our experienced instructors
            provide clear guidance and support to ensure that each learner feels
            comfortable and proficient with technology.
          </p>
          <p className="mb-7">
            By participating in our basic computer skills training, you will
            gain the foundational knowledge needed to enhance your productivity
            and efficiency in both personal and professional settings. With our
            support, you can become more tech-savvy and ready to tackle digital
            challenges.
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default BasicComputerSkill;
