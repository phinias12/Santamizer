var functions = require('./functions');

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use('/assets', express.static('assets'));

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', urlencodedParser, function(req, res){
    let names = req.body.name;
    let emails = req.body.email;
    console.log(emails);
    let assigned = functions.shuffle(names) 
    console.log(assigned);
    functions.email(assigned, emails);
    res.send('Santamized');
});

app.listen(3000);