
const mongoose=require("mongoose")

const BlogSchema=new mongoose.Schema({
    title:String,
    content:String,
    auther:String,
    date:{type:Date,default:Date.now}
})
let Blog=mongoose.model("Blog",BlogSchema)
module.exports=Blog