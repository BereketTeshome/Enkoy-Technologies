import React from "react";

const LXD = () => {
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
            LXD
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            LXD Training Services
          </h2>
          <p className="mb-7 text-justify">
            At Enkoy, we offer specialized Learning Experience Design (LXD)
            training services that empower organizations to create engaging and
            effective learning experiences. Our approach focuses on
            understanding the unique needs of your learners and aligning
            training strategies with your educational goals.
          </p>
          <p className="mb-7 text-justify">
            Our expert team guides you through the principles of LXD, helping
            you design courses that enhance learner engagement and retention. We
            cover essential topics such as user-centered design, interactive
            content creation, and effective assessment strategies.
          </p>
          <p className="mb-7 text-justify">
            By incorporating best practices in LXD, we ensure that your training
            programs are not only informative but also enjoyable and impactful.
            With our LXD training services, you can elevate your learning
            initiatives and foster a culture of continuous improvement within
            your organization.
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default LXD;
