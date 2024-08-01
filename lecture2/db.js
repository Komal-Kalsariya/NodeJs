const mongoose =require("mongoose")
const dbconnet=async()=>{
   await mongoose.connect("mongodb+srv://komalkalsariya233:node@cluster0.c6qkrag.mongodb.net/")
   console.log("connect mongodb");
}
module.exports=dbconnet