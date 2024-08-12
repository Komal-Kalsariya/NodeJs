const Blog = require("../models/blog.schema")

const CreateBlog=async(req,res)=>{
    let data=await Blog.create(req.body)
    res.send(data)

}
const getBlog=async(req,res)=>{
    let data=await Blog.find()
    res.send(data)
}
const deleteBlog=async(req,res)=>{
    let {id}=req.params
    let data=await Blog.findByIdAndDelete(id)
    res.send(data)
}
const updateBlog=async(req,res)=>{
    let {id}=req.params
    let data=await Blog.findByIdAndUpdate(id,req.body)
    res.send(data)
}
const findbyId=async(req,res)=>{
    let {id}=req.params
    let data=await Blog.findById(id)
    res.send(data)

}
module.exports={CreateBlog,getBlog,deleteBlog,updateBlog,findbyId}