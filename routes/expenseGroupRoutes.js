const express = require("express");
const app = express.Router();
const myLogger = require('../middlewares/logging');

const expenseGroupController=require("../controllers/expenseGroupController");

app.use(myLogger);


app.route('/')
.post(expenseGroupController.createExpenseGroup)
.get(expenseGroupController.getAllExpenseGroups);

app.route('/:id')
.get(expenseGroupController.getExpenseGroupById)
.put(expenseGroupController.updateExpenseGroup)
.delete(expenseGroupController.deleteExpenseGroup);



module.exports = app;

