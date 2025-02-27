import React from "react";
import { Link } from "react-router-dom";

const TeacherDetail = () => {
  return (
    <div className="container mx-auto">
      {/* Teacher Info Section */}
      <div className="flex flex-wrap px-20 py-28">
        {/* Image Section */}
        <div className="w-full sm:w-1/3 p-4 flex justify-center">
          <img
            className="w-48 h-48 rounded-lg border border-gray-300 shadow-md object-cover"
            src="https://minipro.pythonanywhere.com/media/teacher_profile_imgs/Screenshot_2023-05-04_102625_0u33kaw.png"
            alt="Mr Adams"
          />
        </div>

        {/* Details Section */}
        <div className="w-full sm:w-2/3 p-4">
          <h3 className="text-2xl font-bold text-gray-800">Mr Adams</h3>

          <p className="font-semibold mt-2">
            Skills:{" "}
            <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm">
              Full Stack
            </span>
          </p>

          <p className="font-semibold">Total Courses: 6</p>
          <p className="font-semibold">Contact: meet.211724101@vcet.edu.in</p>
          <p className="font-semibold">Qualifications: Harvard University</p>

          {/* Social Media Links */}
          <div className="mt-4">
            <span className="font-semibold">Follow Me:</span>
            <div className="flex gap-3 mt-2">
              <Link to="https://learning-edu-app.web.app/" className="text-blue-600 text-2xl">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="https://learning-edu-app.web.app/" className="text-pink-600 text-2xl">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link to="https://learning-edu-app.web.app/" className="text-blue-400 text-2xl">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="https://learning-edu-app.web.app/" className="text-red-600 text-2xl">
                <i className="bi bi-youtube"></i>
              </Link>
              <Link to="https://learning-edu-app.web.app/" className="text-gray-700 text-2xl">
                <i className="bi bi-globe2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Course List Section */}
      <div className="bg-white shadow-lg rounded-lg mt-8 p-6">
        <h4 className="text-xl font-bold border-b pb-2">Course List</h4>
        <ul className="mt-3 space-y-2">
          {[
            { id: 46, name: "Python Experiments" },
            { id: 47, name: "OS" },
            { id: 48, name: "Maths 4" },
            { id: 49, name: "COA" },
            { id: 50, name: "CNND" },
            { id: 51, name: "Automata Theory" },
          ].map((course) => (
            <li key={course.id}>
              <Link
                to={`/detail/${course.id}`}
                className="block bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded transition"
              >
                {course.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherDetail;
