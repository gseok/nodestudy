var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80);

console.log('Server running');

/*
var express = require('express');
var app = express();

app.get('/', function(req, res){
	console.log( __dirname );
	res.sendfile( __dirname + '/helloworld/bin/index.html' );
});

app.listen(8080);

console.log('> http server has started on port 8080');
*/