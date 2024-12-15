import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendingEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`http://localhost:3000/api/user/forgot-password`, {
        email: email,
        isAdmin: false,
      });
      setLoading(false);
      setMessage("success!! check your email.");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setLoading(false);
      if (error.message === "Request failed with status code 404") {
        setMessage("you have entered unknown email address!!");
      } else {
        setMessage("sorry try again");
      }
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
          <span className="text-[#FFCD57]">Forgot</span> Password
        </h2>
        <form
          className="flex flex-col w-full max-w-md gap-4"
          onSubmit={(e) => handleSendingEmail(e)}
        >
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {message && (
            <p className="text-xs text-blue-600 mt-3 text-center">{message}</p>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-[#FFCD57] text-white rounded-lg hover:bg-[#ffcd57bf] transition duration-300"
          >
            {loading ? "Sending..." : "send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
