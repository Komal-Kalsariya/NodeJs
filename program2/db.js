const mongoose=require("mongoose")

const dbconnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/node")
    console.log("connected to the database");

}
module.exports=dbconnect