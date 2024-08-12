const postData=async(data)=>{
    let req=await fetch("http://localhost:8090/node/signup/",{
        method:"POST",
        header:{"Content-Type":"Application/json"},
        body:JSON.stringify(data)
    })
   
let res=await req.json()
console.log(res);

}

const handledata=(e)=>{
    e.preventDefault()

    let data={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    postData(data)
    console.log(data)

}
document.getElementById("data").addEventListener("submit",handledata)