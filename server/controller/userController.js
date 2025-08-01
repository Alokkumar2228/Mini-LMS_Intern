import {userRegister} from '../Models/Model.js'
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import validator from "validator";
import CustomError from '../utils/customError.js';

 const createToken = (id ) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
 }

const registerUser = async (req,res,next) =>{
    const{name,email,password} = req.body;
    try{
        
        const exists = await userRegister.findOne({email});
        if(exists){
            throw new CustomError("User already exists",400);
        }
        
        if(!validator.isEmail(email)){
            throw new CustomError("Please enter a valid email",400);
        }

        if(password.length < 8){
            throw new CustomError("Password must be at least 8 characters",400);
        }

        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        
        const newuser = new userRegister({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newuser.save();
        
        const token = createToken(user._id);
        res.json({ success:true,token,name:user.name});
    }catch(error){    
        next(error);
    }

}


const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    const user = await userRegister.findOne({email});
    if(!user){
        throw new CustomError("Invalid credentials",400);
    }
    
    if(await bcrypt.compare(password,user.password)){
        const token =createToken(user._id);
        res.json({success:true,token,name:user.name})
    }else{
        throw new CustomError("Invalid password",400);
    }

};

export{registerUser,loginUser}
