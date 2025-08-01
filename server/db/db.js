import mongoose from "mongoose";
import dotenv from "dotenv";
import {Course} from "../Models/Model.js";

dotenv.config();


const connectDB = async()=>{
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        
        console.log("DB connected");
    }).catch((err)=>{
        console.log("DB connection failed",err);
    })

};

export default connectDB;

