import { useContext, useState } from 'react';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import CourseGrid from './pages/Courses/Course.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Auth from './pages/Auth/Auth.jsx';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './context/Authcontext/AuthContext.js';




const initialEnrolledCourses = ["c3", "c7"];

const handleEnroll = (id, course) => {
  alert(`✅ You have enrolled in: ${course.title}`);
};

function App() {

  const {courseData} = useContext(AuthContext);

  const [showLogin,setShowLogin] = useState(false);
  

  return (
    <>
    {showLogin?<Auth setShowLogin={setShowLogin} />:<></>}
    <Routes>
      <Route path="/" element={ <CourseGrid
        setShowLogin={setShowLogin}
        courses={courseData}
        initialEnrolledCourses={initialEnrolledCourses}
        onEnroll={handleEnroll}
        className="custom-grid"
        showHeader={true}
        headerTitle="Top Trending Courses"
        headerSubtitle="Boost your career with these handpicked courses"
        showEnrollmentCounter={true}
      />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
         
    </>
  )
}

export default App
