import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Course description is required']
  },
  instructor: {
    type: String,
    required: [true, 'Course instructor is required']
  },
  duration: {
    type: String,
    required: [true, 'Course duration is required']
  },

});



const Course = mongoose.model('Course', courseSchema);

//User-Register
const userRegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },

});

const userRegister = mongoose.model('UserRegister', userRegisterSchema);



//Enrollment 
const enrollmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
    courses: [
    {
      courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
      },
      enrolledAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema)



export {
  Course,
  userRegister,
  Enrollment
};
