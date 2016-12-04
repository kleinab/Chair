require('dotenv').config();

var express = require('express');


// mongo database

require('./app/config/mongo-database');


// express server

var app = express();


app.use(express.static('static'));

var server = app.listen(3001, function() {
  var port = server.address().port;
  console.log("Started server at port", port);
});
