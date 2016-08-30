var http = require('http');

//var server = http.createServer(function(req, res) {
	//res.writeHead(200);
	//res.end('Hi everybody!');
//});

// Code exactly the same as the previous one
var instructionsNewVisitor = function(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('<p>Here is a paragraph of <strong>HTML</strong>!</p>');
}

var server = http.createServer(instructionsNewVisitor);

server.listen(8080);
