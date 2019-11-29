var nodemailer = require('nodemailer');
require('dotenv').config()

// Shuffling functions
var shuffle = function(arr) {
    let copy = arr.slice()

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }

    return copy;
};

// Emailing function
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

var email = function(names, assigned, emails) {
    for (var i = 0; i < names.length; i++){
        var mail = {
            from: process.env.GMAIL_USER,
            to: emails[i],
            subject: 'You\'re Secret Santa Encased!',
            text: 'Hey ' + names[i] + ',\n\n You\'re assigned to ' + assigned[i] + '.'
        };

        transporter.sendMail(mail, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
};

module.exports = {
    shuffle: shuffle,
    email: email
};

