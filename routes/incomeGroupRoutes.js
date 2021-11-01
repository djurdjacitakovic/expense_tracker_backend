const express = require("express");
const app = express.Router();
const myLogger = require('../middlewares/logging');

const incomeGroupController=require("../controllers/incomeGroupController");

app.use(myLogger);


app.route('/').post(incomeGroupController.createIncomeGroup);
app.route('/').get(incomeGroupController.getAllIncomeGroups);
app.route('/:id').get(incomeGroupController.getIncomeGroupById);
app.route('/:id').put(incomeGroupController.updateIncomeGroup);
app.route('/:id').delete(incomeGroupController.deleteIncomeGroup);


module.exports = app;

