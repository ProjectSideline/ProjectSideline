mongoose.connect("mongodb://localhost/sideline");
var db = mongoose.connection;
db.on("error", function(error) {
    console.log("mongoose Error: ",error);
});
db.once("open",function() {
    console.log("Mongoose Connection Successful.")
});

require("../models/appmodels.js");



