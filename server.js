const mongoose = require("mongoose");
const username = "Djurdja";
const password = "asdf1234";
const cluster = "cluster0";
const dbname = "myFirstDatabase";
const express = require("express");
const app = express();

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

module.exports = app;
