import React from "react";
import { Link } from "react-router-dom";

const TeacherRegister = () => {
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="w-[85%] md:w-full max-w-lg bg-white shadow-2xl p-10 my-32">
        {/* Title */}
        <h5 className="text-center text-lg font-semibold text-gray-800 mb-4">
          TEACHER SIGN UP
        </h5>

        {/* Full Name Input */}
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Full Name"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Qualifications Input */}
        <div className="mb-4">
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700"
          >
            Qualification
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            placeholder="Enter Your Qualification"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Mobile number Input */}
        <div className="mb-4">
          <label
            htmlFor="mobile number"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile No
          </label>
          <input
            type="number"
            id="mobile-no"
            name="mobile-no"
            placeholder="Enter Your Mobile No"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Skills Input */}
        <div >
          <label
            htmlFor="skills"
            className="block text-sm font-medium text-gray-700"
          >
            Skills
          </label>
          <textarea
            type="text"
            id="skills"
            name="skills"
            placeholder="Enter Your Skills"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="text-gray-600 mb-4">
        Eg: Python, Java, C, C++, Web Development etc...
        </div>

        {/* Sign In & Sign Up Buttons */}
        <div className="flex flex-col space-y-3">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full">
            SIGN UP
          </button>

          {/* Divider Line */}
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
    </div>
  );
};

export default TeacherRegister;
