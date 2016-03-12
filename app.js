var express = require('express'),
    app = express(),
    port = 9000;

app.get('/', function(req, res) {
  res.send('Yey, simple app!')
})

app.listen(port, function(req, res) {
  console.log('Success!')
})