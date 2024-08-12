const {Router}=require("express")
const { CreateUser, isLogin } = require("../controller/user.controller")

const UserRouter=Router()

UserRouter.post("/signup",CreateUser)
UserRouter.post("/login",isLogin)

module.exports=UserRouter