
var net = require('net');
var http = require('http');

var client = new net.Socket();
client.connect(14150, 'speedwayr-11-a5-1d.local', function() {
	console.log('Rfid client connected');
});

client.on('data', function(data) {

	var id = data.toString();
	if(id.indexOf('E200497E95A939B13504') > -1) {
		console.log('Received: ' + id);

		// ping push server
		http.get({
		    host: 'localhost',
		    port: 7076,
		    path: '/rfid/' + id
		}, function(response) {
			console.log(response);
		});
	}
	// client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

