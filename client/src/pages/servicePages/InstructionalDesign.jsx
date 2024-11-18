import React from "react";

const InstructionalDesign = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col items-center w-full">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/translation.svg"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Instructional design consulting
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Crafting Engaging eLearning Experiences with Passion and Expertise
          </h2>
          <p className="mb-7">
            At Enkoy, creativity is our passion; we live and breathe it! With
            our expertise in designing eLearning courses, we offer exceptional
            instructional design consulting services to help you create engaging
            and effective learning experiences.
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Contact Us
          </a>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default InstructionalDesign;
