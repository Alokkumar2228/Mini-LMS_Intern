import React, { useContext } from 'react';
import './Card.css';
import AuthContext from '../../context/Authcontext/AuthContext';




const CourseCard = ({ 
  course,  
  className = '',
  isEnrolled,
}) => {

  

  const {auth ,handleEnroll,token,setEnrolledCourses} = useContext(AuthContext)



  const handleEnrollClick = async(courseId,token) => {
    if(auth === "Login/Signup"){
      alert("Please login first");
    }
    await handleEnroll(courseId,token);
    setEnrolledCourses(prev=>[...prev,courseId]);

  };

  return (
    <div 
      className={`course-card ${className}`}
      
    >
      <div className="course-card__content">
        {/* Course Title */}
        <h3 className="course-card__title">
          {course.title}
        </h3>

        {/* Course Description */}
        <p className="course-card__description">
          {course.description}
        </p>

        {/* Course Details */}
        <div className="course-card__details">
          {/* Instructor */}
          <div className="course-card__detail-item">
            <span className="course-card__detail-label">Instructor:</span>
            <span className="course-card__detail-value">{course.instructor}</span>
          </div>

          {/* Duration */}
          <div className="course-card__detail-item">
            <span className="course-card__detail-label">Duration:</span>
            <span className="course-card__detail-value">{course.duration}</span>
          </div>
        </div>

        {/* Enrollment Button */}
        <div className="course-card__actions">
          <button 
            className={`course-card__button ${
              isEnrolled 
                ? 'course-card__button--enrolled' 
                : 'course-card__button--enroll'
            }`}
            onClick={()=>handleEnrollClick(course._id,token)}
            disabled={isEnrolled}
            aria-label={
              isEnrolled 
                ? `Already enrolled in ${course.title}` 
                : `Enroll in ${course.title}`
            }
          >
            {isEnrolled ? (
              <>
                <span className="course-card__button-icon">✓</span>
                Enrolled
              </>
            ) : (
              'Enroll '
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;