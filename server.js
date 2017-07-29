// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Models 
var Player = require("./models/player.js");
var Events = require("./models/events.js");
var Teams = require("./models/teams.js");

// Init & config express 
var app = express(); 
app.use(logger("dev:"));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public")); // Public Dir

//Mongoose 
mongoose.connect("mongodb://localhost/sideline");
var db = mongoose.connection;
db.on("error", function(error) {
    console.log("mongoose Error: ",error);
});
db.once("open",function() {
    console.log("Mongoose Connection Successful.")
});



// Routes 
 app.get("/", function(req,res) {
            console.log("WELCOME TO THE THUNDERDOME!");
            res.send("WELCOME TO THE THUNDERDOME!");
            // Family.find({}, function(error, doc){
            //         if (error){
            //             res.send(error);
            //         } // On Family error 
            //         else {
            //             res.send(doc);
            //         }
            // }); // Find 
        });  // Default Route

        app.get("/family",function(req,res) {
            console.log("We are Family!");
            res.send("We are Family!");
            // Family.find({}, function(error, doc){
            //         if (error){
            //             res.send(error);
            //         } // On Family error 
            //         else {
            //             res.send(doc);
            //         }
            // }); // Find 
        });  // Family get routes

         app.get("/coaches",function(req,res) {
             console.log("Life is a game of inches!");
             res.send("Life is a game of inches!");
            // Coaches.find({}, function(error, doc){
            //         if (error){
            //             res.send(error);
            //         } // On Family error 
            //         else {
            //             res.send(doc);   
            //         }
            // }); // Find 
        });  // Coaches get routes   

        app.get("/game",function(req,res) {
            console.log("What's happening!");
            res.send("What's happening!");
            // Events.find({}, function(error, doc){
            //                 if (error){
            //                     res.send(error);
            //                 } // On Family error 
            //                 else {
            //                     res.send(doc);
            //                 }
            //         }); // Find 
         });  // events get routes   
        
        app.get("/teams",function(req,res) {
            console.log("There is no i in team!");
            res.send("There is no i in team!");
            // Teams.find({}, function(error, doc){
            //                 if (error){
            //                     res.send(error);
            //                 } // On Family error 
            //                 else {
            //                     res.send(doc);
            //                 }
            //         }); // Find 
         });  // teams get routes   
        
        // Listen on Port 3000


app.listen(3000, function() {
  console.log("App running on port 3000!");
});
