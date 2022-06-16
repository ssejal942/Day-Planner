const express=require("express");
const app= express();
const bodyParser=require("body-parser");

var works=[];
app.set('view engine','ejs');

app.listen(3000,function(){
   console.log("Server is started at port 3000");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.post("/",function(req,res){
    var work = req.body.work;
    works.push(work);
    res.redirect("/");
});

app.get("/",function(req,res){
    var date = new Date();
    var options = {
         weekday:"long",
         day: "numeric",
         month: "long"
     };
    var  day= date.toLocaleDateString("en-US",options);
    res.render("list",{ 
        kindOfDay : day,
        works: works
    });

});