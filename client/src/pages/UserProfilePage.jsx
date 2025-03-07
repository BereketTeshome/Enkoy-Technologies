import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, Select, MenuItem } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { motion } from "framer-motion";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ProfileImgUpload from "../components/ProfileImgUpload";

import { setTheme } from "../store/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/LanguageSlice";

const UserProfilePage = () => {
  const language = useSelector((state) => state.language.language);
  const theme = useSelector((state) => state.theme.theme); // Get the theme from Redux

  const [profileImg, setProfileImg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const cookie = new Cookies();
  const token = cookie.get("user");
  const decode = token ? jwtDecode(token) : "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme)); // Dispatch the theme change to Redux
    localStorage.setItem("theme", newTheme); // Save the theme to localStorage
  };

  // Set the saved theme and language on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }

    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      dispatch(changeLanguage(savedLanguage));
    }
  }, [dispatch]);

  // Handle language change
  const handleLanguageChange = (newLanguage) => {
    dispatch(changeLanguage(newLanguage)); // Dispatch language change to Redux
    localStorage.setItem("language", newLanguage); // Save the language to localStorage
  };

  const handleLogout = () => {
    cookie.remove("user");
    navigate("/");
    window.location.reload();
  };
  console.log(decode);
  const handleProfileChange = async () => {
    try {
      const { data } = await axios.put(
        `https://server.enkoytechnologies.com/api/user/users/${decode.userId}`,
        {
          username: decode.username,
          email: decode.email,
          profileImg: profileImg ? profileImg : decode.profileImg,
        }
      );

      cookie.set("user", data.token, { path: "/", httpOnly: false });
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex items-center justify-center min-h-screen p-5 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
      }`} // Dynamically set background color based on the theme
    >
      {showPopup && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="w-11/12 max-w-md p-6 text-center bg-white rounded-lg shadow-lg">
            <div className="pb-5">
              <label
                htmlFor="profileImg"
                className="mb-3 text-sm text-gray-500"
              >
                Profile Image
              </label>
              <ProfileImgUpload setProfileImg={setProfileImg} />
            </div>
            <div className="flex items-center justify-center space-x-4">
              <button
                className="px-6 py-2 bg-[#FFCD57] text-gray-800 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300"
                onClick={handleProfileChange}
              >
                Change Profile
              </button>
              <button
                className="px-6 py-2 text-gray-800 transition-all duration-300 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400"
                onClick={closePopup}
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-md p-3 bg-white rounded-lg shadow-md dark:bg-gray-900`}
      >
        {/* User Info Section */}
        <div className="flex items-center gap-4 mb-6">
          {decode.profileImg ? (
            <img
              src={decode.profileImg}
              alt="Profile"
              className="object-cover w-20 h-20 rounded-full shadow-md"
            />
          ) : (
            <motion.div
              className="flex items-center justify-center w-20 h-20 text-3xl font-bold text-gray-800 uppercase rounded-full bg-cyan-500"
              whileHover={{ scale: 1.1 }}
            >
              {decode.username?.slice(0, 2) || ""}
            </motion.div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {decode.username}
              </h1>
              <IconButton onClick={toggleTheme} sx={{ color: "#fff" }}>
                {theme === "dark" ? <LightMode /> : <DarkMode />}
              </IconButton>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
            {decode.email.length > 20 ? `${decode.email.slice(0, 20)}...` : decode.email}
          </p>

          </div>
        </div>

        {/* Language Preference */}
        <div className="mb-4">
          <h2 className="mb-3 text-base font-medium text-gray-700 dark:text-gray-300">
            Language Preference
          </h2>
          <motion.div
            className="flex items-center justify-between p-3 border rounded-md shadow-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Selected Language:
              </span>
              <span className="text-sm font-medium text-gray-800 dark:text-white">
                {language}
              </span>
            </div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Select
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="text-white bg-white rounded shadow dark:bg-gray-700"
                sx={{
                  ".MuiSelect-select": {
                    padding: "6px 16px",
                    color: "#fff"
                  },
                  ".MuiMenuItem-root": {
                    display: "flex",
                    gap: "8px",
                    alignItems: "center",
                    color: "#fff"
                  },
                }}
              >
                <MenuItem value="eng" sx={{color: "#444"}}>English</MenuItem>
                <MenuItem value="amh" sx={{color: "#444"}}>Amharic</MenuItem>
              </Select>
            </motion.div>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full py-2 font-bold text-center text-white transition bg-blue-500 rounded-lg hover:bg-blue-600"
            onClick={() => setShowPopup(true)}
          >
            Edit Profile
          </motion.button>
          <Link
            to="/manage-blogs"
            className="block w-full py-2 font-bold text-center text-white transition bg-teal-500 rounded-lg hover:bg-teal-600"
          >
            Manage Blogs
          </Link>
          <Link
            to="/manage-ebooks"
            className="block w-full py-2 font-bold text-center text-white transition bg-green-500 rounded-lg hover:bg-green-600"
          >
            Manage Ebooks
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="w-full py-2 font-bold text-center text-white transition bg-red-500 rounded-lg hover:bg-red-600"
          >
            Logout
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserProfilePage;
