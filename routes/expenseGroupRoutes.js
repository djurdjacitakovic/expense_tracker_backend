const express = require("express");
const app = express.Router();


app.post('/', function (req, res) {
    res.send('Got a POST request')
  });
  
  app.get('/', function (req, res) {
    res.send('expense groups GET')
  });
  
  app.get('/:userId', function (req, res) {
    res.send(`expense groups GET, userId:${req.params.userId}`)
  });

  app.put('/', function (req, res) {
    res.send('Got a PUT request at /expense-groups')
  });
  
  app.put('/:userId', function (req, res) {
    res.send(`Got a PUT request at /expense-groups, userId:${req.params.userId} `)
  });
  
  app.delete('/', function (req, res) {
    res.send('Got a DELETE request at /expense-groups')
  });

  app.delete('/:userId', function (req, res) {
    res.send(`Got a DELETE request at /expense-groups, userId:${req.params.userId}`)
  });

  module.exports = app;
