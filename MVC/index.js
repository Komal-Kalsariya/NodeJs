const express=require("express");
// const dbconnect = require("../program2/db");
const userRoute = require("./routes/user.route");
const dbConnect = require("./config/db");

let app=express()
app.use(express.json())
app.use("/users",userRoute)

app.listen("8090",()=>{
    console.log("listing port 8090");
    dbConnect()
})
