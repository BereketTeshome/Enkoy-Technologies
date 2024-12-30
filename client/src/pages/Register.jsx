import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import ProfileImgUpload from "../components/ProfileImgUpload";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { useSelector } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const navigate = useNavigate();
  const cookie = new Cookies();
  const theme = useSelector((state) => state.theme?.theme);
  const isDarkTheme = theme === "dark";

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setBtnLoading(true);

      const res = await axios.post(
        "https://server.enkoytechnologies.com/api/user/register",
        {
          username: name,
          email,
          password,
          profileImg,
        }
      );

      cookie.set("user", res.data.token);
      setBtnLoading(false);
      navigate("/");
      window.location.reload();
    } catch (error) {
      setBtnLoading(true);
      !name ? setNameErr(true) : setNameErr(false);
      !password ? setPasswordErr(true) : setPasswordErr(false);
      email
        ? setEmailErr(error.response.data.email)
        : setEmailErr("You must provide email");
      setBtnLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    // Redirect to your backend's Google OAuth endpoint
    window.location.href = "https://server.enkoytechnologies.com/auth/google";
  };

  return (
    <div
      className={`flex h-screen ${isDarkTheme ? "bg-[#1F2937]" : "bg-gray-50"}`}
    >
      {/* Left side with the image */}
      <div
        className={`items-center justify-center flex-1 hidden ${
          isDarkTheme ? "bg-[#15202e]" : "bg-gray-100"
        } md:flex`}
      >
        <img
          src="/img/register.webp"
          alt="Registration Visual"
          className="max-w-[90%] max-h-[80%] object-contain"
        />
      </div>

      {/* Right side with the form */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 md:px-8">
        <h2
          className={`mb-6 text-3xl font-bold ${
            isDarkTheme ? "text-gray-50" : "text-gray-800"
          }`}
        >
          Create an <span className="text-[#FFCD57]">Account</span>
        </h2>
        <form
          className="flex flex-col w-full max-w-[450px] gap-4"
          onSubmit={handleRegister}
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {nameErr && (
            <p className="text-xs text-red-500">You must provide a name</p>
          )}
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {emailErr && <p className="text-xs text-red-500">{emailErr}</p>}
          <div>
            <label
              htmlFor="profileImg"
              className={`mb-3 text-sm ${
                isDarkTheme ? "text-white" : "text-gray-600"
              }`}
            >
              Profile Image
            </label>
            <ProfileImgUpload setProfileImg={setProfileImg} />
          </div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {passwordErr && (
            <p className="text-xs text-red-500">You must provide a password</p>
          )}
          <button
            type="submit"
            className="w-full p-3 bg-[#FFCD57] text-blue-950 text-lg font-semibold rounded-lg hover:bg-[#ffcd57bf] transition duration-300"
          >
            {btnLoading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center w-full my-4">
          <span className="block w-1/5 h-px bg-gray-300"></span>
          <p className="mx-2 text-sm text-gray-500">or</p>
          <span className="block w-1/5 h-px bg-gray-300"></span>
        </div>

        {/* Google Signup Button */}
        <button
          onClick={handleGoogleSignup}
          className="flex items-center justify-center w-full p-3 transition duration-300 bg-white border border-gray-300 rounded-lg hover:shadow-md max-w-[450px]"
        >
          <FcGoogle size={24} className="mr-2" />
          <span className="font-medium text-gray-700">Sign up with Google</span>
        </button>

        <p className={`mt-4 ${isDarkTheme ? "text-gray-50" : "text-gray-600"}`}>
          Already have an account?{" "}
          <a
            href="/login"
            className={`${
              isDarkTheme ? "text-[#FFCD57]" : "text-blue-600"
            } hover:underline`}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
