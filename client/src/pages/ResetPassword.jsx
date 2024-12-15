import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { id, token } = useParams();
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        `https://server.enkoytechnologies.com/api/user/reset-password/${id}/${token}`,
        {
          password: password,
        }
      );
      setLoading(false);
      setMessage("Success!! Password has been reset.");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setMessage("Sorry, try again.");
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left side with the image */}
      <div className="items-center justify-center flex-1 hidden bg-gray-100 md:flex">
        <img
          src="/img/corporate-training/decentWorkImg.webp"
          alt="Login Visual"
          className="max-w-[90%] max-h-[80%] object-contain"
        />
      </div>

      {/* Right side with the form */}
      <div className="flex flex-col items-center justify-center flex-1 px-8">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          <span className="text-[#FFCD57]">Reset</span> Password
        </h2>
        <form
          className="flex flex-col w-full max-w-md gap-4"
          onSubmit={(e) => !loading && handleResetPassword(e)}
        >
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="New Password..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm New Password..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {message && (
            <p className="text-xs text-blue-600 mt-3 text-center">{message}</p>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-[#FFCD57] text-white rounded-lg hover:bg-[#ffcd57bf] transition duration-300"
          >
            {loading ? "Resetting..." : "Reset"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
