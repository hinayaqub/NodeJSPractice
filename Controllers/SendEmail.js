const nodemailer = require("nodemailer");
const fs = require("fs");
const _jade = require("jade");
var transport = nodemailer.createTransport({
    host: "smtp.gmail.io",
    port: 465,
    auth: {
        user: "hina54796@gmail.com",
        pass: "Yaqoobhina$123",
    }
});

var SendEmails = function (to, subject, html) {
    transport.sendMail({ to: to, subject: subject, html: html }, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ', info.messageId);
    });
}

exports.sendJadeTemplate = function (to, subject, context, template) {
    fs.readFile(template, 'utf8', function (err, file) {
        if (err) {
            console.log('Error');
        } else {
            var compiledTmpl = _jade.compile(file, { filename: template });
            var html = compiledTmpl(context);

            SendEmails(to, subject, html, function (err, response) {
                if (err) {
                    console.log('ERROR!');
                } else {
                    console.log('Hi everyOne!Template send Successfully');
                }
            });
        }
    });
}