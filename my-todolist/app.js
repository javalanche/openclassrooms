var express = require('express');
var session = require('cookie-session'); // loads the piece of middleware for the session
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

.use(function(req,res,next){
	if (typeof(req.session.todolist) == 'undefined') {
		req.session.todolist = [];
	}
	next();
})

.get('/todo', function(req,res){
	//res.setHeader('Content-type','text/plain');
	res.render('todo.ejs',{todolist: req.session.todolist});
	//res.status(200).send('everything good, homey');
	//res.end();
})
.post('/todo/add', urlencodedParser, function(req,res){
	//res.setHeader('Content-type','text/plain');
	console.log("here is the req", req.body);
	if (req.body.newtodo != '') {
		req.session.todolist.push(req.body.newtodo);
	}
	res.redirect('/todo');
	//res.end();
})
.get('/todo/delete/:id', function(req,res){
	//res.setHeader('Content-type','text/plain');
	if (req.params.id != '') {
		req.session.todolist.splice(req.params.id, 1);
	}
	res.redirect('/todo');
	//res.end();
})
.use(function(req,res,next){	
	//res.setHeader('Content-type','text/plain');
	res.redirect('/todo');
})
.listen(8080)
;
