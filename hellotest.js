var express = require('express');
var app = express();

app.get ('/', function(req, res){
    res.send('Hello Express');
});

app.get ('/about-us', function(req, res){
    res.send('<h1>Stuart testing headless drupal</h1>')
})

var server = app.listen (2000, function(){
    console.log('Waiting for you on port 2000');
});


