//POST method
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var url = bodyParser.urlencoded({extended: false});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
});

app.post('/', function(req,res) {
    res.send('<h1>Welcome ' + req.body.name + '</h1><br><h2>Email ID: ' + req.body.email + '</h2>');
});
app.listen(8080);



//GET method

// var express = require('express');
// var app = express();

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/' + 'index.html');
// });

// app.get('/home', function(req, res) {
//     res.send('<h1>Welcome ' + req.query['name'] + '</h1><br><h2>Email ID: ' + req.query['email'] + '</h2>');
// });

// app.listen(8080);