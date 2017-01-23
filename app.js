var express = require('express');
var app = express();

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(__dirname + '/index.html');
});

app.listen(9000, function () {
  console.log('App listening on port 9000!');
});
