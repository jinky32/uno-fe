var express = require('express');
var app = express();
var routes = require('./routes/index');
var request = require('request');

app.set('view engine','ejs');

var server = app.listen (2000, function(){
    console.log('Waiting for you on port 2000');
});

app.use('/', routes);

