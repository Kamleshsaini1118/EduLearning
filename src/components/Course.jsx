// import React from "react";

// const Course = () => {
//   return (
//     <div className="w-full px-4 py-10 -mt-[85px]">
//       {/* First Section */}
// <div className="text-center mb-10">
//   {/* Latest Courses Section */}
//   <div className="flex items-center justify-center gap-4 mb-4">
//     <div className="flex flex-col items-end">
//       <div className="w-10 h-[1px] my-2 bg-[#06BBCC] self-end"></div>
//       <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
//     </div>
//     <h2 className="text-[#06BBCC] text-base font-semibold">COURSES</h2>
//     <div className="flex-col">
//       <div className="w-10 h-[1px] my-2 bg-[#06BBCC]"></div>
//       <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
//     </div>
//   </div>

//   <h2 className="text-4xl font-medium text-gray-800">Latest Courses</h2>

//   <a
//     href="#"
//     className="inline-block mt-16 px-5 py-2 bg-[#06BBCC] text-white rounded-md
//       transition duration-300 ease-in-out hover:bg-[#52c9d3]"
//   >
//     View More
//   </a>

//   {/* Popular Courses Section */}
//   <div className="flex items-center justify-center gap-4 mt-10 mb-2">
//     <div className="flex flex-col items-end">
//       <div className="w-10 h-[1px] my-2 bg-[#06BBCC] self-end"></div>
//       <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
//     </div>
//     <h2 className="text-[#06BBCC] text-base font-semibold">COURSES</h2>
//     <div className="flex-col">
//       <div className="w-10 h-[1px] my-2 bg-[#06BBCC]"></div>
//       <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
//     </div>
//   </div>

//   <h2 className="text-4xl font-medium text-gray-800">Popular Courses</h2>
// </div>

//       {/* Second Section */}
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {/* Course Card 1 */}
//           <div className="p-6 border shadow-lg text-center bg-[#F0FBFC]">
//             <a href="#" className="text-xl font-semibold text-[#06BBCC] hover:text-[#2a747b] cursor-pointer">
//               Web Development
//             </a>
//           </div>

//           {/* Course Card 2 */}
//           <div className="p-6 border shadow-lg text-center bg-[#F0FBFC]">
//             <a
//             href="#"
//             className="text-xl font-semibold text-[#06BBCC] hover:text-[#2a747b] cursor-pointer">
//               Data Science
//             </a>
//           </div>

//           {/* Course Card 3 */}
//           <div className="p-6 border shadow-lg text-center bg-[#F0FBFC]">
//             <a href="#" className="text-xl font-semibold text-[#06BBCC] hover:text-[#2a747b] cursor-pointer">
//               Graphic Design
//             </a>
//           </div>
//         </div>

//         {/* Centered Button */}
//         <div className="text-center">
//         <a
//           href="#"
//           className="inline-block mt-16 px-5 py-2 bg-[#06BBCC] text-white rounded-md
//             transition duration-300 ease-in-out hover:bg-[#52c9d3]"
//         >
//           View More
//         </a>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Course;
import React, { useState } from "react";
import { FaUserTie, FaEye } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Reactjs Full Course",
    instructor: "Mrs Jake Weary",
    rating: 5,
    views: 88,
    image: "https://minipro.pythonanywhere.com/media/course_imgs/React.jpeg",
  },
  {
    id: 2,
    title: "Django Rest Framework Course",
    instructor: "Dr Zhang San",
    rating: 5,
    views: 94,
    image: "https://minipro.pythonanywhere.com/media/course_imgs/drf.png",
  },
  {
    id: 3,
    title: "TypeScript Full Course",
    instructor: "Dr John Doe",
    rating: 5,
    views: 28,
    image:
      "https://minipro.pythonanywhere.com/media/course_imgs/Typescript.png",
  },
];

const Course = () => {
  const [visibleCourses, setVisibleCourses] = useState(3);

  // return (
  //   <div className="w-full px-4 py-10 -mt-[85px]">
  //     {/* 🔹 First Section */}
  //     <div className="text-center mb-10">
  //       <div className="flex items-center justify-center gap-4 mb-4">
  //         <div className="flex flex-col items-end">
  //           <div className="w-10 h-[1px] my-2 bg-[#06BBCC] self-end"></div>
  //           <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
  //         </div>
  //         <h2 className="text-[#06BBCC] text-base font-semibold">COURSES</h2>
  //         <div className="flex-col">
  //           <div className="w-10 h-[1px] my-2 bg-[#06BBCC]"></div>
  //           <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
  //         </div>
  //       </div>

  //       <h2 className="text-4xl font-medium text-gray-800">Latest Courses</h2>

  //       <a
  //         href="#"
  //         className="inline-block mt-16 px-5 py-2 bg-[#06BBCC] text-white rounded-md 
  //           transition duration-300 ease-in-out hover:bg-[#52c9d3]"
  //       >
  //         View More
  //       </a>

  //       <div className="flex items-center justify-center gap-4 mt-10 mb-2">
  //         <div className="flex flex-col items-end">
  //           <div className="w-10 h-[1px] my-2 bg-[#06BBCC] self-end"></div>
  //           <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
  //         </div>
  //         <h2 className="text-[#06BBCC] text-base font-semibold">COURSES</h2>
  //         <div className="flex-col">
  //           <div className="w-10 h-[1px] my-2 bg-[#06BBCC]"></div>
  //           <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
  //         </div>
  //       </div>

  //       <h2 className="text-4xl font-medium text-gray-800">Popular Courses</h2>
  //     </div>

  //     {/* 🔹 Second Section */}
  //     <div className="max-w-[1250px] mx-auto">
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //         {courses.slice(0, visibleCourses).map((course) => (
  //           <div
  //             key={course.id}
  //             className="shadow-lg bg-[#F0FBFC] overflow-hidden transition hover:shadow-2xl group"
  //           >
  //             <div className="overflow-hidden">
  //               <img
  //                 src={course.image}
  //                 alt={course.title}
  //                 className="w-full h-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
  //               />
  //             </div>
  //             <div className="p-6 text-center">
  //               <h5 className="text-xl font-semibold text-[#06BBCC]">
  //                 <a href="#" className="hover:text-[#2a747b]">
  //                   {course.title}
  //                 </a>
  //               </h5>
  //             </div>
  //             <div className="p-4 border-t text-sm text-gray-600 flex justify-between items-center">
  //               <span className="flex items-center gap-2 font-semibold">
  //                 <FaUserTie className="text-[#06BBCC]" /> {course.instructor}
  //               </span>
  //               <span className="flex items-center gap-1">
  //                 {Array.from({ length: course.rating }).map((_, i) => (
  //                   <BsStarFill key={i} className="text-yellow-500 text-xs" />
  //                 ))}
  //               </span>
  //               <span className="flex items-center gap-2 font-semibold">
  //                 <FaEye className="text-[#06BBCC]" /> {course.views}
  //               </span>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* 🔹 Load More Button */}
  //       <div className="text-center mt-10">
  //         <button
  //           className="inline-block px-6 py-2 bg-[#06BBCC] text-white rounded-md shadow-md 
  //         hover:bg-[#52c9d3] transition duration-300"
  //         >
  //           View More
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="w-full px-2 md:px-4 py-6 md:py-10 -mt-[85px]">
      {/* 🔹 First Section */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
          <div className="flex flex-col items-end">
            <div className="w-6 sm:w-10 h-[1px] my-1 sm:my-2 bg-[#06BBCC] self-end"></div>
            <div className="w-10 sm:w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
          <h2 className="text-[#06BBCC] text-sm sm:text-base font-semibold">COURSES</h2>
          <div className="flex flex-col">
            <div className="w-6 sm:w-10 h-[1px] my-1 sm:my-2 bg-[#06BBCC]"></div>
            <div className="w-10 sm:w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
        </div>
  
        <h2 className="text-2xl sm:text-4xl font-medium text-gray-800">Latest Courses</h2>
  
        <Link
          to="/all-course"
          className="inline-block mt-8 sm:mt-16 px-4 sm:px-5 py-2 bg-[#06BBCC] text-white rounded-md 
          transition duration-300 ease-in-out hover:bg-[#52c9d3]"
        >
          View More
        </Link>
  
        <div className="flex items-center justify-center gap-2 sm:gap-4 mt-10 mb-2">
          <div className="flex flex-col items-end">
            <div className="w-6 sm:w-10 h-[1px] my-1 sm:my-2 bg-[#06BBCC] self-end"></div>
            <div className="w-10 sm:w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
          <h2 className="text-[#06BBCC] text-sm sm:text-base font-semibold">COURSES</h2>
          <div className="flex flex-col">
            <div className="w-6 sm:w-10 h-[1px] my-1 sm:my-2 bg-[#06BBCC]"></div>
            <div className="w-10 sm:w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
        </div>
  
        <h2 className="text-2xl sm:text-4xl font-medium text-gray-800">Popular Courses</h2>
      </div>
  
      {/* 🔹 Second Section */}
      <div className="max-w-[1250px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.slice(0, visibleCourses).map((course) => (
            <div
              key={course.id}
              className="shadow-lg bg-[#F0FBFC] overflow-hidden transition hover:shadow-2xl group"
            >
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 sm:h-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-4 sm:p-6 text-center">
                <h5 className="text-lg sm:text-xl font-semibold text-[#06BBCC]">
                  <a href="#" className="hover:text-[#2a747b]">
                    {course.title}
                  </a>
                </h5>
              </div>
              <div className="p-3 sm:p-4 border-t text-xs sm:text-sm text-gray-600 flex justify-between items-center">
                <span className="flex items-center gap-1 sm:gap-2 font-semibold">
                  <FaUserTie className="text-[#06BBCC]" /> {course.instructor}
                </span>
                <span className="flex items-center gap-1">
                  {Array.from({ length: course.rating }).map((_, i) => (
                    <BsStarFill key={i} className="text-yellow-500 text-xs" />
                  ))}
                </span>
                <span className="flex items-center gap-1 sm:gap-2 font-semibold">
                  <FaEye className="text-[#06BBCC]" /> {course.views}
                </span>
              </div>
            </div>
          ))}
        </div>
  
        {/* 🔹 Load More Button */}
        <div className="text-center mt-6 sm:mt-10">
          <Link
            to="/popular-courses"
            className="inline-block px-4 sm:px-6 py-2 bg-[#06BBCC] text-white rounded-md shadow-md 
            hover:bg-[#52c9d3] transition duration-300"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
  

};

export default Course;
