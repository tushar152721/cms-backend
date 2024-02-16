const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://amitjoshi:Dealing%40123@cluster0.vjxa6ad.mongodb.net/collage');

const db = mongoose.connection;
function dbCalling(){
    try{
        db.once('open', () => {
        console.log('Connected to MongoDB');
        });
    }
    catch(error){
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    }
}
dbCalling();