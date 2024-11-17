import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OurServices from "./navbar_popups/OurServices";
import CorporateTraining from "./navbar_popups/CorporateTraining";
import OurWork from "./navbar_popups/OurWork";
import LearningHub from "./navbar_popups/LearningHub";
import AboutUs from "./navbar_popups/AboutUs";
import DigitalTraining from "./navbar_popups/DigitalTraining";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { name: "Our Services", component: <OurServices /> },
    {
      name: "Corporate Training",
      component: <CorporateTraining />,
    },
    { name: "Our Work", component: <OurWork /> },
    { name: "Learning Hub", component: <LearningHub /> },
    { name: "About Us", component: <AboutUs /> },
    { name: "*Digital Training", component: <DigitalTraining /> },
  ];

  return (
    <nav className="w-full bg-[#161628] py-5 px-6 lg:px-10 flex justify-between items-center relative">
      <div>
        <img src="/navLogo.png" alt="logo" className="w-[40px]" />
      </div>

      {/* Desktop Menu */}
      <div className="items-center hidden gap-16 lg:flex">
        <a href="/" className="text-sm font-semibold text-gray-50">
          Home
        </a>
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href="#"
              className="text-xs font-semibold lg:text-sm text-gray-50"
            >
              {item.name}
            </a>
            <AnimatePresence>
              {activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 3 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.4 }}
                  className="absolute z-10 mt-2 top-full min-w-72"
                >
                  {item.component}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Contact Us Button */}
      <a
        href="/"
        className="relative text-sm font-semibold max-w-[110px] bg-gradient-to-r from-pink-500 to-yellow-500 text-white flex items-center px-5 py-2 rounded-lg overflow-hidden group shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-pink-500/50"
      >
        <span className="relative z-10">Contact Us</span>
      </a>
    </nav>
  );
};

export default NavBar;
