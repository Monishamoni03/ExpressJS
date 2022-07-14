var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   res.send('Welcome World');  
})  
app.listen(8001);