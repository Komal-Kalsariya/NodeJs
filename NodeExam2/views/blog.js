
const postdata = async(data) => {
    let req= await fetch("http://localhost:8090/blog", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data)
    })
    
        let res=await req.json()
        console.log(res);
}

const getData=async()=>{
    let req=await fetch("http://localhost:8090/blog")
    let data=await req.json()
    dispaly(data)

}
getData()

const dispaly=(data)=>{
    document.getElementById("box").innerHTML=""
    data.map((ele)=>{
        let h1=document.createElement("h1")
        h1.innerHTML=ele.title
        let p=document.createElement("p")
        p.innerHTML=ele.content
        let p1=document.createElement("p")
        p1.innerHTML=ele.auther
        let div=document.createElement("div")
        div.append(h1,p,p1)
        document.getElementById("box").append(div)
    })

}


const handleData=(e)=>{
    e.preventDefault()

    let data={
        title:document.getElementById("title").value,
        content:document.getElementById("content").value,
        auther:document.getElementById("auther").value,
    }
postdata(data)
}
document.getElementById("datas").addEventListener("submit",handleData)