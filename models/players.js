// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Player schema



var Player = new Schema({
        fname       :{ type: String, required : true },
        lname       :{ type: String, required : true },
        dateOfbirth :{ type: Date, required:true },
        jerseyNumbr :{ type: String, required : true },
        snaps       :{ type: Number, required : true },
        info        :{ type: Contact.schema}
}); 


var Player  = mongoose.model("Player", PlayerSchema);
var Contact = mongoose.model("Contact", ContactSchema);

// Export the model
module.exports = Player;
