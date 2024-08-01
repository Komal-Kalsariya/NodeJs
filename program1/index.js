const express=require('express')
let app=express()

app.get("/node",(req,res)=>{
res.send("well come node")

})

app.listen(7045,()=>{
    console.log("welcome to localhost 7040");
})