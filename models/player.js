// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
require("./contact.js");

// Create Player schema

// var Contact = mongoose.model("Contact", ContactSchema);
var Contact = new Schema({
        coName      : { type: String, required : true },
        add1        : { type: String, required : true },
        add2        : { type: String, required : true },
        city        : { type: String, required : true },
        state       : { type: Number, required : true },
        zip         : { type: Number, required : true },
        email       : { type: String},
        cUrl        : { type: String},
        phone1      : { type: Number, required : true },
        phone2      : { type: String, required : true },
        Note        : { type: String}
    });

var Player = new Schema({
        coName      : { type: String, required : true },   
        phone1      : { type: Number, required : true },     
        fname       :{ type: String, required : true,},
        lname       :{ type: String, required : true},
        dateOfbirth :{ type: Date, required : true },
        jerseyNumbr :{ type: String, required : true, unique:true},
        starter     :{ type: Boolean, required: true},
        present     :{ type: Boolean, required: true},
        snaps       :{ type: Number, required : true},
}); 

// Export the model
var PlayerSchema = Player;
var Player  = mongoose.model("Player", Player);

module.exports = PlayerSchema;
module.exports = Player;