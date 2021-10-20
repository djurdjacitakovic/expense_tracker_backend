const express = require("express");
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('hello world')
});

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



