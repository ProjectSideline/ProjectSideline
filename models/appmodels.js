// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Player schema

var     Player = new Schema({
        coName      :   { type: String, required : true },   
        phone1      :   { type: Number, required : true },     
        fname       :   { type: String, required : true,},
        lname       :   { type: String, required : true},
        dateOfbirth :   { type: Date, required : true },
        jerseyNumbr :   { type: String, required : true, unique: true},
        starter     :   { type: Boolean, required: true},
        present     :   { type: Boolean, required: true},
        snaps       :   { type: Number, required : true},
}); 

// Create Lineup - An array of players plus game date

var     Lineup = new Schema ({
        Date       : { type: Date, required : true },
        gameLineup : { type:[Player]}
}); 

var     Coach = new Schema({
        fname       : { type: String, required : true,},
        lname       : { type: String, required : true},
        email       : { type: String},
        phone1      : { type: Number, required : true },
        phone2      : { type: String, required : true },
        team        : { type: [Player]}
}); 

var Player  = mongoose.model("Player", Player);
var Coach  = mongoose.model("Coach", Coach);
var Lineup  = mongoose.model("Lineup", Lineup);

// Export the model
module.exports = Lineup;
module.exports = Player;
module.exports = Coach;