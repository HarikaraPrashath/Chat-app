import { Server } from "socket.io";
import http from 'http'
import express from 'express'
import { Socket } from "dgram";

const app = express()

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
})

const userSocketMap={} 

io.on('connection',(socket)=>{
    console.log("a user connected",socket.id)

    const userId = socket.handshake.query.userId
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    //io.emit() is used to events to all the connected clients
    io.emit("getOnlineUser",Object.keys(userSocketMap)) 

    //socket.on() is used to listen to the event .can be used both on client and server side 
    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id)
    })
})

export {app,io,server}