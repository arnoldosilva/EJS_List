const express = require('express')
const bodyParser = require('body-parser')
const date = require('./date.js');



const app = express()
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
const items = []
const workItems = []

app.get("/", function(req,res){
  let day = date.getDate()
    res.render("list", {ListTitle:day, newListItems:items})
})


app.post("/", function(req,res){
    
    let item = req.body.newItem

    if (item != "") {
        if (req.body.list === "Work") {
            workItems.push(item)        
            res.redirect("/work")
        }else{
            items.push(item)
            res.redirect("/")
        }      
    }  
    
})

app.get("/work", function(req,res){
    res.render("list", {ListTitle:"Work List", newListItems: workItems})
})

app.get("/about", function(req,res){
    res.render("about")
})

app.listen(process.env.PORT || 3000,function(){
    console.log("Running on 3000 port")
})