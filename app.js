const express = require("express");
const bodyparser=require("body-parser");
const ejs = require("ejs");

const app= express();

var items =["Mohan","Radha","Sree","Ammu"];
var workitems =[];
app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
     
    var today = new Date();
    var options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day =today.toLocaleDateString("en-US",options);
    res.render("list",{listtitle: day,Newlistitem: items});


});


app.post("/",function(req,res){
    var item = req.body.Newitem;
    if(req.body.list==="work")
   {
       workitems.push(item)
       res.redirect("/work")
   }
   else
   {
    items.push(item);
    res.redirect("/");
   }
   console.log(item);
   
})
app.get("/work",function(req,res){
    res.render("list",{listtitle: "Work list",Newlistitem: workitems});
})



app.listen(3000,function(){

    console.log("server busy");
})
