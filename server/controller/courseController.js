import {Course} from '../Models/Model.js';

const createCourse = async (req, res) => {
  try {
    const { title, description,instructor, duration } = req.body;
    const newCourse = new Course({
      title,
      description,
      instructor,
      duration
    });
    await newCourse.save();
    res.status(201).json({
      message: 'Course created successfully',
      course: newCourse
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating course',
      error: error.message
    });
  }
}

const getAllCourses = async(req,res)=>{
    try {
        const courses = await Course.find();
        res.status(200).json({
            message: 'Courses retrieved successfully',
            courses
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving courses',
            error: error.message
        });
    }
}

export { createCourse, getAllCourses };