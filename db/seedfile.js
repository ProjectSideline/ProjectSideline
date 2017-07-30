var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/sideline");
var db = mongoose.connection;
db.on("error", function(error) {
    console.log("mongoose Error: ",error);
});
db.once("openUri",function() {
    console.log("Mongoose Connection Successful.")
});
var models = require("../models/appmodels.js");

var outPut = {};
outPut.coName = "Mom";
outPut.phone1 = 9198675309;
outPut.fname  = "Shabba";
outPut.lname  = "Ranks";
outPut.dateOfbirth = 01/01/1973;
outPut.jerseyNumbr = 24;
outPut.starter = false;
outPut.present = true;
outPut.snaps = 0;

var rekord = new models.Players(outPut);
 rekord.save(function(err,doc)  { 
         if(err){
              console.log(err);
           }    
                else {
         console.log(doc+" - "+rekord+" Write Complete. "+rekord.name+" Is in the DB.");
                        }
             }); 

var outPut = {};
outPut.coName = "Mooma";
outPut.phone1 = 9198675309;
outPut.fname  = "Curtty";
outPut.lname  = "Ranks";
outPut.dateOfbirth = 01/01/1973;
outPut.jerseyNumbr = 24;
outPut.starter = false;
outPut.present = true;
outPut.snaps = 0;

 rekord.save(function(err,doc)  { 
         if(err){
              console.log(err);
           }    
                else {
         console.log(doc+" - "+rekord+" Write Complete. "+rekord.name+" Is in the DB.");
                        }
             }); 