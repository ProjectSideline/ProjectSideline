//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var app = express(); 

// HTML Routing

app.use(logger("dev:"));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

 app.get("/", function(req,res) {
            console.log("WELCOME TO THE THUNDERDOME!");
            res.send("WELCOME TO THE THUNDERDOME!");
      
});  // Default Route

        app.get("/family",function(req,res) {
            console.log("We are Family!");
            res.send("We are Family!");
            
});  // Family get routes

         app.get("/coaches",function(req,res) {
             console.log("Life is a game of inches!");
             res.send("Life is a game of inches!");

});  // Coaches get routes   

        app.get("/game",function(req,res) {
            console.log("What's happening!");
            res.send("What's happening!");
         
});  // events get routes   
        
        app.get("/teams",function(req,res) {
            console.log("There is no i in team!");
            res.send("There is no i in team!");
     
});  // teams get routes   
    