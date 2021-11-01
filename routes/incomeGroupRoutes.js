const express = require("express");
const app = express.Router();
const myLogger = require('../middlewares/logging');

const incomeGroupController=require("../controllers/incomeGroupController");

app.use(myLogger);


app.route('/')
.post(incomeGroupController.createIncomeGroup)
.get(incomeGroupController.getAllIncomeGroups);

app.route('/:id')
.get(incomeGroupController.getIncomeGroupById)
.put(incomeGroupController.updateIncomeGroup)
.delete(incomeGroupController.deleteIncomeGroup);



module.exports = app;

