

const fs=require('fs')
const { sum } = require('./math')
const opr=process.argv[2]
const filename=process.argv[3]
const data=process.argv[4]
const newFile=process.argv[5]

let a=process.argv[6]
let b=process.argv[7]
console.log(sum(a,b));





const createfile=()=>{
    fs.writeFile(filename,data,(err)=>{
        if(err){
            console.log(err.message);
            
        }
        else{
            console.log("sucessfull");
            
        }
    })
}


const renameFile=()=>{
    fs.rename(filename,newFile,(err,data)=>{
        if(err){
            console.log(err.message)
        } 
        else{
            console.log("rename file..");
            
        }
    })
}

const deletefile=()=>{
    fs.unlink(filename,(err)=>{
        if(err){
            console.log(err);
            
        }
        else{
            console.log("delete file");
            
        }
    })
}
if(opr=="create"){
    createfile()
    
 }
if(opr=="rename"){
    renameFile()
}
if(opr=="delete"){
    deletefile()
}