import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';
import courseRouter from './routes/courseRouter.js';
import enrollmentRouter from './routes/enrollmentRouter.js';
import userRouter from './routes/userRouter.js';
import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
  {
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  }
));

connectDB();

app.get('/',(req,res)=>{
  res.send("Hello World!");
});

app.use('/api',courseRouter);
app.use('/api',userRouter);
app.use('/api',enrollmentRouter);

app.use(errorHandler);

app.listen (port,()=>{
  console.log(`Server is running on port ${port}`);
});
