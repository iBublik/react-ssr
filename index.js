require('babel-register');

var result = require('./render.jsx').default;

var express = require('express');
var application = express();

application.get('/', function(req, res) {
  res.send(result);
});

application.listen(3005);
