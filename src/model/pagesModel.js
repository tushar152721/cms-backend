const mongoose = require("mongoose");

const pagesSchema = new mongoose.Schema({
    pagename: {
        type: String,
    },
    slug: {
        type: String
    },
    bannercontent: {
        type: String
    },
    contectNumber: {
        type: String
    },
    contentTitle: { 
        type: String
    },
    bannar : [{
        project:{
            type:String
        },
        established: {
            type: String
        },
        regions: {
            type: String
        },
        image:{
            type:String
        }
    }],
    projects:[
        {
        title :{
            type: String,
        },
        description:{
            type:String
        }
    }],
    isDeleted:{
        type:Boolean,
        default:false
    }
});

const pagesModel = mongoose.model('pages', pagesSchema);
module.exports = pagesModel;