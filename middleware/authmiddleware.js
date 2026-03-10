 import jwt from "jsonwebtoken";
 
  const SECRET = "my secreat";

export const authentication= (req,res,next)=>{

    const token = req.headers.authorization;

    if(!token){
        return res.status(400).send("Token is required");
    }

    try{
        const decoded = jwt.verify(token,SECRET);

        req.user=decoded;

        next();
    }
    catch(err){
        res.ststus(401).send("Token is required");

    }

}