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

app.param('name');
app.get('/ppt/chap1/scripts/:name', function(req, res){
	console.log( req.params.name );
	res.sendfile( __dirname + '/ppt/chap1/scripts/'+ req.params.name );
});
app.get('/ppt/chap1/themes/:name', function(req, res){
	console.log( req.params.name );
	res.sendfile( __dirname + '/ppt/chap1/themes/'+ req.params.name );
});
app.get('/ppt/chap1/themes/ribbon/styles/:name', function(req, res){
	console.log( req.params.name );
	res.sendfile( __dirname + '/ppt/chap1/themes/ribbon/styles/'+ req.params.name );
});
app.get('/ppt/chap1/themes/ribbon/images/:name', function(req, res){
	console.log( req.params.name );
	res.sendfile( __dirname + '/ppt/chap1/themes/ribbon/images/'+ req.params.name );
});
app.get('/ppt/chap1/themes/ribbon/fonts/:name', function(req, res){
	console.log( req.params.name );
	res.sendfile( __dirname + '/ppt/chap1/themes/ribbon/fonts/'+ req.params.name );
});
app.get('/ppt/chap1/pictures/:name', function(req, res){
	console.log( req.params.name );
	res.sendfile( __dirname + '/ppt/chap1/pictures/'+ req.params.name );
});

app.listen(80);

console.log('> http server has started on port 80');
console.log('> app.routes is');
console.log(app.routes);