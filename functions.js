require('dotenv').config()
const accountSid = process.env.ACCOUNT_ID; 
const authToken = process.env.API_TOKEN;
const client = require('twilio')(accountSid, authToken); 

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

// Texting Function
var text = function(names, assigned, texts){
    for (var i = 0; i < names.length; i++){
        client.messages 
            .create({  
                body: 'Hey there '+ names[i] + '! You\'re gonna be the Santa Clause for ' + assigned[i] + '. Happy Holidays!',
                from: process.env.PHONE,       
                to: texts[i] 
            }) 
            .then(message => console.log(message.sid)) 
            .done();
    }
};

module.exports = {
    shuffle: shuffle,
    text: text
};

