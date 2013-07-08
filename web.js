var express = require('express');
var fs = require('fs');
var d = null;

fs.readFile('index.html', 'utf8', function (err, data) {
    if (err) {
	console.log("there was a file-read error: " + err);
    }
    d = data;
});

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    response.send(d);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});