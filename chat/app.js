var app = require('express')(),
	server = require('http').createServer(app);


var express = require('express');
var routes = require('./routes/index');
var mustacheExpress = require('mustache-express');
var path = require('path');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');




app.use('/', routes);

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index');
});





server.listen(port);
console.log('Listening on port ' + port);
