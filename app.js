const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))

var items = []

app.get("/", function(req,res){
    var today = new Date()
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("pt-BR",options)
    
    res.render("list", {day:day, newListItems:items})
})

app.post("/",function(req, res){
    item = req.body.newItem
    items.push(item)
    res.redirect("/")
})


app.listen(3000,function(){
    console.log("Running on 3000 port")
})