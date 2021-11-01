const express = require("express");
const app = express.Router();
const myLogger = require('../middlewares/logging');

const incomeController=require("../controllers/incomeController");

app.use(myLogger);

app.route('/last-five').get(incomeController.getLastFiveIncomes);
app.route('/').post(incomeController.createIncome);
app.route('/').get(incomeController.getAllIncomes);
app.route('/:id').get(incomeController.getIncomeById);
app.route('/:id').put(incomeController.updateIncome);
app.route('/:id').delete(incomeController.deleteIncome);

module.exports = app;

