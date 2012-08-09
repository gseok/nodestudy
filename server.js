var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendfile( __dirname + '/index.html' )
});

app.listen(8080);

console.log('> http server has started on port 8080');
