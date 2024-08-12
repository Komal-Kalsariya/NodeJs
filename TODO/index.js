const express=require("express");
const dbConnect = require("./confing/db");
const UserRouter = require("./routes/user.route");

const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.use("/node",UserRouter)

app.listen(8090,()=>{
    console.log("Listning locathost 8090");
    dbConnect()
})