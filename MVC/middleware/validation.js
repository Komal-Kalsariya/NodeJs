const isValid=(req,res,next)=>{
    let {username,email,password}=req.body
    if(username&&email&&password){
        next()
    }
    else{
        res.send("invalid data")
    }
}
module.exports=isValid