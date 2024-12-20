import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OurServices from "./navbar_popups/OurServices";
import CorporateTraining from "./navbar_popups/CorporateTraining";
import OurWork from "./navbar_popups/OurWork";
import LearningHub from "./navbar_popups/LearningHub";
import AboutUs from "./navbar_popups/AboutUs";
import DigitalTraining from "./navbar_popups/DigitalTraining";
import { HiMenu, HiX } from "react-icons/hi";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const cookie = new Cookies();
  const token = cookie.get("user");
  const decode = token ? jwtDecode(token) : "";

  const language = useSelector((state) => state.language.language);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (isLargeScreen) {
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isLargeScreen]);

  const navItems = [
    { name: language === "amh" ? "ስለ እኛ" : "About Us", component: <AboutUs /> },
    {
      name: language === "amh" ? "አገልግሎቶቻችን" : "Our Services",
      component: <OurServices />,
    },
    {
      name: language === "amh" ? "የእኛ ስራ" : "Our Work",
      component: <OurWork />,
    },
    {
      name: language === "amh" ? "የመማሪያ ማዕከል" : "Learning Hub",
      component: <LearningHub />,
    },
    {
      name: language === "amh" ? "የኮርፖሬት ስልጠና" : "Corporate Training",
      component: <CorporateTraining />,
    },
    {
      name: language === "amh" ? "*ዲጂታል ስልጠና" : "*Digital Training",
      component: <DigitalTraining />,
      special: true,
    },
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className={`${"navDarkContainer"} `}>
      {/* Logo */}
      <div>
        <img src="/navLogo.png" alt="logo" className="w-[40px]" />
      </div>

      {/* Desktop Menu */}
      <motion.div
        className="items-center hidden gap-16 lg:flex"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <motion.a
          href="/"
          className={`text-sm font-semibold ${"navDarkLinkColor"}`}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {language === "amh" ? "ቤት" : "Home"}
        </motion.a>
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative group"
            onMouseEnter={() => setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
            style={{ zIndex: activeDropdown === item.name ? 50 : 1 }}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <a
              href="#"
              className={`relative text-xs font-semibold lg:text-sm ${
                item.special
                  ? "text-[#FFCD57] font-bold"
                  : `${"navDarkLinkColor"}`
              } group`}
            >
              {item.name}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#FFCD57] transition-all duration-300 group-hover:w-full"></span>
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
          </motion.div>
        ))}
        {decode ? (
          <a href="/profile" className="ml-16">
            {decode.profileImg ? (
              <img
                src={decode.profileImg}
                alt="Profile"
                className="object-cover w-12 h-12 rounded-full shadow-md"
              />
            ) : (
              <motion.div
                className="flex items-center justify-center w-12 h-12 text-xl font-bold text-gray-700 uppercase rounded-full bg-[#E6C354]"
                whileHover={{ scale: 1.1 }}
              >
                {decode.username?.slice(0, 2) || ""}
              </motion.div>
            )}
          </a>
        ) : (
          <motion.a
            href="/login"
            className="relative text-sm font-semibold max-w-[110px] bg-gradient-to-r from-yellow-500 to-yellow-500 text-white flex items-center justify-center px-5 py-2 rounded-lg overflow-hidden group shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-yellow-500/50 ml-10"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            login
          </motion.a>
        )}
      </motion.div>

      {/* Mobile Menu Icon */}
      <div className="block lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <HiX className={`w-8 h-8 ${"navDarkLinkColor"}`} />
          ) : (
            <HiMenu className={`w-8 h-8 ${"navDarkLinkColor"}`} />
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
          >
            <motion.a
              href="/"
              className={`text-sm font-semibold ${"navDarkLinkColor"} transition-colors duration-300 hover:text-[#FFCD57]`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Home
            </motion.a>

            {navItems.map((item, index) => (
              <motion.div key={index} className="w-full">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`w-full text-left px-4 py-2 text-sm font-semibold ${
                    item.special
                      ? "text-[#FFCD57] font-bold"
                      : `${"navDarkLinkColor"}`
                  } bg-[#1f1f38] hover:bg-[#2a2a46] focus:outline-none`}
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
              </motion.div>
            ))}
            {decode ? (
          <a href="/profile" className="w-full ml-10 ">
            {decode.profileImg ? (
              <img
                src={decode.profileImg}
                alt="Profile"
                className="object-cover w-12 h-12 rounded-full shadow-md"
              />
            ) : (
              <motion.div
                className="flex items-center justify-center w-12 h-12 text-xl font-bold text-gray-700 uppercase rounded-full bg-[#E6C354]"
                whileHover={{ scale: 1.1 }}
              >
                {decode.username?.slice(0, 2) || ""}
                {console.log("profile image", decode.profileImg)}
              </motion.div>
            )}
          </a>
        ) : (
          <motion.a
            href="/login"
            className="relative text-sm font-semibold max-w-[110px] bg-gradient-to-r from-yellow-500 to-yellow-500 text-white flex items-center justify-center px-5 py-2 rounded-lg overflow-hidden group shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-yellow-500/50 ml-10"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            login
          </motion.a>
        )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
