// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Event = new Schema({
        edate       : {type: Date, required: true},           
        team        : {type: [Player.schema]},
        location    : {type: Contact.schema}
}); 

var Event = mongoose.model("Events", Event);
// Export the model

module.exports = Event;