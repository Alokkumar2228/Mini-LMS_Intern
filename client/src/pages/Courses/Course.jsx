import React, { useContext} from 'react';
import CourseCard from '../../component/Card/Card.jsx';
import AuthContext from '../../context/Authcontext/AuthContext.js';
import './Course.css';
import { useNavigate } from 'react-router-dom';
import assets from '../../assets/asset.js'


const CourseGrid = ({ 
  setShowLogin,
  courses = [], 
  className = '',
  showHeader = true,
  headerTitle = "Available Courses",
  headerSubtitle = "Choose from our selection of professional courses to advance your career",
  ...props 
}) => {

  const {auth,setToken,setAuth,setEnrolledCourses,enrolledCourses,userName,token,fetchProfileData,isLoading} = useContext(AuthContext);

  const navigate = useNavigate();



  const handleAuth = ()=>{
    if(auth === "Login/Signup"){
      
      setShowLogin(true);
    }else{
      setToken("");
      localStorage.removeItem("token");
      localStorage.removeItem("name");
       setEnrolledCourses([]);
       setToken(null);
      setAuth("Login/Signup")
    }
  };

  const handleProfileLogo = async() => {
    if (auth !== "Login/Signup") {
      await fetchProfileData(token);
      navigate("/profile");
    }
  };

  return (
    <div className={`course-grid-container ${className}`} {...props}>
      <div className="auth-section">
        {/* Profile circle first */}
        {auth !== "Login/Signup" && (
          <div className="profile-logo" onClick={handleProfileLogo}>
            <span>{userName.charAt(0).toUpperCase()}</span>
          </div>
        )}
        
        {/* Then the auth button */}
        <button className="auth-btn" onClick={handleAuth}>
          {auth}
        </button>
      </div>
      
      {/* Header Section */}
      {showHeader && (
        <header className="course-grid__header">
          <div className="course-grid__header-content">
            <h1 className="course-grid__title">
              {headerTitle}
            </h1>
            <p className="course-grid__subtitle">
              {headerSubtitle}
            </p>
          </div>
        </header>
      )}

      {/* Course Grid */}
      <main className="course-grid__content">
        {isLoading ? (
          <div className="course-grid__loading">
            <img src={assets.loader} alt="Loading" />
          </div>
        ) : (
          <div className="course-grid__grid">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                isEnrolled={enrolledCourses.includes(course._id)}
                course={course}
                className="course-grid__card"
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseGrid;