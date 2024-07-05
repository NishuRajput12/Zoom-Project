import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from  "cors";
const app= express();
const server =createServer(app);
const io = new Server(server);




app.set("port",(process.env.PORT||8000))
app.get("/home",(req,res) => {
   return res.json({"hello":"world"})
});
const start =async()=>{
    // app.listen(8000,()=>{
        const connectionDb =await mongoose.connect("");
        server.listen(app.get("port"),()=>{
        console.log("server start")
    });

}
start();