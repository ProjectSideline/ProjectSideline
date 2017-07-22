// Requirements mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create Contact schema
var Contact = new Schema({
        name        : { type: String, required : true },
        add1        : { type: String, required : true },
        add2        : { type: String, required : true },
        city        : { type: String, required : true },
        zip         : { type: Number, required : true },
        phone1      : { type: Number, required : true },
        phone2      : { type: String, required : true },
        Note        : { type: String}
    });

// Export the model
module.exports = Contact;