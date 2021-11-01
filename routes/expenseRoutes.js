const express = require("express");
const app = express.Router();
const myLogger = require('../middlewares/logging');

const expenseController=require("../controllers/expenseController");

app.use(myLogger);

app.route('/last-five').get(expenseController.getLastFiveExpenses);
app.route('/').post(expenseController.createExpense);
app.route('/').get(expenseController.getAllExpenses);
app.route('/:id').get(expenseController.getExpenseById);
app.route('/:id').put(expenseController.updateExpense);
app.route('/:id').delete(expenseController.deleteExpense);

module.exports = app;

