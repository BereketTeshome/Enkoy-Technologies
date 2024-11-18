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

      <Partners />
      <Testimonials />
      <Achievement />
      <OurServices />
      {/* <Contents /> */}
      <VideoSection />
      <HowWeWork />
      <CaseStudies />
      <ContactUsSection />
    </div>
  );
};

export default HomePage;
