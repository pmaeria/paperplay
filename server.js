var express = require('express.io');
var app = express().http().io();
var bodyParser = require('body-parser');

var _ = require('lodash');

// set templating engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(bodyParser());
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
	res.send('<h1>Paper Play!</h1>');
});


app.post('/', function(req, res) {
	// console.log('rfid post', req.body);
	var values = req.body.field_values.replace(/\"/g, '');
	var ids = values.split('\n');
	
	var filtered = ids.filter(function(id) {
		return id.indexOf('E200497E95A') > -1;
	});

	if(filtered.length > 0) {
		var uniqueIds = _.uniq(filtered);
		console.log('rfid unique', uniqueIds);

		// broadcast an array of unique rfids triggered
		app.io.broadcast('rfid', uniqueIds);
	}

	res.send('ok');
});


// example pug view
app.get('/testview', function(req, res) {
	res.render('testview', {});
});


// Send client html.
app.get('/example', function(req, res) {
    res.sendfile(__dirname + '/example.html');
});
app.get('/horses', function(req, res) {
    res.sendfile(__dirname + '/horses.html');
});

app.get('/lion', function(req, res) {
    res.sendfile(__dirname + '/lion.html');
});

// broadcast rfid tag id to clients
app.get('/rfid/:id', function(req, res) {
	app.io.broadcast('rfid', req.params.id);
	res.send('received');
});

app.listen(7076, function () {
  console.log('Example app listening on port 7076!')
});