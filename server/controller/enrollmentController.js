import {Enrollment,userRegister} from '../Models/Model.js';
import jwt from 'jsonwebtoken';
import CustomError from '../utils/customError.js';

const getAllEntollment =async(req,res,next)=>{

    try {
        const {token} = req.headers;
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const userId = decode.id;
        const enrollments = await Enrollment.find({user:userId});
        res.status(200).json(enrollments);
    } catch (error) {
        next(error);
    }

}

const getStudentEnrollment = async(req,res,next)=>{
    try {
        const {token} = req.headers;
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const userId = decode.id;
        const user = await userRegister.findById(userId);
        const enrollments = await Enrollment.find({user:userId}).populate('courses.courseId');
        const enrollData = enrollments[0].courses;
        
        const userName = user.name;
        res.status(200).json({enrollData,userName});
    } catch (error) {
        next(error);
    }
}

const createEnrollment = async(req,res,next)=>{
    try {
        const {courseId,token} = req.body;
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        const userId = decode.id;

        

        let enrollment = await Enrollment.findOne({ user: userId });

        if(!enrollment){

            enrollment = new Enrollment({
                user:userId,
                courses:[{courseId , enrolledAt: new Date()}]
            })
        }else{
            //.some ()=> return true or false
            const alreadyEnrolled = enrollment.courses.some(
                (c)=> c.courseId.toString() === courseId
            );

            if(alreadyEnrolled){
                throw new CustomError("Already Enrolled in this course",400);
            }

            enrollment .courses.push({
                courseId,
                enrolledAt: new Date()
            })
        }

        await enrollment.save();

        res.status(200).json({message:"Enrolled in the course successfully"});

    } catch (error) {
        next(error);
    }
}

export{getAllEntollment,createEnrollment,getStudentEnrollment}