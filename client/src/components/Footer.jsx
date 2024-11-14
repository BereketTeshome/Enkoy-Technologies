import { Mail, Phone } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#161628] w-full px-36">
      <div className="pt-20 text-white flex justify-between">
        <div>
          <img src="/navLogo.png" alt="logo" className="w-[50px]" />
          <h2 className="text-lg mb-10 mt-2">
            The people-first eLearning <br /> agency
          </h2>
          <p className="flex items-center text-sm gap-3 mb-2">
            <Phone fontSize="small" /> +251987654321
          </p>
          <p className="flex items-center text-sm gap-3 mb-2">
            <Mail fontSize="small" /> info@elmlearning.com
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-6">Services</p>
          <div className="*:mb-3 *:text-sm flex flex-col">
            <a href="/">Custom eLearning</a>
            <a href="/">Instructor-Led Training</a>
            <a href="/">Learning Strategy</a>
            <a href="/">Corporate Training</a>
            <a href="/">Our Work</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold mb-6">Company</p>
          <div className="*:mb-3 *:text-sm flex flex-col">
            <a href="/">About Us</a>
            <a href="/">DEI Commitment</a>
            <a href="/">Our Sustainability Commitment</a>
            <a href="/">Careers</a>
            <a href="/">Contact Us</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold mb-6">Resources</p>
          <div className="*:mb-3 *:text-sm flex flex-col">
            <a href="/">Learning Lab</a>
            <a href="/">News</a>
            <a href="/">L&D Hub</a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src="/footerLogo.png"
          alt="footerLogo.png"
          className="w-[110px] my-10"
        />
        <hr />
        <div className="flex justify-between text-sm text-gray-400 pt-2 pb-6">
          <p>© ELM Learning 2024</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
