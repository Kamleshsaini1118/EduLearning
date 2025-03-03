// import React from "react";
// import { Link } from "react-router-dom";

// const StudentRegister = () => {
//   return (
//     <div className="flex justify-center items-center h-full ">
//       <div className="w-[85%] md:w-full max-w-lg bg-white shadow-2xl p-10 my-32">
//         {/* Title */}
//         <h5 className="text-center text-lg font-semibold text-gray-800 mb-4">
//           STUDENT SIGN UP
//         </h5>

//         {/* Full Name Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="fullname"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Full Name
//           </label>
//           <input
//             type="name"
//             id="name"
//             name="name"
//             placeholder="Full Name"
//             className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Email address"
//             className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
//           />
//         </div>

//          {/* Full Name Input */}
//          <div className="mb-4">
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-gray-700"
//           >
//             User Name
//           </label>
//           <input
//             type="name"
//             id="name"
//             name="name"
//             placeholder="User Name"
//             className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
//           />
//         </div>

//         {/* Password Input */}
//         <div className="mb-4">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
//           />
//         </div>

//         {/* Interest Input */}
//         <div >
//           <label
//             htmlFor="interest"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Interest
//           </label>
//           <textarea
//             type="text"
//             id="interest"
//             name="interest"
//             placeholder="Enter Your Interest"
//             className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
//           />
//         </div>

//         <div className="text-gray-600 mb-4">
//         Eg: Python, Java, C, C++, Web Development etc...
//         </div>

//         {/* Sign In & Sign Up Buttons */}
//         <div className="flex flex-col space-y-3">
//           <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full">
//             SIGN UP
//           </button>

//           {/* Divider Line */}
//           <div className="w-full flex items-center">
//             <div className="flex-grow h-[1px] bg-gray-400"></div>
//             <span className="mx-2 text-gray-600 text-sm">or</span>
//             <div className="flex-grow h-[1px] bg-gray-400"></div>
//           </div>

//           <Link
//             to="/student-login"
//             className="w-full bg-red-500 hover:bg-red-600 text-white text-center font-semibold py-2 rounded-full"
//           >
//             SIGN IN
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentRegister;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StudentRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [interest, setInterest] = useState("");

  const handleRegister = async () => {
    console.log("Name:", name, "Email:", email, "Username:", username, "Password:", password, "Interest:", interest);
    try {
      const response = await axios.post("API_URL", {
        name,
        email,
        username,
        password,
        interest,
      });
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <div className="w-[85%] md:w-full max-w-lg bg-white shadow-2xl p-10 my-32">
        <h5 className="text-center text-lg font-semibold text-gray-800 mb-4">
          STUDENT SIGN UP
        </h5>

        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="User Name"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
            Interest
          </label>
          <textarea
            type="text"
            id="interest"
            name="interest"
            placeholder="Enter Your Interest"
            className="mt-1 w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>

        <div className="text-gray-600 mb-4">
          Eg: Python, Java, C, C++, Web Development etc...
        </div>

        <div className="flex flex-col space-y-3">
          <button
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full"
            onClick={handleRegister}
          >
            SIGN UP
          </button>

          <div className="w-full flex items-center">
            <div className="flex-grow h-[1px] bg-gray-400"></div>
            <span className="mx-2 text-gray-600 text-sm">or</span>
            <div className="flex-grow h-[1px] bg-gray-400"></div>
          </div>

          <Link
            to="/student-login"
            className="w-full bg-red-500 hover:bg-red-600 text-white text-center font-semibold py-2 rounded-full"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
