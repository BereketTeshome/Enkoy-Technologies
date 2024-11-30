import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const navigate = useNavigate();
  const cookie = new Cookies();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setBtnLoading(true);
      const res = await axios.post("http://localhost:3000/api/user/register", {
        username: name,
        email,
        password,
      });
      cookie.set("user", res.data.token);
      setBtnLoading(false);
      navigate("/");
    } catch (error) {
      setBtnLoading(true);
      !name ? setNameErr(true) : setNameErr(false);
      !password ? setPasswordErr(true) : setPasswordErr(false);
      email
        ? setEmailErr(error.response.data.email)
        : setEmailErr("you must provide email");
      setBtnLoading(false);
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
          Create an <span className="text-[#FFCD57]">Account</span>
        </h2>
        <form
          className="w-full max-w-md flex flex-col gap-4"
          onSubmit={handleRegister}
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {nameErr && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: "10px" }}>
              {" "}
              you must provide name
            </p>
          )}
          <input
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
            {btnLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
