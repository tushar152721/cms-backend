const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    mobileNo: {
        type: String
    },
    address:[
        {
        officeName:{
            type: String,
        },
        officeAddress:{
            type:String
        }
    }],
    isDeleted:{
        type:Boolean,
        default:false
    }
});

const contactModel = mongoose.model('contact', contactSchema);
module.exports = contactModel;