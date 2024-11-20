import React from "react";
import SingleWorks from "../components/our-work/SingleWorks";
import Partners from "../components/homepage_contents/partners";
import Testimonials from "../components/homepage_contents/Testimonials";
import Contact from "./Contact";
const OurWork = () => {
  return (
    <div>
      <div className="px-5 md:px-16 lg:px-32 bg-[#161628]">
        {/* Header Section */}
        <div className="py-12 md:py-24">
          <div className="w-full md:w-[80%] lg:w-[60%] text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Our Work</h1>
            <p className="text-gray-300">
              Discover our case studies to see how we work with top global
              organizations for outstanding results. Be inspired by our
              innovative methods and impressive outcomes!
            </p>
          </div>
        </div>

        {/* Works Section */}
        <div>
          <SingleWorks />
        </div>
      </div>
      <div>
        <Partners />
      </div>
      <br />
      <br />
      <div>
        <Testimonials />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default OurWork;
