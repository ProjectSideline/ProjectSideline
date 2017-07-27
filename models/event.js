// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Contact = require("./contact.js");
var Player = require("./player.js");

var Player = new Schema({
        fname       :{ type: String, required : true,},
        lname       :{ type: String, required : true},
        dateOfbirth :{ type: Date, required : true },
        jerseyNumbr :{ type: String, required : true, unique:true},
        starter     :{ type: Boolean, required: true},
        snaps       :{ type: Number, required : true},
        info        :{ type: Contact}
}); 



var Event = mongoose.Schema({
        edate       : {type: Date, required: true},           
        team        : {type: [Player]},
        venue       : {type: Contact}
}); 





var Event = mongoose.model("Events", Event);
// Export the model

module.exports = Event;