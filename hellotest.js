var http = require('http');

var myServer = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write(" Hello Test Node");
    response.end();
});

myServer.listen(2000); // create server

