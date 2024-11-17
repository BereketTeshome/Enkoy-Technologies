import React from "react";
import Header from "../components/Header";
// import Contents from "../components/Contents";
import Partners from "../components/homepage_contents/partners";
import Testimonials from "../components/homepage_contents/Testimonials";
import OurServices from "../components/homepage_contents/OurServices";
import VideoSection from "../components/homepage_contents/VideoSection";
import HowWeWork from "../components/homepage_contents/HowWeWork";
import CaseStudies from "../components/homepage_contents/CaseStudies";
import ContactUsSection from "../components/homepage_contents/ContactUsSection";
import Achievement from "../components/homepage_contents/Achievement";

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1 className="relative text-3xl font-semibold text-center text-gray-600 top-10">
        Who we work with
      </h1>
      <Partners />
      <Testimonials />
      <Achievement />
      <OurServices />
      <VideoSection />
      <HowWeWork />
      <CaseStudies />
      <ContactUsSection />
      {/* <Contents /> */}
    </div>
  );
};

export default HomePage;
