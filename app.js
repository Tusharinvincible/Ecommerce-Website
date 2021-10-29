const express=require("express");

const app=express();

const ejs=require('ejs');
app.set('view engine','ejs');
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render('home');
})

app.get("/men",(req,res)=>{
    res.render("men");
})
app.get("/women",(req,res)=>{
    res.render("women");
})

app.get("/kids",(req,res)=>{
    res.render("kids");
})

app.get("/accessories",(req,res)=>{
    res.render("accessories");
})



app.listen(3000,()=>{
    console.log("Server is runing on PORT=> ",3000);
})