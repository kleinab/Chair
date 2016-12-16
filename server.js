require('dotenv').config();

var express = require('express');


// mongo database

require('./app/config/mongo-database');


// express server

var app = express();

app.use(express.static('static'));

const users = [
  {id: 1, name: 'Abby'},
  {id: 2, name: 'Tyler'},
];

const questions = [
  {id: 1, question: 'When is the last time you cried?'},
  {id: 2, question: 'What is your relationship with your parents?'},
  {id: 3, question: 'When is the last time you felt proud of yourself?'},
];

const Data = {
  users,
  questions,
};

app.get('/api/data', function(req, res) {
  res.status(200).json(Data);
});

var server = app.listen(3001, function() {
  var port = server.address().port;
  console.log("Started server at port", port);
});
