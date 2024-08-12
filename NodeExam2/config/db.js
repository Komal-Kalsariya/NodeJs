const mongoose=require("mongoose")

const dbConnect=async(req,res)=>{
    await mongoose.connect("mongodb://localhost:27017/exam2")
    console.log("connect to database");
    
}
module.exports=dbConnect