import React, { useState, useEffect} from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState("Login/Signup");
  const [courseData, setCourseData] = useState([]);
  const [token,setToken] = useState(localStorage.getItem("token") || "");
  const [enrolledCourses, setEnrolledCourses] = useState([]); // list of courseIds
  const [userName, setUserName] = useState(localStorage.getItem("name") || "");
  const [enrollData ,setEnrollData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  const url="http://localhost:3000/api";



  const getAllCourses = async () => {
    try {

      const result = await await axios.get(`${url}/course`);
      setIsLoading(false);
      setCourseData(result.data.courses);
    
    } catch (error) {
      console.log( error.message);
    }
  };

  const handleEnroll = async(courseId,token) =>{
    try {
      const result = await axios.post(`${url}/enrollments`,{
        courseId,
        token
      })
      if(result.data.message === "Enrollment successful"){
        alert("Enrollment successful");
      }else{
        alert(result.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

    const fetchEnrolledCourses = async (token) => {
    try {
        const res = await axios.get(`${url}/enrollments/me`, {
        headers: {
            token: token
        }
        });
        const enrolled = res.data?.[0]?.courses;
        const courseIds = enrolled.map(c=>c.courseId  )
      
        setEnrolledCourses(courseIds);
       
    } catch (error) {
        console.error("Error fetching enrolled courses:", error.message);
    }
    };

    const fetchProfileData = async (token) => {
        try {
            const res = await axios.get(`${url}/enrollments/profile`, {
                headers: {
                    token: token
                }
            });
            setEnrollData(res.data.enrollData);
            const userName = res.data.userName;
            setUserName(userName);
          
            
        } catch (error) {
            console.error("Error fetching profile data:", error.message);
        }
    };
  

useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    setToken(token);
    setAuth("Logout");

    // only fetch after confirming user is logged in
    getAllCourses();
    fetchEnrolledCourses(token);
  } else {
    setAuth("Login/Signup");
    getAllCourses();
  }
}, []);



  return (
    <AuthContext.Provider value={{ auth, setAuth, courseData,handleEnroll ,url,token,setToken,enrolledCourses, setEnrolledCourses,fetchEnrolledCourses,userName,setUserName,enrollData, fetchProfileData ,isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
