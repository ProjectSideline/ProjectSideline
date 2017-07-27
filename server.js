// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Models 
var Player = require("./models/player.js");
var Event = require("./models/event.js");
var Coach = require("./models/coach.js");

// Init & config express 
var app = express(); 
app.use(logger("dev:"));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public")); // Public Dir

// // Routes 
require('./routes/api-routes.js')(app);

//Mongoose 
mongoose.connect("mongodb://localhost/sideline");
var db = mongoose.connection;
db.on("error", function(error) {
    console.log("mongoose Error: ",error);
});
db.once("open",function() {
    console.log("Mongoose Connection Successful.")
});

app.listen(3000, function() {
  console.log("App running on port 3000!");
});