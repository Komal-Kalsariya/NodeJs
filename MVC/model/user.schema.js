const mongoose=require("mongoose")

const UserSchemadata=new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

let Users=mongoose.model("Users",UserSchemadata)
module.exports=Users