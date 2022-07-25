var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log('Middleware executed');
    next();
});

app.get('/', function(req, res, next) {
    console.log('Welcome');
    res.send('Hello World');
    next();
});

app.use('/', function(req, res, next) {
    console.log('Middleware ended');
});

app.listen(8000);
