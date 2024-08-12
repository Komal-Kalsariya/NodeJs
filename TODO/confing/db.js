const mongoose=require("mongoose")

const dbConnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/todo")
    console.log("database connect");
    

}
module.exports=dbConnect