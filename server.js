// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();
var PORT = process.env.PORT || 8080;

//Use morgan and body parser
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('./public/'));

//database stuff
var promise = mongoose.connect('mongodb://localhost/ProjectSideline', {
    useMongoClient: true
});
var db = mongoose.connection;
//show errors
db.on('error', function(error) {
    console.log('mongoose error: ', error);
});

db.once('open', function() {
    console.log('mongoose connection successful.');
});

//Routes
app.get('/', function(req,res) {
    if (err) {
        console.log(err);
    }else {
        console.log('hey');
        res.send('./public');
    }
});
app.listen(PORT, function(){
        console.log("App is running on port" + PORT);
    });

