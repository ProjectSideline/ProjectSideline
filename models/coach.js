// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Player = require("./player.js")

// Create Player schema
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

var Player = mongoose.Schema({
        fname       :{ type: String, required : true,},
        lname       :{ type: String, required : true},
        dateOfbirth :{ type: Date, required : true },
        jerseyNumbr :{ type: String, required : true, unique:true},
        starter     :{ type: Boolean, required: true},
        snaps       :{ type: Number, required : true},
        info        :{ type: Contact}
}); 

var Coach = new Schema({
        fname       : { type: String, required : true,},
        lname       : { type: String, required : true},
        email       : { type: String},
        phone1      : { type: Number, required : true },
        phone2      : { type: String, required : true },
        team        : { type: [Player.schema]}
}); 


// Create the coach model with the coach schema
var Coach = mongoose.model("Coach", Coach);
// Export the user model
module.exports = Coach;