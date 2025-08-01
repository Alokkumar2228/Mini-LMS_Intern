import express from 'express';
import { getAllCourses, createCourse } from '../controller/courseController.js';

const courseRouter = express.Router();

courseRouter.get('/course', getAllCourses);
courseRouter.post('/courses', createCourse);


export default courseRouter;