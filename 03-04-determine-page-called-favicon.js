var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	console.log(page);
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write('Try to load bogus pages in URL then look at console for server and client. You\'ll see the URL path update.');
	res.end();
});
server.listen(8080);
