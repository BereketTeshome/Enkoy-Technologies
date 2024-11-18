import React from "react";

const EmployabilitySkill = () => {
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
            Employability Skills Training
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            LXD Training Services
          </h2>
          <p className="text-justify mb-7">
            At Enkoy, we provide specialized employability skills training
            designed to equip individuals with the essential competencies needed
            to thrive in the job market. Our program focuses on building key
            skills such as communication, teamwork, problem-solving, and
            adaptability, which are crucial for career success.
          </p>
          <p className="text-justify mb-7">
            Through interactive workshops and hands-on activities, participants
            will engage in real-world scenarios that enhance their practical
            skills and boost their confidence. Our experienced trainers offer
            personalized guidance and feedback to help individuals identify
            their strengths and areas for improvement.
          </p>
          <p className="text-justify mb-7">
            By participating in our employability skills training, you will gain
            the tools and knowledge necessary to stand out to employers and
            secure meaningful job opportunities. With our support, you can
            enhance your career readiness and take the next step toward your
            professional goals.
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmployabilitySkill;
