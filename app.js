const express = require("express");
const expenseGroupRouter = require("./routes/expenseGroupRoutes");
const incomeGroupRouter = require("./routes/incomeGroupRoutes");
const expenseRouter = require("./routes/expenseRoutes");
const incomeRouter = require("./routes/incomeRoutes");
const app = express();
const mongoose = require("mongoose");
const config = require('./config');

app.get('/', function (req, res) {
  res.send('hello world')
});

const { db: { username, password, cluster, dbname } } = config;

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.hy0bu.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());

app.use('/expense-groups',expenseGroupRouter);
app.use('/income-groups',incomeGroupRouter);
app.use('/expense',expenseRouter);
app.use('/income',incomeRouter);

app.listen(config.app.port, () => {
  console.log(`Example app listening at http://localhost:${config.app.port}`);
});

module.exports = app;

