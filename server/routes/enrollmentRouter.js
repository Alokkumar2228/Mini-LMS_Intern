import express from 'express';
import { getAllEntollment, createEnrollment ,getStudentEnrollment} from '../controller/enrollmentController.js';

const enrollmentRouter = express.Router();

enrollmentRouter.get('/enrollments/me', getAllEntollment);
enrollmentRouter.post('/enrollments', createEnrollment);
enrollmentRouter.get('/enrollments/profile', getStudentEnrollment);


export default enrollmentRouter;
