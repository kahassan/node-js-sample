var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 
 buf = new Buffer(256);
 var fs = require('fs');
 fs.readFileSync();
 fs.toString("utf-8", 0, 12);
 response.send(fs);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
