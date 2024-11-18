import React from "react";

const Translation = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/translation.svg"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Translation and localization
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            bringing everyone together with translation and localization
          </h2>
          <p className="mb-7">
            Translation and localization empower learners to access courses in
            their preferred language, enhancing understanding and retention. By
            tailoring content to suit cultural nuances and language preferences,
            we ensure that learners engage more deeply with the material. This
            personalized approach not only facilitates better comprehension but
            also fosters a more inclusive learning environment, allowing
            everyone to thrive in their educational journey.
          </p>
          <a href="/contact" className="py-3 px-6 bg-gray-900 text-white">
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

export default Translation;
