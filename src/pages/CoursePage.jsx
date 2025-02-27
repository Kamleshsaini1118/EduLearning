import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Course = () => {
  const courses = [
    {
      id: 17,
      title: "Reactjs Full Course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/React.jpeg",
    },
    {
      id: 18,
      title: "Bootstrap5 Full Course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/Bootstrap.png",
    },
    {
      id: 19,
      title: "Tailwind Css",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/Css.jpg",
    },
    {
      id: 20,
      title: "Html full Course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/HTML-tutorial.jpg",
    },
    {
      id: 21,
      title: "JavaScript-zeroto hero course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/JavaScript.png",
    },
    {
      id: 22,
      title: "Python full Course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/Python.jpg",
    },
    {
      id: 23,
      title: "Java Full Course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/Java.png",
    },
    {
      id: 24,
      title: "Django full course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/Django.png",
    },
    {
      id: 25,
      title: "Django Rest Framework Course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/drf.png",
    },
    {
      id: 26,
      title: "Python Advance Course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/py_NhdR5Dh.jpeg",
    },
    {
      id: 27,
      title: "Node js Course for Beginners",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/nd.jpg",
    },
    {
      id: 28,
      title: "TypeScript Full Course",
      img: "https://minipro.pythonanywhere.com/media/course_imgs/Typescript.png",
    },
  ];

  return (
    <div className='"w-full px-4 md:px-14 py-10'>
      {/* first section */}
      <div className="text-center my-16 md:my-10 space-y-4">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-end">
            <div className="w-10 h-[1px] my-2 bg-[#06BBCC] self-end"></div>
            <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
          <h2 className="text-[#06BBCC] text-base font-semibold">COURSES</h2>
          <div className="flex-col">
            <div className="w-10 h-[1px] my-2 bg-[#06BBCC]"></div>
            <div className="w-16 h-[2px] bg-[#06BBCC]"></div>
          </div>
        </div>

        <h2 className="text-4xl font-semibold text-gray-800">All Courses</h2>
      </div>

      {/* second section */}
      <div className="container mx-auto my-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl group"
            >
              <div className="overflow-hidden">
                <Link to={`/detail/${course.id}`}>
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold">
                  <Link
                    to={`/detail/${course.id}`}
                    className="text-[#06BBCC] hover:text-[#3499a2]"
                  >
                    {course.title}
                  </Link>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* third section */}
      <div className="flex items-center justify-center">
        <button className="text-[#06BBCC] rounded-full px-2 py-1 flex items-center gap-1 border-2 hover:bg-gray-100 hover:text-[#33989f] text-[16px]">
          Next
          <FaArrowRightLong size={15} className="mt-1" />
        </button>
      </div>
    </div>
  );
};

export default Course;
