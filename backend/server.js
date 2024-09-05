import dotenv from "dotenv";
import express  from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"

import connecttoDB from "./db/connecttoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 8000


dotenv.config();  

app.use(express.json()); //to parse the incoming request with JSON payloads (from req.body)
app.use(cookieParser())
// app.get("/",(req,res)=>{
//    //root route  http://localhost:5000/
//    res.send("Hello world");
// })

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT,()=> {
    connecttoDB();
    console.log(`Server is running successfully and PORT = ${PORT}`)
}
);