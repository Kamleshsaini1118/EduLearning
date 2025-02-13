import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="bg-blue-white text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-8 font-semibold">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3 ml-5">
          <IoBookOutline size={30} className="mt-1 text-[#06BBCC]" />
          <a
            className="text-3xl font-bold text-[#06BBCC] hover:text-[#297d7e]"
            href="#"
          >
            Dlf Learning
          </a>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="hover:text-[#06BBCC]">
            HOME
          </a>
          <a href="#" className="hover:text-[#06BBCC]">
            CATEGORY
          </a>
          <a href="#" className="hover:text-[#06BBCC]">
            COURSE
          </a>

          {/* TEACHER DROPDOWN */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown("teacher")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-[#06BBCC]">
              <span className="flex">
                TEACHER
                <MdKeyboardArrowDown size={22} />
              </span>
            </button>
            <div
              className={`absolute left-0 bg-white text-black shadow-xl mt-1 w-40 
          transform transition-all duration-300 origin-top z-20
          ${
            openDropdown === "teacher"
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0"
          }`}
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Login
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Register
              </a>
            </div>
          </div>

          {/* Student Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown("student")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-[#06BBCC]">
              <span className="flex">
                STUDENT
                <MdKeyboardArrowDown size={22} />
              </span>
            </button>
            <div
              className={`absolute left-0 bg-white text-black shadow-xl mt-1 w-40 
          transform transition-all duration-300 origin-top z-20
          ${
            openDropdown === "student"
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0"
          }`}
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Login
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Register
              </a>
            </div>
          </div>

          <a href="#" className="hover:text-[#06BBCC]">
            ADMIN
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
