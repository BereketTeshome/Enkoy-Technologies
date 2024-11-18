import React from "react";
import Partners from "../components/homepage_contents/partners";

const AboutUs = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-[#161628]">
        <div className="w-[40%] text-white font-semibold">
          <p className="uppercase text-sm mb-4">About us</p>
          <p className="text-3xl">
            We believe that organizations can succeed when they commit to
            building a culture of continuous learning.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center text-center py-20">
        <p className="text-gray-900 text-3xl font-semibold mb-4">Who we are</p>
        <p className="w-[55%] text-gray-700">
          Founded in 2013, ELM Learning is an eLearning agency made up of
          designers, leaders, and visionaries who believe learning and
          development are not single events, but continuous processes. Our
          learning programs get measurable results because we combine
          Neurolearning™ principles, design thinking, and compelling
          storytelling.
        </p>
      </div>
      <div className="w-full flex gap-32 md:px-20 sm:px-10 px-5 py-32 bg-[#FFC961] md:flex-row flex-col">
        <div className="flex-1 flex ">
          <h2 className=" inline-block text-3xl text-gray-900 font-semibold">
            Building Awareness and Commitment to Responsible Practices
          </h2>
        </div>
        <div className="flex-1 text-gray-900 text-[15px] *:mb-2">
          <p>
            In today’s diverse work environment, understanding fair employment
            practices is critical for all employees. At Enkoy Technologies, our
            training emphasizes the principles of equity and inclusion,
            highlighting the need for fair treatment in hiring, promotions,
            compensation, and workplace interactions. We tailor our programs to
            meet the specific needs of your organization, ensuring that the
            training is relevant and impactful.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="md:px-20 sm:px-10 px-5 flex items-center w-full flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h2 className=" text-3xl sm:text-4xl text-gray-950 mb-7 font-semibold">
            We don’t sell learning services, we create{" "}
            <span className="text-pink-400">learning relationships.</span>
          </h2>
          <p className="mb-7 text-sm">
            This isn’t a one-and-done learning solution that just checks a box.
            We help organizations foster long-term growth from the inside out,
            with a focus on building a happier and more fulfilled workforce. Our
            approach combines the science of Neurolearning™ principles with
            design thinking and compelling storytelling to create engaging
            experiences based on how people actually learn.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="/img/corporate-training/corporate-training.png"
            alt=""
            className="w-[80%]"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Partners />
      </div>
    </div>
  );
};

export default AboutUs;
