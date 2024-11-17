import React from "react";
import Header from "../components/Header";
// import Contents from "../components/Contents";
import Partners from "../components/homepage_contents/partners";
import Testimonials from "../components/homepage_contents/Testimonials";
import Achievements from "../components/homepage_contents/achievements";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Partners />
      <Testimonials />
      <Achievements />
      {/* <Contents /> */}
    </div>
  );
};

export default HomePage;
