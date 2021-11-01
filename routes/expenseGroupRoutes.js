const express = require("express");
const app = express.Router();
const myLogger = require('../middlewares/logging');

const expenseGroupController=require("../controllers/expenseGroupController");

app.use(myLogger);


app.route('/').post(expenseGroupController.createExpenseGroup);
app.route('/').get(expenseGroupController.getAllExpenseGroups);
app.route('/:id').get(expenseGroupController.getExpenseGroupById);
app.route('/:id').put(expenseGroupController.updateExpenseGroup);
app.route('/:id').delete(expenseGroupController.deleteExpenseGroup);


module.exports = app;

