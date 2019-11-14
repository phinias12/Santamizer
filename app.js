var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', urlencodedParser, function(req, res){
    console.log(req.body);
    res.send('Santamized');
});

app.listen(3000);