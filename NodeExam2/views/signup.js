const postdata = async(data) => {
    let req= await fetch("http://localhost:8090/user/signup", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data)
    })
    
        let res=await req.json()
        console.log(res);
        
         document.cookie=`id=${res._id}`
        

}




const handleData=(e)=>{
    e.preventDefault()

    let data={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }
postdata(data)
}
document.getElementById("datas").addEventListener("submit",handleData)