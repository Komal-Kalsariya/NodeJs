const express=require('express')

const app=express();

app.listen(8090,()=>{
    console.log("listening on port 8090");
    
})
app.get('/',(req,res)=>{
    res.send("well come to my app!!!!!")

})






// const fs=require('fs')
// const createFile=()=>{
//     fs.writeFile("text.css","",(err)=>{
//         if(err){
//             console.log("error")
//         }
//         else{
//             console.log("create");
//         }
//     })
// }
// createFile()

// const CreatTextFile=()=>{
//     fs.writeFile("text.txt","node js",(err)=>{
//         if(err){
//             console.log("error")
//         }
//         else{
//             console.log("create");
//         }

//     })
// }
// CreatTextFile()

// const deleteFile=()=>{
//     fs.unlink("text.css",(err)=>{
//         if(err){
//             console.log("error");
//         }
//         else{
//             console.log("deleted");
//         }
//     })
// }
// deleteFile()