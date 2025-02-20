import React from 'react'
import { FaGlobe } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoBook } from "react-icons/io5";
import { FaHatWizard } from "react-icons/fa";

const Detail = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 mt-40 mb-10">
     <div className="w-[310px] h-[350px] flex flex-col justify-center items-center px-4 bg-[#F0FBFC] 
      transition-all duration-500 ease-in-out hover:bg-[#06BBCC] hover:-translate-y-3 hover:scale-102 shadow-lg group">
      
      <FaHatWizard size={50} className="text-[#06BBCC] transition-all duration-500 ease-in-out group-hover:text-white -mt-4" />

      <h2 className="text-xl p-2 font-semibold transition-all duration-500 group-hover:text-white">
        Skilled Instructors
      </h2>
      <p className="text-center p-2 text-gray-700 transition-all duration-500 group-hover:text-white">
        Our Instructors Says: <br />
        If you are planning for a year, sow rice; if you are planning for a decade, plant trees; 
        if you are planning for a lifetime, educate people.
      </p>
    </div>

      <div className="w-[310px] h-[350px] flex flex-col justify-center items-center px-4 bg-[#F0FBFC] transition-all duration-500 ease-in-out hover:bg-[#06BBCC] hover:-translate-y-3 hover:scale-102 shadow-lg group">
        <FaGlobe size={50} className="text-[#06BBCC]  transition-all duration-500 ease-in-out group-hover:text-white" />
        <h2 className="text-xl p-2 font-semibold transition-all duration-500 group-hover:text-white">Onlines Courses</h2>
        <p className="text-center p-2 text-gray-700 transition-all duration-500 group-hover:text-white">
          The most profound words will remain unread unless you can keep the
          learner engaged. You can't see their eyes to know if they got it so …
          say it, show it, write it, demo it and link it to an activity.
        </p>
      </div>

      <div className="w-[310px] h-[350px] flex flex-col justify-center items-center px-4 bg-[#F0FBFC] transition-all duration-500 ease-in-out hover:bg-[#06BBCC] hover:-translate-y-3 hover:scale-102 shadow-lg group">
        <FaHome size={50} className="text-[#06BBCC]  transition-all duration-500 ease-in-out group-hover:text-white" />
        <h2 className="text-xl p-2 font-semibold transition-all duration-500 group-hover:text-white">Home Assignments</h2>
        <p className="text-center p-2 text-gray-700 transition-all duration-500 group-hover:text-white">
        To Prepare all our students for future. Instructors provides best quality Assignments for practice. Assignments which include all chapters Question for better understand of the entire Course.
        </p>
      </div>

      <div className="w-[310px] h-[350px] flex flex-col justify-center items-center px-4 bg-[#F0FBFC] transition-all duration-500 ease-in-out hover:bg-[#06BBCC] hover:-translate-y-3 hover:scale-102 shadow-lg group">
        <IoBook size={50} className="text-[#06BBCC]  transition-all duration-500 ease-in-out group-hover:text-white" />
        <h2 className="text-xl p-2 font-semibold transition-all duration-500 group-hover:text-white">Best Study Material</h2>
        <p className="text-center p-2 text-gray-700 transition-all duration-500 group-hover:text-white">
        With our quality study material any can achieve their goal and with the top instructors nothing can stop you. At the Time of Exam any student can refer the study material and ace any exam or interview.
        </p>
      </div>
    </div>
  );
}

export default Detail
