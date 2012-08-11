console.log('> Server running');

var express = require('express');
var app = express();

console.log( __dirname );
app.get('/', function(req, res){
	res.sendfile( __dirname + '/helloworld/bin/index.html' );
});

app.get('/ppt/chap1/', function(req, res){
	res.sendfile( __dirname + '/ppt/chap1/chap1.html' );
});

app.param('cssname');
app.get('/ppt/chap1/themes/:cssname', function(req, res){
	console.log( req.params.cssname );
	res.sendfile( __dirname + '/ppt/chap1/themes/'+ req.params.cssname );
});
app.get('/ppt/chap1/themes/ribbon/styles/:cssname', function(req, res){
	console.log( req.params.cssname );
	res.sendfile( __dirname + '/ppt/chap1/themes/ribbon/styles/'+ req.params.cssname );
});

app.param('resource');
app.get('/ppt/chap1/pictures/:resource', function(req, res){
	console.log( req.params.resource );
	res.sendfile( __dirname + '/ppt/chap1/pictures/'+ req.params.resource );
});

app.listen(80);

console.log('> http server has started on port 80');
console.log('> app.routes is');
console.log(app.routes);