const postdata = async(data) => {
    let req= await fetch("http://localhost:8090/user/login", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data)
    })
    
        let res=await req.json()
        console.log(res);
        

        

}




const handleData=(e)=>{
    e.preventDefault()

    let data={
       
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }
postdata(data)
}
document.getElementById("datas").addEventListener("submit",handleData)