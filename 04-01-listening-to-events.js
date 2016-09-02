var http = require('http');

//var server = http.createServer(function(req, res) {
  //res.writeHead(200);
  //res.end('Hi everybody!');
//});

// Equivalent code to the previous one
var server = http.createServer();
server.on('request', function(req, res) {
  res.writeHead(200);
  res.end('Hi everybody!');
});
server.on('close', function() { // We listened to the close event
    console.log('Goodbye!');
})

server.listen(8080); // Starts the server

server.close(); // Stops the server. Triggers the close event


/*
 *Emitting events
 */
var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

game.on('gameover', function(message){
    console.log(message);
});

game.emit('gameover', 'You lose!');
