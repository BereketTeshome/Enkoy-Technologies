import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ProfileImgUpload from "../components/ProfileImgUpload";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../store/ThemeSlice";

const UserProfilePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const cookie = new Cookies();
  const token = cookie.get("user");
  const decode = token ? jwtDecode(token) : "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    dispatch(setTheme(darkMode ? "light" : "dark"));
  };

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profileImg: "https://via.placeholder.com/150",
  };

  const handleLogout = () => {
    cookie.remove("user");
    navigate("/");
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleProfileChange = async () => {
    try {
      const { data } = await axios.put(
        `http://localhost:3000/api/user/users/${decode.userId}`,
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

  const theme = useSelector((state) => state.theme?.theme);

  console.log(theme);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-5">
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
                onClick={() => handleProfileChange()}
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
        </div>
      )}
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 max-w-md w-full">
        {/* User Info Section */}
        <div className="flex items-center gap-4 mb-6">
          {decode.profileImg ? (
            <img
              src={decode.profileImg}
              alt="Profile"
              className="w-24 h-24 object-cover rounded-full shadow-md border"
            />
          ) : (
            <div className="w-24 h-24 bg-cyan-500 flex items-center justify-center rounded-full text-3xl font-bold text-gray-800 uppercase">
              {decode.username?.slice(0, 2) || ""}
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {decode.username}
              </h1>
              <IconButton
                onClick={toggleTheme}
                className="text-white"
                sx={{ color: "#fff" }}
              >
                {darkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{decode.email}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
            onClick={() => setShowPopup(true)}
          >
            Edit Profile
          </button>
          <Link
            to="/manage-blogs"
            className="block w-full text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 rounded-lg transition"
          >
            Manage Blogs
          </Link>
          <Link
            to="/manage-ebooks"
            className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition"
          >
            Manage Ebooks
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
