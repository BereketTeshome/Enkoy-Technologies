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
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";
  const { token } = useParams()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const myParam = queryParams.get('token');
 
    const cookie = new Cookies();
    const navigate = useNavigate();
  
  useEffect(()=>{
    if(myParam){
      cookie.set("user", myParam, { path: "/", httpOnly: false });
      navigate("/");
      window.location.reload();
    }
  },[myParam])

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
      
      {/* Title for contact us */}
      <h1 className={`text-3xl font-bold text-center my-14 text-[#FFCD57]`}>Contact Us</h1>
      <ContactUsSection />
    </div>
  );
};

export default HomePage;
