const User = require("../model/user.schema")

const CreateUser=async(req,res)=>{
    // let data=await User.create(req.body)
    // res.send(data)

    let {email}=req.body
    let isUser=await User.findOne({email:email})

    if(isUser){
        res.send({message:"user already exits.."})
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
        return res.send({message:"user not found"})
    }
    if(isUser.password !== password){
        return res.send({message:"password incorrect..."})
    }
    res.send({message:"login successfully..."})
}
module.exports={CreateUser,isLogin}