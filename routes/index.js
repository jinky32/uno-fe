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