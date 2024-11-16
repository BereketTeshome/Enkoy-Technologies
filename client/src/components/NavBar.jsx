import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dropdown for the given menu item
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      name: "Our Services",
      content: [
        "Custom eLearning",
        "Gamification",
        "Mobile Learning",
        "Microlearning",
      ],
      icon: "/img/contentsMenuImg.png",
      overviewLink: "/learning-solutions-overview",
    },
    {
      name: "Corporate Training",
      content: [
        "Compliance Training",
        "Employee Onboarding",
        "Customer Training",
        "Sales Enablement Training",
        "Technical Training",
      ],
      icon: "/img/contentsMenuImg.png",
      overviewLink: "/corporate-training-overview",
    },
    {
      name: "Our Work",
      content: ["Case Studies", "Client Testimonials", "Portfolio"],
      icon: "/img/contentsMenuImg.png",
    },
    {
      name: "Learning Hub",
      content: ["Research Articles", "Webinars", "Workshops"],
      icon: "/img/contentsMenuImg.png",
    },
    {
      name: "About Us",
      content: ["Our Mission", "Company Values", "Careers"],
      icon: "/img/contentsMenuImg.png",
    },
    {
      name: "*Digital Training",
      content: ["Our Mission", "Company Values", "Careers"],
      icon: "/img/contentsMenuImg.png",
    },
  ];

  return (
    <nav className="w-full bg-[#161628] py-5 px-6 lg:px-36 flex justify-between items-center relative">
      <div>
        <img src="/navLogo.png" alt="logo" className="w-[40px]" />
      </div>

      {/* Desktop Menu */}
      <div className="items-center hidden gap-16 lg:flex">
        {/* Home Link */}
        <a href="/" className="text-sm font-semibold text-gray-50">
          Home
        </a>

        {/* Other Navigation Items */}
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => toggleDropdown(item.name)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <a href="#" className="text-sm font-semibold text-gray-50">
              {item.name}
            </a>
            <AnimatePresence>
              {activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 3 }}
                  exit={{ opacity: 0, y: 25 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-full mt-2 w-72 bg-white shadow-[#FAD358] shadow-md p-4 rounded-lg z-10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className="w-10 h-10"
                    />
                    <span className="font-bold text-gray-800">{item.name}</span>
                  </div>
                  {item.overviewLink && (
                    <a
                      href={item.overviewLink}
                      className="text-[#F1858C] text-sm mb-2 inline-block"
                    >
                      See overview
                    </a>
                  )}
                  <ul className="text-sm text-gray-700">
                    {item.content.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-1 cursor-pointer hover:text-blue-500"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
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
        <span className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:opacity-100"></span>
        <span className="relative z-10">Contact Us</span>
      </a>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="text-white lg:hidden">
        Menu
      </button>

      {/* Mobile Sliding Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#161628] text-white z-20 transition-transform transform translate-x-0 w-full lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="absolute text-2xl text-white top-5 right-5"
          >
            &times;
          </button>

          <div className="p-6 mt-10 space-y-6">
            {/* Home Link for Mobile */}
            <a href="/" className="block text-lg font-semibold text-white">
              Home
            </a>

            {navItems.map((item, index) => (
              <div key={index} className="pb-4 border-b border-gray-700">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="text-lg font-semibold text-white"
                >
                  {item.name}
                </button>
                {activeDropdown === item.name && (
                  <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-300">
                    {item.content.map((subItem, subIndex) => (
                      <li key={subIndex} className="hover:text-blue-300">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Contact Us Button */}
            <a
              href="/"
              className="relative text-sm font-semibold max-w-[110px] bg-gradient-to-r from-pink-500 to-yellow-500 text-white flex items-center px-5 py-2 mt-5 rounded-lg overflow-hidden group shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-pink-500/50"
            >
              <span className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:opacity-100"></span>
              <span className="relative z-10">Contact Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
