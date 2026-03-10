 import express from "express";
 import { login,signup } from "../controller/controller.js";
 import { authentication } from "../middleware/authmiddleware.js";

 const router =express.Router();

 router.post("/signup",signup);

 router.post("/login",login)

 router.get("/profile",authentication,(req,res)=>{
    res.send("welcome " + req.user.username)
 })

 export default router;