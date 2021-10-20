const port = 3000;
const express = require("express");
const app = express();


app.get('/', function (req, res) {
  res.send('hello world')
});

var expenseGroupRoutes = require('./routes/expenseGroupRoutes');


app.use('/expenseGroupRoutes',expenseGroupRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

