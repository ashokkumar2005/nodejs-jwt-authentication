 import express from"express";
 import authenroute from "./routes/authroutes.js";

 const app = express();

 app.use(express.json());

 app.use("/api",authenroute);

 app.listen(3000,()=>{
    console.log("server runing at 3000")
 })