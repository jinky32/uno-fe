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

////start of final part
//module.exports = (function() {
//
//    var router = require('express').Router();
//
//    router.get('/', function(req, res){
//        res.render('default', {title:'Home', body: 'Datatest'});
//    });
//
//    router.get ('/about-us', function(req, res){
//        res.send('<h1>Stuart testing headless drupal</h1>')
//    });
//
//    router.get ('/about-us/:name?', function(req, res){
//        var name = req.params.name;
//        res.send('<h1>' +name + '</h1>About text');
//    });
//
//    router.get ('*', function(req, res){
//        res.send('<h1>404</h1>');
//    });
//
//    return router;
//
//})();
////end of final part


/* GET blog details page*/


//router.get('/blog/:blogid', function(req, res, next){
//    //place json data in a var
//    var blogsdata = req.app.locals.blogsdata;
//
//    // create array
//    var blogItem = [];
//
//    // Check and build the current url
//    var currentURL = '/blog/' + req.params.blogid;
//
//    //Loop through json data and pick correct blog post based on current url
//    blogsdata.forEach(function(item){
//        if (item.title ==currentURL){
//            blogItem = item;
//        }
//    });
//
//    if (blogItem.length == 0){
//        //render 404
//        res.render('404', {
//            title: '404',
//            body: '404'
//        });
//
//    } else {
//        //render the blog page
//        res.render('blog-detail', {
//            blog:blogItem
//        });
//    }
//
//});

module.exports = (function() {

    var router = require('express').Router();

    router.get('/blog/:blogid', function(req, res, next) {
        //place json data in a var
        var blogsdata = req.app.locals.blogsdata;

        // create array
        var blogItem = [];

        // Check and build the current url
        var currentURL = '/blog/' + req.params.blogid;

        //Loop through json data and pick correct blog post based on current url
        blogsdata.forEach(function (item) {
            if (item.title == currentURL) {
                blogItem = item;
            }
        });

        if (blogItem.length == 0) {
            //render 404
            res.render('404', {
                title: '404',
                body: '404'
            });

        } else {
            //render the blog page
            res.render('blog-detail', {
                blog: blogItem
            });
        }
    })
        return router;
})();