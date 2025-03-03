import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeacherRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    qualification: "",
    mobileNo: "",
    skills: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("https://lms-d0g5.onrender.com/api/auth/register", formData);
      console.log("Response:", response.data);
      toast.success("Registration Successful!", { position: "top-right" });

      setTimeout(() => {
        navigate("/teacher-login");
      }, 2000); 
    } catch (error) {
      console.error("Sign-up failed:", error);
      toast.error("Registration failed. Please try again.", { position: "top-right" });
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[85%] md:w-full max-w-lg bg-white shadow-2xl p-10 my-32">
        <h5 className="text-center text-lg font-semibold text-gray-800 mb-4">
          TEACHER SIGN UP
        </h5>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

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
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">
            Qualification
          </label>
          <input
            type="text"
            id="qualification"
            name="qualification"
            placeholder="Enter Your Qualification"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.qualification}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
            Mobile No
          </label>
          <input
            type="number"
            id="mobileNo"
            name="mobileNo"
            placeholder="Enter Your Mobile No"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.mobileNo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
            Skills
          </label>
          <textarea
            id="skills"
            name="skills"
            placeholder="Enter Your Skills"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        <div className="text-gray-600 mb-4">
          Eg: Python, Java, C, C++, Web Development etc...
        </div>

        <div className="flex flex-col space-y-3">
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full"
            onClick={handleSignUp}
          >
            SIGN UP
          </button>

          <div className="w-full flex items-center">
            <div className="flex-grow h-[1px] bg-gray-400"></div>
            <span className="mx-2 text-gray-600 text-sm">or</span>
            <div className="flex-grow h-[1px] bg-gray-400"></div>
          </div>

          <Link
            to="/teacher-login"
            className="w-full bg-red-500 hover:bg-red-600 text-white text-center font-semibold py-2 rounded-full"
          >
            SIGN IN
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TeacherRegister;
