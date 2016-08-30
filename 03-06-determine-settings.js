var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
	var params = querystring.parse(url.parse(req.url).query);
	console.log('params: ',params);
	console.log('first condidtion: ','firstname' in params);
	console.log('second condidtion: ','lastname' in params);
	res.writeHead(200, {"Content-Type": "text/plain"});
	if ('firstname' in params && 'lastname' in params) {
		res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
	}
	else {
		res.write('Enter you firs and last name like this in URL: ');
		res.write('http://localhost:8080?firstname=John&lastname=Doe');
	}
	res.end();
});
server.listen(8080);
