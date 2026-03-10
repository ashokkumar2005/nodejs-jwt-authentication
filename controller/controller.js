 import bcrypt from "bcrypt";
 import jwt from "jsonwebtoken";
 import {users} from "../model/model.js"

 const SECRET = "my secreat";

 //singup the user 

 export const signup = async(req,res)=>{

    const {username,password}=req.body;

    try{

        //hash the password from user signup
        const hashpass=await bcrypt.hash(password,10);

        users.push({
            username,
            password:hashpass,
        
        })
        
        res.send("user sign up successfully");

    }

    catch(err){
        res.send("Retry sigup")
    }

    
 }

 export const login =async(req,res)=>{
    const {username,password}=req.body;

    //check the user is exisit
    const user = users.find((u)=>u.username===username);

    if(!user){
        res.status(404).send("username not avilable");

    }
    const compare = await bcrypt.compare(password,user.password);

    if(!compare){
        return res.status(404).send("password is not correct");
    }

    const token = jwt.sign(
        {username:user.username},
        SECRET,
        {expiresIn:"1h"}
    )

    res.json({
        msg:"login successfully",
        token
    })
 }
 
 