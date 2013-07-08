var express = require('express');
var fs = require('fs');
var buff = new Buffer(64);
var len = nulll;

fs.readFile('index.html', 'utf8', function (err, data) {
    if (err) {
	len = buff.write("there was a file-read error");
    }
    len = buff.write(data);
});

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
    response.send(buff.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});