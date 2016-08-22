var http = require('http');
var url = require('url');

var determinePage = function(page,res){
	if (page == '/') {
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write('You\'re at the reception desk. How can I help you?');
	}
	else if (page == '/basement') {
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write('You\'re in the wine cellar. These bottles are mine!');
	}
	else if (page == '/floor/1/bedroom') {
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.write('Hey, this is a private area!');
	}
	else{
		res.write('Page is not available');
		res.writeHead(404);
	}
};

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	console.log(page);
	determinePage(page, res);
	res.end();
});
server.listen(8080);
