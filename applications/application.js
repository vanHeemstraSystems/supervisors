var express = require('express');
var server = express();
var logger = require('morgan');

server.use(express.static(__dirname + '/../publications'));
server.use(logger('combined'));

server.get('/', function(req, res) {  	
	res.end('Hello word!');
});

server.get('*', function(req, res) {
  	res.status(404).send('Not Found!');
});

server.use(function(err, req, res, next) {  	
  	res.status(500).send('Something broke!');
	console.error(err.stack);
});

var host = process.argv[2] || '0.0.0.0';
var port = process.argv[3] || '5000';

server.listen(port, host);
console.log('Listening on port ' + port);