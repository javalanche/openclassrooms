var express = require('express');

var app = express();

//app.get('/', function(req, res) {
	//res.setHeader('Content-Type', 'text/plain');
	//res.end('You\'re in reception. How can I help you?');
//});

//app.get('/basement', function(req, res) {
	//res.setHeader('Content-Type', 'text/plain');
	//res.end('You\'re in the wine cellar. Those bottles are mine!');
//});

//app.get('/floor/1/bedroom', function(req, res) {
	//res.setHeader('Content-Type', 'text/plain');
	//res.end('Hey, this is a private area!');
//});

//app.use(function(req, res, next){ // ...All the route management code (app. get) is above
	//res.setHeader('content-type', 'text/plain');
	//res.status(404).send('page cannot be found!')
//});

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('You\'re in reception. How can I help you?');
})
.get('/basement', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('You\'re in the wine cellar. Those bottles are mine!');
})
//.get('/floor/:floornum/bedroom', function(req, res) {
    //res.setHeader('Content-Type', 'text/plain');
	////res.end('You\'re in the bedroom on floor number: ' + JSON.stringify(req.params));
	//res.end('You\'re in the bedroom on floor number: ' + req.params.floornum);
//})
.get('/floor/:floornum/bedroom', function(req, res) {
    res.render('bedroom.ejs', {floor: req.params.floornum});
})
.use(function(req, res, next){
	res.setHeader('content-type', 'text/plain');
	res.status(404).send('page cannot be found!')
});

app.listen(8080);
