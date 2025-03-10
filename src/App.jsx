// import { useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Category from "./pages/Category";
// import TeacherSignIn from "./pages/TeacherLogin";
// import TeacherRegister from "./pages/TeacherRegister";
// import StudentLogin from "./pages/StudentLogin";
// import StudentRegister from "./pages/StudentRegister";
// import CoursePage from "./pages/CoursePage";
// import AboutUsPage from "./pages/AboutUsPage";
// import PopularCourses from "./pages/PopularCourses";
// import PrivacyPolicy from "./pages/Privacy";
// import CourseDetail from "./pages/CourseDetail";
// import InstructorDetail from "./pages/InstructorDetail";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/category" element={<Category />} />
//           <Route path="/teacher-login" element={<TeacherSignIn />}/>
//           <Route path="/teacher-register" element={<TeacherRegister />}/>
//           <Route path="/student-login" element={<StudentLogin />}/>
//           <Route path="/student-register" element={<StudentRegister />}/>


//           {/* course route */}
//           <Route path="/all-course" element={<CoursePage />}/>
//           <Route path="/popular-courses" element={<PopularCourses />}/>

//           {/* Course Detail Page - Jab Kisi Course Pe Click Ho */}
//           <Route path="/detail/:id" element={<CourseDetail />} />
//           <Route path="/teacher-detail/:id" element={<InstructorDetail />}/>

//           {/* footer route */}
//           <Route path="/about-us" element={<AboutUsPage />}/>
//           <Route path="/privacy" element={<PrivacyPolicy />}/>
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Category from "./pages/Category";
import TeacherSignIn from "./pages/TeacherLogin";
import TeacherRegister from "./pages/TeacherRegister";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import CoursePage from "./pages/CoursePage";
import AboutUsPage from "./pages/AboutUsPage";
import PopularCourses from "./pages/PopularCourses";
import PrivacyPolicy from "./pages/Privacy";
import CourseDetail from "./pages/CourseDetail";
import InstructorDetail from "./pages/InstructorDetail";
import ScrollToTop from "./components/ScrollToTop";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/teacher-login" element={<TeacherSignIn />} />
          <Route path="/teacher-register" element={<TeacherRegister />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/all-course" element={<CoursePage />} />
          <Route path="/popular-courses" element={<PopularCourses />} />
          <Route path="/detail/:id" element={<CourseDetail />} />
          <Route path="/teacher-detail/:id" element={<InstructorDetail />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <ScrollToTop />  
        <Footer />
      </Router>
    </div>
  );
}

export default App;

