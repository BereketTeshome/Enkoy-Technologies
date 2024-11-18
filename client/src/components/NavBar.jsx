import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OurServices from "./navbar_popups/OurServices";
import CorporateTraining from "./navbar_popups/CorporateTraining";
import OurWork from "./navbar_popups/OurWork";
import LearningHub from "./navbar_popups/LearningHub";
import AboutUs from "./navbar_popups/AboutUs";
import DigitalTraining from "./navbar_popups/DigitalTraining";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Track screen width to reset mobile menu state
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Close mobile menu on large screens
    if (isLargeScreen) {
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLargeScreen]);

  const navItems = [
    { name: "Our Services", component: <OurServices /> },
    { name: "Corporate Training", component: <CorporateTraining /> },
    { name: "Our Work", component: <OurWork /> },
    { name: "Learning Hub", component: <LearningHub /> },
    { name: "About Us", component: <AboutUs /> },
    { name: "*Digital Training", component: <DigitalTraining /> },
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="w-full bg-[#161628] py-5 px-6 lg:px-10 flex justify-between items-center relative">
      {/* Logo */}
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

      {/* Contact Us Button (Desktop Only) */}
      <div className="hidden lg:block">
        <a
          href="/Contact"
          className="relative text-sm font-semibold max-w-[110px] bg-gradient-to-r from-pink-500 to-yellow-500 text-white flex items-center px-5 py-2 rounded-lg overflow-hidden group shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-pink-500/50"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="block lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <HiX className="w-8 h-8 text-gray-50" />
          ) : (
            <HiMenu className="w-8 h-8 text-gray-50" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-[#161628] flex flex-col items-center text-center space-y-4 py-6 z-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="text-sm font-semibold text-gray-50">
              Home
            </a>
            {navItems.map((item, index) => (
              <div key={index} className="w-full">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full text-left px-4 py-2 text-sm font-semibold text-gray-50 bg-[#1f1f38] hover:bg-[#2a2a46] focus:outline-none"
                >
                  {item.name}
                </button>
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-[#2a2a46] px-4 py-2"
                    >
                      {item.component}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <a
              href="/Contact"
              className="relative text-sm font-semibold max-w-[110px] bg-gradient-to-r from-pink-500 to-yellow-500 text-white flex items-center justify-center px-5 py-2 rounded-lg overflow-hidden group shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-pink-500/50"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
