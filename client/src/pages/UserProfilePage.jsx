import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

const UserProfilePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const cookie = new Cookies();
  const token = cookie.get("user");
  const decode = token ? jwtDecode(token) : "";

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profileImg: "https://via.placeholder.com/150",
  };

  const handleLogout = () => {
    // Add logout functionality
    console.log("Logout clicked");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-5">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 max-w-md w-full">
        {/* User Info Section */}
        <div className="flex items-center gap-4 mb-6">
          {decode.profileImg ? (
            <img
              src={user.profileImg}
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
          <Link
            to="/edit-profile"
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
          >
            Edit Profile
          </Link>
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
