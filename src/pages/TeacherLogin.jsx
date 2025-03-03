import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

const TeacherSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    console.log("Email:", email, "Password:", password);
    try {
      const response = await axios.post("https://lms-d0g5.onrender.com/api/auth/login", {
        email,
        password,
      });
      console.log("Response:", response.data);
      toast.success("Login successful!");
    } catch (error) {
      console.error("Sign-in failed:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-[85%] md:w-full max-w-lg bg-white shadow-2xl  p-10">
        <h5 className="text-center text-lg font-semibold text-gray-800 mb-4">
          TEACHER SIGN IN
        </h5>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-10">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-3">
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full"
            onClick={handleSignIn}
          >
            SIGN IN
          </button>

          <div className="w-full flex items-center">
            <div className="flex-grow h-[1px] bg-gray-400"></div>
            <span className="mx-2 text-gray-600 text-sm">or</span>
            <div className="flex-grow h-[1px] bg-gray-400"></div>
          </div>

          <Link
            to="/teacher-register"
            className="w-full bg-red-500 hover:bg-red-600 text-white text-center font-semibold py-2 rounded-full"
          >
            SIGN UP
          </Link>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default TeacherSignIn;
