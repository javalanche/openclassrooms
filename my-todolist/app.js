var express = require('express');
var session = require('cookie-sessoin'); // loads the piece of middleware for the session
var bodyParser	= require('body-parser'); // loads the piece of middleware for managing the settings
var urlencodedParser = bodyParser.urlencoded(
	{
		extended:false
	}
);

var app = express();

/*
 *Using sessions 
 */
app.use(session({
	secret: 'todotopsecret'
}))

.get('/todo', function(req,res){
	res.setHeader('Content-type','text/plain');
	res.end();
})
.post('/todo/add', function(req,res){
	res.setHeader('Content-type','text/plain');
	res.end();
})
.get('/todo/delete/:id', function(req,res){
	res.setHeader('Content-type','text/plain');
	res.end();
})
.use(function(req,res,next)[
	res.setHeader('Content-type','text/plain');
])
;
