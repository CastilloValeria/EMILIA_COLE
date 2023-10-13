const express= require ("express");
const path= require("path");

const app= express();

const publicPath= path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.use (express.static("public"));

app.listen(3000, ()=>console.log("servidor corriendo en puerto 3000"));

app.get ("/", (req,res)=> {
    res.sendFile(path.join(__dirname,"/view/index.html"))
 });

app.get ("/music", (req,res)=> {
    res.sendFile(path.join(__dirname,"/view/music.html"))
 });

 app.get ("/about", (req,res)=> {
    res.sendFile(path.join(__dirname,"/view/about.html"))
 });

 app.get ("/contact", (req,res)=> {
    res.sendFile(path.join(__dirname,"/view/contact.html"))
 });

