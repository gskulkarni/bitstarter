var express = require('express');
var fs = require('fs');

var content = fs.readFileSync("index.html");
var buffer = new Buffer(content, "utf-8");
var output = buffer.toString("utf-8", 0, 12);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
