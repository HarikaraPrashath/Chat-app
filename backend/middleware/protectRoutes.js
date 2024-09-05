import jwt from "jsonwebtoken"
import User from '../models/userModels.js'

const protectRoutes = async(req,res,next)=> {
 try{
    const token = req.cookies.jwt;

    if(!token){
        return res.status(400).json({error:"Unauthorized - No token"});
    }
    const decoder = jwt.verify(token,process.env.JWT_SECRET)

    if(!decoder){
        return res.status(401).json({error:"Unauthorized - Invalid token"})
    }

    const user = await User.findById(decoder.userId).select("-password")

    if(!user){
        return res.status(404).json({error:"User not found"})
    }

    req.user = user
    next()

 }
 catch(error){
    console.log("Error in  protectRoutes middleware :",error.message);
    res.status(500).json({error:"Internal error"})
 }
}


export default  protectRoutes