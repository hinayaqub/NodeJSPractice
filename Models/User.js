const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const UserSchmea = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true

    }

})


UserSchmea.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, (err, hashedPassword) => {
        if (err) { next(err) }
        else { user.password = hashedPassword; next(); }
    })
})
module.exports = mongoose.model("User", UserSchmea)