const User = require("../models/user.schema")

const CreateUser=async(req,res)=>{
    

    let {email}=req.body
    let isUser=await User.findOne({email:email})

    if(isUser){
        res.send({message:"user already exit"})
    }
    else{
        let data=await User.create(req.body)
        res.send(data)
    }
}

const isLogin=async(req,res)=>{
    let {email,password}=req.body

    let isUser=await User.findOne({email:email})

    if(!isUser){
      return  res.send({message:"not fond"})
    }
    if(isUser.password !== password){
      return  res.send({message:"password is incorrect"})
    }
    res.send({message:"login successfully...."})

}
module.exports={CreateUser,isLogin}