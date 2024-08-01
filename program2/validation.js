const isValidate=(req,res,next)=>{
let {email,username,password}=req.body
if(email && username && password){
    next()
}
else{
    res.send("invalid data")
}
}
modules.exports=isValidate