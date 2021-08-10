const mongoose = require("mongoose");
const connectionStr = "mongodb+srv://hina:crazygirl@cluster0.m2bok.mongodb.net/test?authSource=admin&replicaSet=atlas-n1rtoj-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
const db = mongoose.connect(connectionStr, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(`Error while connecting to database ${err}`)
    }
    console.log("Database Connection Established Succesfully")
})

module.exports = db;