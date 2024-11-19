import React from "react";

const Accessibility = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col w-full items-center">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/accessibility.png"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            accessibility
          </p>
          {/* <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Elevate Your Learning through Gamification
          </h2> */}
          <p className="mb-7 text-justify">
            At Enkoy, we believe that accessibility in eLearning is essential
            for creating inclusive learning experiences for everyone. Our
            products are designed with universal accessibility in mind, ensuring
            that all learners, regardless of their abilities or backgrounds, can
            engage with the content effectively. By incorporating features such
            as adjustable text sizes, screen reader compatibility, and
            alternative formats, we make learning accessible and enjoyable for
            all. Our commitment to accessibility empowers every learner to reach
            their full potential, creating a diverse and thriving educational
            community.
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
              src="/img/services/accessibilityImg.png"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className=" text-3xl sm:text-5xl text-gray-950 mb-7">
              Why Accessibility?
            </h2>
            <p className="text-justify">
              Accessibility in eLearning is crucial for creating inclusive
              educational experiences that cater to all learners, regardless of
              their abilities or backgrounds. It accommodates diverse learning
              needs, ensuring everyone can engage effectively with the content.
              By complying with legal standards, organizations avoid potential
              issues while enhancing the overall learning experience for all
              users. Accessible design empowers learners, fosters independence,
              and broadens the audience reach, ultimately leading to improved
              engagement and knowledge retention. Prioritizing accessibility
              creates a richer and more effective learning environment for
              everyone.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
          <div className="flex-1 flex ">
            <h2 className=" inline-block md:text-6xl text-4xl text-gray-900 font-semibold">
              Our Accessibility <br /> Approach
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px]">
            <p className="text-justify">
              At Enkoy, we prioritize accessibility by providing both offline
              and online learning options to cater to diverse learner needs. Our
              online courses are designed with features like adjustable text
              sizes, screen reader compatibility, and alternative formats to
              ensure all users can engage effectively. For offline learning, we
              offer downloadable resources that maintain accessibility
              standards, allowing learners to access materials anytime,
              anywhere. This dual approach ensures that every learner has the
              opportunity to succeed, regardless of their circumstances or
              preferences. By embracing accessibility, we create an inclusive
              learning environment that empowers everyone to thrive.
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

export default Accessibility;
