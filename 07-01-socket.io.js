var http = require('http');
var fs = require('fs');


// loading the index file. html is displayed to the client
var server = http.createServer( function (req,res) {
	
	fs.readFile('./index.html','utf-8', function (error,content) {
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(content);
	});
});

// loading socket.io 
var io = require('socket.io').listen(server);

// when a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
	/*
	 *connection confirmation 
	 */
	console.log('A client is connected!');	
	socket.emit('message','You are connected!');
	socket.emit('message', { content: 'hi javier, sent with object', importance: '1' });

	socket.on('message', function (message) {
		console.log('A client is speaking to me. They\'re saying: ', message);
	});
});

server.listen(8080);
