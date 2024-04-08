const express =require('express');
const path = require('path');
const app=express();

app.get("/",async(req,res) => {
    res.sendFile(path.join(__dirname,"home.html"));
});
app.get("/about",async(req,res) => {
    res.sendFile(path.join(__dirname,"about.html"));
});
app.get("/contact",async(req,res) => {
    res.sendFile(path.join(__dirname,"contact.html"));
});

app.listen(5000,() => {
    console.log("Running");
});