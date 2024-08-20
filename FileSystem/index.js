let opr=process.argv[2]
let filename=process.argv[3]
let data=process.argv[4]
const fs=require('fs')

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
    fs.rename(filename,filename,(err)=>{
        if(err){
            console.log(err.message)
        } 
        else{
            console.log("rename file..");
            
        }
    })
}
// if(opr=="create"){
//     createfile()
    
// }
if(opr=="rename"){
    renameFile()
}