import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/teacher-login" element={<TeacherSignIn />}/>
          <Route path="/teacher-register" element={<TeacherRegister />}/>
          <Route path="/student-login" element={<StudentLogin />}/>
          <Route path="/student-register" element={<StudentRegister />}/>


          {/* course route */}
          <Route path="/all-course" element={<CoursePage />}/>
          <Route path="/popular-courses" element={<PopularCourses />}/>

          {/* footer route */}
          <Route path="/about-us" element={<AboutUsPage />}/>
          <Route path="/privacy" element={<PrivacyPolicy />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
