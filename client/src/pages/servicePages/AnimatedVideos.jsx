import React from "react";

const AnimatedVideos = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/animatedVideos.svg"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Custom eLearning solution
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Animated videos are a powerful tool for transforming digital content
          </h2>
          <p className="mb-7 text-justify">
            Animated videos in our modules help learners visualize complex
            concepts, making information easier to grasp. At Enkoy, we harness
            our animators' expertise to create engaging visuals that keep
            learners excited and motivated.
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
              src="/img/services/animatedVideosImg.png"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Everyone adores animated videos for learning
            </h2>
            <p className="text-justify">
              Most people are visual learners, so creating visual content can
              capture their attention and evoke emotions. At Enkoy, we use our
              expertise to produce engaging animated videos that provide
              learners with an enjoyable journey.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
          <div className="flex-1 flex ">
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Our animation <br /> video process
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] text-justify">
            <p>
              Customers often approach us with a desire to include animation in
              their modules in some capacity. We assess which sections of the
              module are most suitable for animation and evaluate how the target
              audience and learning objectives align with the desired level of
              animation.
            </p>
            <p>
              We utilize various tools to craft our animations, combining
              well-written scripts with visually appealing graphics.
              Thoughtfully designed animations illustrate scenarios and guide
              learner attention throughout the training process. Whether it’s an
              explainer video or a general training module, animation adds
              vitality to eLearning, creating an engaging and dynamic experience
              for all learners.
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

export default AnimatedVideos;
