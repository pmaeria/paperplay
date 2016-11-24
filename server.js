const express = require('express.io')
const app = express().http().io()

// set templating engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
	res.send('<h1>Paper Play!</h1>');
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