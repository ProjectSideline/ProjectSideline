
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Models 
// var Family = require("./models/family.js");
// var Coaches = require("./models/coaches.js");
// var Events = require("./models/events.js");
// var Teams = require("./models/teams.js");

// Init & config  express 
var app = express(); 
app.use(logger("dev:"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public")); // Public Dir

// Mongoose 
// mongoose.connect("mongod://localhost/sideline");
// var db = mongoose.connection;
// db.on("error", function(error) {
//     console.log("mongoose Error: ",error);
// });
// db.once("open",function() {
//     console.log("Mongoose Connection Successful.")
// });



// Routes 
        app.get("/family",function(req,res) {
            console.log("We are Family!");
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
            // Coaches.find({}, function(error, doc){
            //         if (error){
            //             res.send(error);
            //         } // On Family error 
            //         else {
            //             res.send(doc);
            //         }
            // }); // Find 
        });  // Coaches get routes   

        app.get("/events",function(req,res) {
            console.log("What's happening!");
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

app.listen(8075, function() {
  console.log("App running on port 8075!");
});

