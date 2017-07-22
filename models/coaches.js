// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Player schema

var Address = new Schema({
        name        : String, required,
        phone1      : String, required,
        phone2      : String, required,
        add1        : String, required,
        add2        : String, required,
        city        : String, required,
        zip         : Number, required,
        Note        : String, required 
    });

var Player = new Schema({
        name        : String, required,
        numbr       : String, required,
        snaps       : Number,
        info        : Address,
}); 

var Player  = mongoose.model("Player", PlayerSchema);
var Address = mongoose.model("Address", PlayerSchema);

// Export the model
module.exports = Player;
module.exports = Address; 


// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the user model
module.exports = User;
