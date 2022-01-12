var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World this new push in master branch! v1 with pipeline v1 only push in server. docker image is not created');
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
