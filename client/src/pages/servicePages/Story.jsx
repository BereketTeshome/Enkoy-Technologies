import React from "react";

const Story = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/storytelling.png"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Custom eLearning solution
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Storytelling brings the modules to life
          </h2>
          <p className="mb-7">
            Storytelling, combined with a well-crafted learning strategy,
            creates an exceptional learning experience centered on narrative.
            But the real magic lies in the outcome: highly engaged and focused
            learners. Our custom visual stories, designed with Learning
            Experience Design (LXD) principles, ensure that your team retains
            knowledge longer and applies it effectively. By prioritizing LXD, we
            create meaningful and immersive learning experiences that resonate
            with learners, making education not just informative but truly
            transformative.
          </p>
          <a href="/contact" className="py-3 px-6 bg-gray-900 text-white">
            Get in touch
          </a>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Story;
