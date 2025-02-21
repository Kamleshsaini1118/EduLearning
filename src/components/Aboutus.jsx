import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaSearch, FaTimes } from "react-icons/fa";

const Aboutus = () => {
  const [searchText, setSearchText] = useState("");

  return (
  <div className="w-full min-h-screen mb-20 md:mb-0 flex flex-col items-center p-4 gap-8">
    {/* First Two Boxes */}
    <div className="flex flex-wrap justify-center gap-10 w-full">
      {/* Image Section */}
      <div className="w-full sm:w-[620px] h-auto flex items-center justify-center">
        <img src="/A.jpg" alt="image" className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <div className="w-full sm:w-[620px] h-auto flex flex-col items-start">
        <span className="flex gap-4">
          <h2 className="text-[#06BBCC] text-lg font-semibold">ABOUT US</h2>
          <div className="flex flex-col gap-2 mt-2">
            <div className="w-11 h-[2px] bg-[#06BBCC]"></div>
            <div className="w-16 h-[3px] bg-[#06BBCC]"></div>
          </div>
        </span>

        <h2 className="text-3xl sm:text-5xl font-semibold pt-2 pb-4">
          Welcome to dfwLEARNING
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Students do not learn much just sitting in classes listening to
          teachers, memorizing prepackaged assignments, and spitting out
          answers. They must talk about what they are learning, write
          reflectively about it, relate it to past experiences, and apply it
          to their daily lives.
          <br />
          <br />
          It’s time to step up to the plate and get passionate about your work
          and commit to making eLearning courses that inspire and motivate.
        </p>

        {/* Points Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full">
          {/* Left Side Points */}
          <div className="flex flex-col gap-2">
            {["Skilled Instructors", "Chat with Teachers", "Weekly Assignments"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaArrowRight size={22} className="text-[#06BBCC]" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* Right Side Points */}
          <div className="flex flex-col gap-2">
            {["Online Courses", "Get Study Materials", "Self-Learning"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaArrowRight size={22} className="text-[#06BBCC]" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Search Box (Visible on md & above) */}
    <div className="hidden md:flex w-full h-[150px] items-center justify-center px-4 -mt-4">
      <div className="flex items-center bg-white py-3 px-3 w-full max-w-[1320px] shadow-xl border rounded-xl">
        {/* Search Icon */}
        <span className="text-[#06BBCC] p-2">
          <FaSearch className="w-6 h-6" />
        </span>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search here..."
          className="flex-1 px-5 py-3 outline-none text-gray-700 bg-transparent"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Cross Icon (Clear Text) */}
        {searchText && (
          <button className="text-[#066068] p-2" onClick={() => setSearchText("")}>
            <FaTimes className="w-6 h-6" />
          </button>
        )}

        {/* Search Button */}
        <button className="text-white bg-[#06BBCC] px-6 py-2 mx-3 border rounded-md">
          Search
        </button>
      </div>
    </div>
  </div>
);


};

export default Aboutus;
