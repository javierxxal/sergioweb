const express = require("express");
const { dirname } = require("path");
var path = require('path')
const server = express();

server.set("view engine","ejs")
server.set("views",path.join(__dirname,"views"));
 
server.use(express.static(__dirname +'/public'));
 
console.log(__dirname)

server.listen(3000);
console.log("Server listening on port ",3000);

server.get("/",(req,res)=>{
    res.render("index");
    console.log("Rendering index.ejs") 
})

server.get("/info",(req,res)=>{
    res.render("info");
    console.log("Rendering info.ejs") 
})

server.get("/audio",(req,res)=>{
    res.render("audio");
    console.log("Rendering audio.ejs") 
})

server.get("/videos",(req,res)=>{
    res.render("videos");
    console.log("Rendering videos.ejs") 
})

server.get("/otrosProyectos",(req,res)=>{
    res.render("otrosProyectos");
    console.log("Rendering otrosProyectos.ejs") 
})