const {Router}=require("express")
const { CreateBlog, getBlog, deleteBlog, updateBlog, findbyId } = require("../controller/blog.controller")

const blogRouter=Router()
blogRouter.post("/",CreateBlog)
blogRouter.get("/",getBlog)
blogRouter.delete("/:id",deleteBlog)
blogRouter.patch("/:id",updateBlog)
blogRouter.get("/:id",findbyId)

module.exports=blogRouter

