import React from "react";

const SelfPacedLearning = () => {
  return (
    <div className="pt-20 ">
      <div className="flex flex-col items-center w-full">
        <div className="sm:w-[60%] pb-20 w-[80%]">
          <img
            src="/img/services/mobileElearning.svg"
            alt=""
            className="w-[70px]"
          />
          <p className="uppercase text-sm font-semibold text-[#FF8689] my-10 ">
            Self-paced learning
          </p>
          <h2 className="text-4xl sm:text-5xl text-gray-950 mb-7">
            Self-paced learning solution
          </h2>
          <p className="text-justify mb-7">
            In today's fast-paced digital world, individuals increasingly seek
            the freedom to learn at their own pace through their devices.
            Self-paced learning empowers learners to navigate their educational
            journeys independently, allowing them to engage with content that is
            both interactive and captivating.{" "}
          </p>
          <a href="/contact" className="px-6 py-3 text-white bg-gray-900">
            Contact Us
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="flex flex-col items-center w-full px-5 md:px-20 sm:px-10 lg:flex-row">
          <div className="flex-1">
            <img
              src="/img/services/why_mobile_learning.png"
              alt=""
              className="w-[90%]"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl  sm:text-5xl text-gray-950 mb-7">
              Why self-paced learning?
            </h2>
            <p className="text-justify">
              Self-paced learning is an effective educational approach that
              offers flexibility. It allows learners to study at their
              convenience while accommodating personal and professional
              commitments. It promotes personalization, enabling individuals to
              focus on topics that interest them, which enhances engagement and
              motivation. Research indicates that this method improves
              retention, as learners can control their pace and revisit
              challenging concepts. With many digital platforms, self-paced
              learning is accessible and cost-effective, reducing traditional
              education expenses.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFCD57] md:flex-row flex-col">
          <div className="flex flex-1 ">
            <h2 className="inline-block text-4xl font-semibold text-gray-900  md:text-6xl">
              Our Self-Paced <br /> Learning <br /> Approach
            </h2>
          </div>
          <div className="flex-1 text-gray-900 text-[15px] text-justify">
            <p>
              At Enkoy, we understand how to positively impact our learners
              through self-paced learning by truly knowing their needs. Our
              approach focuses on flexibility, allowing learners to study at
              their own pace. We create engaging and interactive content that
              caters to different learning styles, ensuring everyone can learn
              effectively. By empowering our learners to take charge of their
              education, we help them achieve their goals in a way that fits
              their lives.
            </p>
            <h2 className="mt-2 mb-5 text-2xl font-semibold text-gray-950">
              Why self-paced learning?
            </h2>
            <p>
              Self-paced learning can be the right approach for many learners
              due to several key benefits:
            </p>
            <ul className="list-disc pl-6 py-5 *:mb-5">
              <li>
                <b>Flexibility:</b> Learners can study at their own convenience,
                fitting coursework around personal and professional commitments
              </li>
              <li>
                <b>Personalization:</b> It allows individuals to focus on topics
                that interest them or need more attention, enhancing motivation
                and engagement.
              </li>
              <li>
                <b>Control Over Learning Speed:</b> Learners can progress as
                quickly or slowly as they need, promoting a deeper understanding
                of the material.
              </li>
              <li>
                <b>Improved Retention:</b> Research shows that self-paced
                learners often retain information better as they can revisit
                challenging concepts.
              </li>
              <li>
                <b>Accessibility:</b> Available through digital platforms,
                self-paced learning is accessible to a wide range of learners
                with different needs and backgrounds.
              </li>
              <li>
                <b>Cost-effectiveness:</b> It often reduces expenses related to
                traditional education, making learning more affordable.
              </li>
            </ul>
            <p>
              Overall, self-paced learning is an effective approach that
              supports diverse learning styles and helps individuals achieve
              their educational goals in a way that suits their lifestyles.
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

export default SelfPacedLearning;
