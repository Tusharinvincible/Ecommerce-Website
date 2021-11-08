const express=require("express");
const admin=require("firebase-admin");

const bcrypt=require('bcrypt');

const path=require('path');



const app=express();

const ejs=require('ejs');
app.set('view engine','ejs');
app.use(express.static("public"));

app.use(express.json());

app.get("/",(req,res)=>{
    res.render('home');
})

app.get("/signup",(req,res)=>{
    res.render('signup');
})

app.post("/signup",(req,res)=>{
   console.log(req.body);
  let {name,email,password,number,tac,notification,seller}=req.body;
  if(name.length<3){
    
    return res.json({'alert':'name must be 3 characters long'});
   }
    else if(!email.length){
        return res.json({'alert':'enter the email'});
    }
    else if(password.length<8){
        return res.json({'alert':'name must be 8 characters long'});
    }
    else if(!number.length){
        return res.json({'alert':'enter the number'});
    }
    else if(!Number(number) || number.length!=10){
        return res.json({'alert':'enter the correct mobile number'});
    }
    else if(!tac.checked){
        return res.json({'alert':'please accept the terms and condition'});
    }
    res.json("data received");
})

app.get("/product",(req,res)=>{
    res.render("product");
})

app.get("/men",(req,res)=>{
    res.render("men");
})
app.get("/women",(req,res)=>{
    res.render("women");
})

app.get("/search",(req,res)=>{
    res.render('search');
})

app.get("/kids",(req,res)=>{
    res.render("kids");
})

app.get("/404",(req,res)=>{
    res.render("404");
})

app.get("/accessories",(req,res)=>{
    res.render("accessories");
})


app.use((req,res)=>{
    res.redirect('/404');
})

app.listen(3000,()=>{
    console.log("Server is runing on PORT=> ",3000);
})