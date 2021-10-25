const express = require("express");

const app = express.Router();

app.use(express.json())

const expenseGroupModel = require("../models");

app.post("/test", async (request, response) => {
    const exp = new expenseGroupModel(request.body);
  
    try {
      await exp.save();
      response.send(exp);
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app;

