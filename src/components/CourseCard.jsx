// import React from "react";

// const CourseCard = () => {
//   return (
//     <div className="flex flex-wrap bg-gray-100 p-4 rounded-lg shadow-lg">
//       {/* Image Section */}
//       <div className="w-full sm:w-1/3 p-2">
//         <img
//           className="w-full h-auto rounded-lg border border-gray-300 shadow-sm"
//           src="https://minipro.pythonanywhere.com/media/course_imgs/React.jpeg"
//           alt="Reactjs Full Course"
//         />
//       </div>
//       {/* Course Details Section */}
//       <div className="w-full sm:w-2/3 p-2">
//         <h3 className="text-2xl font-bold text-gray-800">Reactjs Full Course</h3>
//         <p className="text-gray-600 mt-2">
//           Edu Learning Reactjs Training will train you to build efficient React applications
//           by mastering the concepts of React, Redux, and React Native. In this React Course,
//           you will learn how to build simple components & integrate them into more complex design components.
//           After completing this React online training, you will be able to build the applications using React concepts
//           such as JSX, Redux, Asynchronous Programming using Redux-Saga middleware, Fetch data using GraphQL,
//           perform Testing using Jest, Deploy applications using Nginx and Docker, plus build Mobile applications
//           using React Native.
//         </p>
//         <p className="font-semibold mt-2">
//           Course By : <Link to="/teacher-detail/16" className="text-blue-600">Mrs Jake Weary</Link>
//         </p>
//         <p className="font-semibold">
//           Techs : <span className="text-yellow-500">Reactjs, React Native, Redux toolkit, JSX, Fetch API, HTML, CSS</span>
//         </p>
//         <p className="font-semibold">
//           Total Enrolled <i className="bi bi-person-plus-fill text-info"></i> : 9
//         </p>
//         <p className="font-semibold">Rating : ⭐ 5 / 5</p>
//         <p className="font-semibold">Views: 0</p>
//         <Link
//           className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 inline-block hover:bg-red-600"
//           to="/user-login"
//         >
//           Please login to enjoy this course
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  if (!course) return <p className="text-center text-red-500">Course Not Found</p>;

  return (
    <div className="flex flex-wrap px-20 py-24">
      {/* Image Section */}
      <div className="w-full sm:w-1/3 p-2 overflow-hidden">
        <img
          className="w-[300px] h-auto shadow-xl object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          src={course.img}
          alt={course.title}
        />
      </div>

      {/* Course Details Section */}
      <div className="w-full sm:w-2/3 -ml-20 space-y-4">
        <h3 className="text-3xl font-semibold text-gray-800">{course.title}</h3>
        <p className="text-gray-600 mt-2">{course.description}</p>
        
        <p className="font-semibold mt-2 text-gray-700">
          Course By : <Link to={`/teacher-detail/${course.teacherId}`} className="text-[#06BBCC]">{course.teacher}</Link>
        </p>
        <p className="font-semibold  text-gray-700">
          Techs : <span className="text-yellow-500">{course.techs}</span>
        </p>
        <p className="font-semibold  text-gray-700">
          Total Enrolled <i className="bi bi-person-plus-fill text-info"></i> : {course.enrolled}
        </p>
        <p className="font-semibold  text-gray-700">Rating : ⭐ {course.rating} / 5</p>
        <p className="font-semibold  text-gray-700">Views: {course.views}</p>

        <Link
          className="bg-red-500 text-white px-4 py-2 rounded-full mt-4 inline-block hover:bg-red-600"
          to="/student-login"
        >
          Please login to enjoy this course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
