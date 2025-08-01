import  { useContext} from 'react';
import AuthContext from '../../context/Authcontext/AuthContext';
import './Profile.css';

const Profile = () => {
  const { enrollData,userName } = useContext(AuthContext);




  return (
    <div className="student-profile-wrapper">
      <h1 className="student-profile-heading">Welcome, {userName}</h1>
      <h2 className="student-profile-subheading">Your Enrolled Courses</h2>
      <div className="student-course-list-wrapper">
        {enrollData.length === 0 ? (
          <p className="student-no-course-text">
            You have not enrolled in any courses yet.
          </p>
        ) : (
          enrollData.map((course, index) => (
            <div key={index} className="student-course-card">
              <h3 className="student-course-title">{course.courseId.title}</h3>
              <p className="student-enroll-date">
                Enrolled on: {new Date(course.enrolledAt).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
