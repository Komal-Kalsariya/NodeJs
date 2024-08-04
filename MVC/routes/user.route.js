const {Router}=require("express")
const { getUser, postData, deleteData, upadateData } = require("../controller/user.controller")
const isValid = require("../middleware/validation")

const userRoute=Router()

userRoute.get("/",getUser)
userRoute.post("/",isValid,postData)
userRoute.delete("/:id",deleteData)
userRoute.patch("/:id",upadateData)
module.exports=userRoute