import React from 'react'
import { Link } from "react-router-dom";

const categories = [
    { id: 7, name: "Python", count: 4, desc: "Learn python from best Instructor. Python course from basic to advance." },
    { id: 8, name: "JavaScript", count: 16, desc: "Learn JavaScript from best tutors. Zero to Hero courses." },
    { id: 9, name: "High Level Languages", count: 3, desc: "Learn basics of high-level languages from top teachers." },
    { id: 11, name: "Web Development", count: 1, desc: "Best course for all web developers." },
    { id: 12, name: "MERN Full Stack", count: 1, desc: "Trendy course of 2023." },
    { id: 13, name: "Functional Languages", count: 4, desc: "Learn mathematics with coding." },
    { id: 14, name: "Databases", count: 5, desc: "Build databases for various projects." },
    { id: 15, name: "Frontend Development", count: 8, desc: "Learn to build beautiful UI and UX designs." },
    { id: 16, name: "Backend Development", count: 4, desc: "Learn to build complex apps for today's world needs." },
    { id: 17, name: "VCET SEM 4", count: 9, desc: "Apna banda/bandi ka liya ha... -MEET007" },
  ];
  

const Category = () => {
  return (
    <div className='"w-full px-4 py-10'>
      {/* 🔹 First Section */}
      <div className="text-center my-16 md:my-10 space-y-4">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-end">
            <div className="w-10 h-[1px] my-2 bg-[#06BBCC] self-end"></div>
            <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
          <h2 className="text-[#06BBCC] text-base font-semibold">CATEGORIES</h2>
          <div className="flex-col">
            <div className="w-10 h-[1px] my-2 bg-[#06BBCC]"></div>
            <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
        </div>

        <h2 className="text-4xl font-semibold text-gray-800">Our Categories</h2>       
      </div>

      {/* second section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mx-4 md:mx-20">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <h5 className="text-xl font-semibold text-[#06BBCC]">
              <Link to={`/course/${category.id}/${category.name.toLowerCase().replace(/ /g, "-")}`}>
                {category.name} ({category.count})
              </Link>
            </h5>
            <p className="text-gray-600 text-sm mt-2">{category.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
