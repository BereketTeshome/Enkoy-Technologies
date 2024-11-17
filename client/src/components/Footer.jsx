import { Mail, Phone } from "@mui/icons-material";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#161628] w-full px-6 md:px-12 lg:px-36">
      <div className="flex flex-wrap justify-between gap-12 pt-12 text-white">
        {/* Logo and Contact */}
        <div className="flex-1 min-w-[250px]">
          <img src="/navLogo.png" alt="logo" className="w-[50px]" />
          <h2 className="mt-4 mb-8 text-lg">
            Empowering Learning <br /> through digital excellence
          </h2>
          <p className="flex items-center gap-3 mb-2 text-sm">
            <Phone fontSize="small" /> +251970010047
          </p>
          <p className="flex items-center gap-3 mb-2 text-sm">
            <Mail fontSize="small" /> enkoytechnologies@gmail.com
          </p>
        </div>

        {/* Services Section */}
        <div className="flex-1 min-w-[150px]">
          <p className="mb-6 text-lg font-semibold underline">Services</p>
          <div className="space-y-3 text-sm">
            <a href="/">Adaptive Digital Learning</a>
            <a href="/">Self-paced learning</a>
            <a href="/">Corporate Training - Professional Skills Training</a>
            <a href="/">Learning Strategy</a>
            <a href="/">Our Work</a>
          </div>
        </div>

        {/* Company Section */}
        <div className="flex-1 min-w-[150px]">
          <p className="mb-6 text-lg font-semibold underline">Company</p>
          <div className="space-y-3 text-sm">
            <a href="/">About us</a>
            <a href="/">Career</a>
            <a href="/">Contact us</a>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex-1 min-w-[200px]">
          <p className="mb-6 text-lg font-semibold underline">Social Links</p>
          <div className="grid grid-cols-3 gap-4">
            <a
              href="https://www.linkedin.com/company/enkoytech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/enkoy_1/profilecard/?igsh=dHRzYmI5N2hrZXRm"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com/@enkoytech?si=7_wriEQK_H9UUJNW"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://x.com/enkoytech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://t.me/enkoytechs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTelegramPlane size={24} />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61568879338093"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full mt-12">
        <hr className="border-gray-600" />
        <div className="flex flex-wrap justify-between gap-4 pt-4 pb-6 text-sm text-gray-400">
          <p className="flex-1 text-center">© Enkoy Technologies 2024</p>
          <p className="flex-1 text-center">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
