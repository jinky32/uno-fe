//app.set('view engine','ejs');
//app.get ('/', function(req, res){
//    res.render('default', {title:'Home', body: 'Datatest'});
//});
//
//app.get ('/about-us', function(req, res){
//    res.send('<h1>Stuart testing headless drupal</h1>')
//});
//
//app.get ('/about-us/:name?', function(req, res){
//    var name = req.params.name;
//    res.send('<h1>' +name + '</h1>About text');
//});
//
//app.get ('*', function(req, res){
//    res.send('<h1>404</h1>');
//});

//var server = app.listen (2000, function(){
//    console.log('Waiting for you on port 2000');
//});
module.exports = (function() {

    var router = require('express').Router();

    router.get('/', function(req, res){
        res.render('default', {title:'Home', body: 'Datatest'});
    });

    router.get ('/about-us', function(req, res){
        res.send('<h1>Stuart testing headless drupal</h1>')
    });

    router.get ('/about-us/:name?', function(req, res){
        var name = req.params.name;
        res.send('<h1>' +name + '</h1>About text');
    });

    router.get ('*', function(req, res){
        res.send('<h1>404</h1>');
    });

    return router;

})();



