var functions = require('./functions');

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use('/assets', express.static('assets'));
const port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', urlencodedParser, function(req, res){
    let names = req.body.name;
    let emails = req.body.email;
    let assigned = functions.shuffle(names);
    functions.email(names, assigned, emails);
    res.sendFile(__dirname + '/submit.html');
});

app.listen(port, () => {
    console.log(`Starting server at ${port}`)
});