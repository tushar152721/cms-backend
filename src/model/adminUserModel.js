const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    slat:{
        type:String
    }
});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;