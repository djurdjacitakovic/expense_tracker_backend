const express = require("express");
const app = express.Router();


app.post('/expense-groups', function (req, res) {
    res.send('Got a POST request')
  });
  
  app.get('/expense-groups', function (req, res) {
    res.send('expense groups GET')
  });
  
  app.put('/expense-groups', function (req, res) {
    res.send('Got a PUT request at /expense-groups')
  });
  
  
  app.delete('/expense-groups', function (req, res) {
    res.send('Got a DELETE request at /expense-groups')
  });

  module.exports = app;
