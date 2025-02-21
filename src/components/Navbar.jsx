// import React, { useState } from "react";
// import { IoBookOutline } from "react-icons/io5";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   return (
//     <nav className="bg-blue-white text-black shadow-md">
//       <div className="container mx-auto flex justify-between items-center py-4 px-8 font-semibold">
//         {/* Logo & Brand */}
//         <div className="flex items-center space-x-3 ml-5">
//           <IoBookOutline size={30} className="mt-1 text-[#06BBCC]" />
//           <Link
//             className="text-3xl font-bold text-[#06BBCC] hover:text-[#297d7e]"
//             to="/"
//           >
//             DFW Learning
//           </Link>
//         </div>

//         {/* Menu */}
//         <div className="hidden md:flex space-x-8 items-center">
//           <Link to="/" className="hover:text-[#06BBCC]">
//             HOME
//           </Link>
//           <Link to="category" className="hover:text-[#06BBCC]">
//             CATEGORY
//           </Link>
//           <Link to="#" className="hover:text-[#06BBCC]">
//             COURSE
//           </Link>

//           {/* TEACHER DROPDOWN */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setOpenDropdown("teacher")}
//             onMouseLeave={() => setOpenDropdown(null)}
//           >
//             <button className="hover:text-[#06BBCC]">
//               <span className="flex">
//                 TEACHER
//                 <MdKeyboardArrowDown size={22} />
//               </span>
//             </button>
//             <div
//               className={`absolute left-0 bg-white text-black shadow-xl mt-1 w-40 
//           transform transition-all duration-300 origin-top z-20
//           ${
//             openDropdown === "teacher"
//               ? "scale-y-100 opacity-100"
//               : "scale-y-0 opacity-0"
//           }`}
//             >
//               <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
//                 Login
//               </Link>
//               <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
//                 Register
//               </Link>
//             </div>
//           </div>

//           {/* Student Dropdown */}
//           <div
//             className="relative group"
//             onMouseEnter={() => setOpenDropdown("student")}
//             onMouseLeave={() => setOpenDropdown(null)}
//           >
//             <button className="hover:text-[#06BBCC]">
//               <span className="flex">
//                 STUDENT
//                 <MdKeyboardArrowDown size={22} />
//               </span>
//             </button>
//             <div
//               className={`absolute left-0 bg-white text-black shadow-xl mt-1 w-40 
//           transform transition-all duration-300 origin-top z-20
//           ${
//             openDropdown === "student"
//               ? "scale-y-100 opacity-100"
//               : "scale-y-0 opacity-0"
//           }`}
//             >
//               <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
//                 Login
//               </Link>
//               <Link to="#" className="block px-4 py-2 hover:bg-gray-100">
//                 Register
//               </Link>
//             </div>
//           </div>

//           <Link to="#" className="hover:text-[#06BBCC]">
//             ADMIN
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden text-white focus:outline-none">☰</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { IoBookOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <nav className="bg-white text-black shadow-xl fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <IoBookOutline size={30} className="text-[#06BBCC]" />
          <Link className="text-2xl font-bold text-[#06BBCC] hover:text-[#297d7e]" to="/">
            DFW Learning
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-[#06BBCC]">HOME</Link>
          <Link to="/category" className="hover:text-[#06BBCC]">CATEGORY</Link>
          <Link to="/all-course" className="hover:text-[#06BBCC]">COURSE</Link>

          {/* TEACHER DROPDOWN */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown("teacher")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-[#06BBCC] flex items-center">
              TEACHER <MdKeyboardArrowDown size={22} />
            </button>
            <div
              className={`absolute left-0 bg-white text-black shadow-lg  w-40 rounded-md overflow-hidden transition-all duration-300 z-20
                ${openDropdown === "teacher" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              <Link to="/teacher-login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
              <Link to="/teacher-register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
            </div>
          </div>

          {/* STUDENT DROPDOWN */}
          <div
            className="relative group"
            onMouseEnter={() => setOpenDropdown("student")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="hover:text-[#06BBCC] flex items-center">
              STUDENT <MdKeyboardArrowDown size={22} />
            </button>
            <div
              className={`absolute left-0 bg-white text-black shadow-lg  w-40 rounded-md overflow-hidden transition-all duration-300 z-20
                ${openDropdown === "student" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
              <Link to="/student-login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
              <Link to="student-register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
            </div>
          </div>

          <Link to="/admin" className="hover:text-[#06BBCC]">ADMIN</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-black focus:outline-none border-[1px] border-gray-300 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col space-y-4">
          {/* Logo and Close Button in Mobile Menu */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <IoBookOutline size={30} className="text-[#06BBCC]" />
              <Link className="text-2xl font-bold text-[#06BBCC]" onClick={() => setMenuOpen(false)} to="/">
                DFW Learning
              </Link>
            </div>
            <button onClick={() => setMenuOpen(false)}>
              <FiX size={30} className="text-black" />
            </button>
          </div>

          <Link to="/" className="hover:text-[#06BBCC]" onClick={() => setMenuOpen(false)}>HOME</Link>
          <Link to="/category" className="hover:text-[#06BBCC]" onClick={() => setMenuOpen(false)}>CATEGORY</Link>
          <Link to="/all-course" className="hover:text-[#06BBCC]" onClick={() => setMenuOpen(false)}>COURSE</Link>

          {/* TEACHER DROPDOWN MOBILE */}
          <button className="hover:text-[#06BBCC] flex items-center" onClick={() => setMobileDropdown(mobileDropdown === "teacher" ? null : "teacher")}>
            TEACHER <MdKeyboardArrowDown size={22} />
          </button>
          {mobileDropdown === "teacher" && (
            <div className="pl-4 space-y-2">
              <Link to="/teacher-login" className="block hover:text-[#06BBCC]">Login</Link>
              <Link to="/teacher-register" className="block hover:text-[#06BBCC]">Register</Link>
            </div>
          )}

          {/* STUDENT DROPDOWN MOBILE */}
          <button className="hover:text-[#06BBCC] flex items-center" onClick={() => setMobileDropdown(mobileDropdown === "student" ? null : "student")}>
            STUDENT <MdKeyboardArrowDown size={22} />
          </button>
          {mobileDropdown === "student" && (
            <div className="pl-4 space-y-2">
              <Link to="/student-login" className="block hover:text-[#06BBCC]">Login</Link>
              <Link to="/student-register" className="block hover:text-[#06BBCC]">Register</Link>
            </div>
          )}

          <Link to="#" className="hover:text-[#06BBCC]" onClick={() => setMenuOpen(false)}>ADMIN</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

