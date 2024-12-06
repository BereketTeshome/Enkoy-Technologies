import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailErr, setEmailErr] = useState("");
	const [btnLoading, setBtnLoading] = useState(false);
	const [passwordErr, setPasswordErr] = useState(false);
	const navigate = useNavigate();
	const cookie = new Cookies();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			setBtnLoading(true);

			const res = await axios.post(
				"https://server.enkoytechnologies.com/api/user/login",
				{
					email,
					password,
				}
			);

      // Save the token in cookies
      cookie.set("user", res.data.token, { path: "/", httpOnly: false });
      setBtnLoading(false);
      navigate("/");
      window.location.reload();
      // Navigate to home page
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


  const handleGoogleLogin = () => {
    // Redirect to your backend's Google OAuth endpoint
    // window.location.href = "http://localhost:3000/auth/google";
    window.location.href = "https://server.enkoytechnologies.com/auth/google";
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
					<span className="text-[#FFCD57]">Welcome</span> Back
				</h2>
				<form
					className="flex flex-col w-full max-w-md gap-4"
					onSubmit={(e) => handleLogin(e)}
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
							{emailErr}
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
							You must provide password
						</p>
					)}
					<button
						type="submit"
						className="w-full p-3 bg-[#FFCD57] text-white rounded-lg hover:bg-[#ffcd57bf] transition duration-300"
					>
						{btnLoading ? "Loading..." : "Login"}
					</button>
				</form>

				{/* Divider */}
				<div className="flex items-center justify-center w-full my-4">
					<span className="block w-1/5 h-px bg-gray-300"></span>
					<p className="mx-2 text-sm text-gray-500">or</p>
					<span className="block w-1/5 h-px bg-gray-300"></span>
				</div>

				{/* Google Login Button */}
				<button
					onClick={handleGoogleLogin}
					className="flex items-center justify-center w-full p-3 transition duration-300 bg-white border border-gray-300 rounded-lg hover:shadow-md"
				>
					<FcGoogle size={24} className="mr-2" />
					<span className="font-medium text-gray-700">Sign in with Google</span>
				</button>

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
