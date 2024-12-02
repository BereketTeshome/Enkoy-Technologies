import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [btnLoading, setBtnLoading] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const navigate = useNavigate();
  const cookie = new Cookies();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setBtnLoading(true);

      const res = await axios.post("https://server.enkoytechnologies.com/api/user/login", {
        email,
        password,
      });

      // Save the token in cookies
      cookie.set("user", res.data.token, { path: "/", httpOnly: false });
      setBtnLoading(false);
      navigate("/"); // Navigate to home page
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      setBtnLoading(false);

      if (error.response) {
        // Set errors based on server responses
        setEmailErr(error.response.data.email || "");
        setPasswordErr(error.response.data.password || "");
      } else {
        // Handle network or unexpected errors
        setEmailErr("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left side with the image */}
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <img
          src="/img/corporate-training/decentWorkImg.webp"
          alt="Registration Visual"
          className="max-w-[90%] max-h-[80%] object-contain"
        />
      </div>

      {/* Right side with the form */}
      <div className="flex-1 flex flex-col justify-center items-center px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          <span className="text-[#FFCD57]">Welcome</span> Back
        </h2>
        <form
          className="w-full max-w-md flex flex-col gap-4"
          onSubmit={(e) => handleRegister(e)}
        >
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {emailErr && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>
              {emailErr}{" "}
            </p>
          )}
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {passwordErr && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>
              {" "}
              you must provide password
            </p>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-[#FFCD57] text-white rounded-lg hover:bg-[#ffcd57bf] transition duration-300"
          >
            {btnLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
