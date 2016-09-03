var express = require('express');

var app = express();

app.get('/count/:number', function(req, res) {
    var names = ['Robert', 'Jack', 'David'];
    res.render('page.ejs', {counter: req.params.number, names: names});
})
.use(function(req, res, next){
	res.setHeader('content-type', 'text/plain');
	res.status(404).send('page cannot be found! need to use url like this: /count/66')
});

app.listen(8080);
