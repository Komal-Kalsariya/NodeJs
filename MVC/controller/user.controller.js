
const Users = require("../model/user.schema")

const getUser=async(req,res)=>{
    let data=await Users.find()
    res.send(data)
}
const postData=async(req,res)=>{
    let data=await Users.create(req.body)
    res.status(201).send(data)
}
const deleteData=async(req,res)=>{
    let {id}=req.params
    let data=await Users.findByIdAndDelete(id)
    res.send(data)

}
const upadateData=async(req,res)=>{
    let {id}=req.params
    let data=await Users.findByIdAndUpdate(id,req.body)
    res.send(data)

}

module.exports={getUser,postData,deleteData,upadateData}