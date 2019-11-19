var nodemailer = require('nodemailer');
require('dotenv').config()

// Shuffling functions
var shuffle = function(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr
};

// Emailing function
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

var email = function(names, emails) {
    for (var i = 0; i < names.length; i++){
        var mail = {
            from: process.env.GMAIL_USER,
            to: emails[i],
            subject: 'You\'re Secret Santa Encased!',
            text: 'Hey ' + emails[i] + ',\n\n You\'re assigned to ' + names[i] + '.'
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

