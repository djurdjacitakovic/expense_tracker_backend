const express = require("express");
const app = express.Router();
const myLogger = require('../middlewares/logging');

const incomeController=require("../controllers/incomeController");

app.use(myLogger);

app.route('/last-five')
.get(incomeController.getLastFiveIncomes);

app.route('/')
.post(incomeController.createIncome)
.get(incomeController.getAllIncomes)

app.route('/:id')
.get(incomeController.getIncomeById)
.put(incomeController.updateIncome)
.delete(incomeController.deleteIncome);


module.exports = app;

