const User = require("../Models/User");
const SendEmail = require("./SendEmail");
exports.handleUserSignIn = (req, res) => {
    console.log("Value of req.body is ", req.body)
    const newUser = new User(req.body);
    newUser.save(async function (err, data) {
        if (err) { res.status(500).json({ "UserSignIn_Status": "failure", error: err }) }
        else {
            console.log("New User Created is ", data)
            var template = process.cwd() + "/views/AuthEmail.jade";
            await SendEmail.sendJadeTemplate(data.email, "UserAuthenticate",{title:"UserAuthorization"}, template)
            res.status(200).json({ "UserSignIn_Status": "success", newUserr: data })
        }
    })
}