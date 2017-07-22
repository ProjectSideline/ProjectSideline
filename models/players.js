// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Player schema

// var Contact = new Schema({
//         name        : { type: String, required : true },
//         add1        : { type: String, required : true },
//         add2        : { type: String, required : true },
//         city        : { type: String, required : true },
//         zip         : { type: Number, required : true },
//         phone1      : { type: Number, required : true },
//         phone2      : { type: String, required : true },
//         Note        : { type: String}
//     });


var Player = new Schema({
        name        :{ type: String, required : true },
        numbr       :{ type: String, required : true },
        snaps       :{ type: Number, required : true },
        info        :{ type: Contact.schema}
}); 


var Player  = mongoose.model("Player", PlayerSchema);
var Contact = mongoose.model("Contact", ContactSchema);

// Export the model
module.exports = Player;
