var express = require('express');
var app = express();
var routes = require('./routes/index');
var request = require('request');
var blogsurlall = "http://www.pickingorganic.org/blogsexportall";

app.set('view engine','ejs');

var server = app.listen (2000, function(){
    console.log('Waiting for you on port 2000');
});

request({
    url:blogsurlall,
    json:true
}, function(error, response, body){
    if (!error && response.statusCode===200) {
        blogsdata_all = body;
    }

    var blogs = [];

    blogsdata_all.blogs.forEach(function(item){
        blogs = blogs.concat(item);
    });

    app.locals.blogsdata = blogs;
})

app.use('/', routes);

