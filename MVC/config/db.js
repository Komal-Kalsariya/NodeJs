const mongoose=require("mongoose")
// const { models } = require("mongoose")
require("dotenv").config()
const dbConnect=async()=>{
    await mongoose.connect(process.env.DB_URL)
    console.log("connect to database")

}
module.exports=dbConnect