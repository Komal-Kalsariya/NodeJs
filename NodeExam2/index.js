const express=require("express");
const dbConnect = require("./config/db");
const UserRouter = require("./routers/user.router");

const app=express()
app.use(express.json())
const cors=require("cors");
const { CreateBlog } = require("./controller/blog.controller");
const blogRouter = require("./routers/blog.router");
app.use(cors())
app.get("/",(req,res)=>{
    res.send("working")

})
app.use("/user",UserRouter)
app.use("/blog",blogRouter)


app.listen(8090,()=>{
    console.log("liting localhost 8090");
    dbConnect()
    
})