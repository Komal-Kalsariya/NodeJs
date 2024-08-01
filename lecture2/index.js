const express = require("express")
const dbconnet = require("./db")
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("well come mogodb")

})

app.post("/", (req, res) => {
    let { name, email, password } = req.body
    let user = {
        name: name,
        email: email,
        passwors: password,
        id: db.length == 0 ? 1 : db[db.length - 1].id + 1

    }
    db.push(user)
    res.send("data save successfully.....")
})

app.delete("/:index", (req, res) => {
    console.log(req.params)
    let { index } = req.params
    db.splice(index, 1)
    res.send("delete form index id=" + req.params.index)


})
app.listen(8090, () => {
    console.log("listing on port 8090")
    dbconnet()
})
