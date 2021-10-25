const port = 3000;
const express = require("express");
const Router = require("./routes/expenseGroupRoutes")
const Server = require("./server")
const app = express();

app.get('/', function (req, res) {
  res.send('hello world')
});

app.use(express.json());

app.use(Server);
app.use('/expense-groups',Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;

