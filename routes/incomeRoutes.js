const express = require("express");
const app = express.Router();
const incomeModel = require("../models/incomeModel");
const validation=require("../helper/validation");
const myLogger = require('../middlewares/logging');

app.use(myLogger);

app.get('/last-five', async(req, res)=>{
 
  try 
  {
    const exp = await incomeModel.find({}).sort({ "dateUpdated": -1}).limit(5).exec();
    res.send(exp);
    
  } catch (error)
   {
    res.status(500).send(error);
  }

});

app.post('/', async (request, response) => {
    try 
    {
      const exp = new incomeModel(request.body);
      const[whether,errorMess]=validation.validateIncome(request.body.amount,request.body.incomeGroup);
      if(whether)
      {
         await exp.save();
         response.send(exp);
      }
      else response.send(errorMess);

    } catch (error)
     {
      response.status(500).send(error);
    }
});

app.put('/:id', async(req, res) =>{

  try
  {
    const[whether,errorMess]=validation.validateIncome(req.body.amount,req.body.expenseGroup);
    if(whether)
    {
        const exp=await incomeModel.findByIdAndUpdate(req.params.id,{"name":`${req.body.name}`,
        "description":`${req.body.description}`}, {new: true});

         res.send(exp);
    }
    else res.send(errorMess);
  }
  catch (error)
  { 
     res.status(500).send(error);
  } 

});
  

app.get('/', async(req, res)=>{
 
  try 
  {
    const { page = 1, limit = 4 } = req.query;

    const[whether,errorMess]=validation.validateNumbers(page,limit);

    if(whether)
    {
      const exp = await incomeModel.find({}).limit(parseInt(limit)).skip((page-1)*limit).exec();
      res.send(exp);
    }
    else res.send(errorMess);
    
  } catch (error)
   {
    res.status(500).send(error);
  }

});

app.get('/:id', async (req, res) =>{

  try 
  {
    const exp = await incomeModel.findById(req.params.id);
    res.send(exp);
  } catch (error)
   {
    res.status(500).send(error);
  }

});


app.delete('/:id', async(req, res)=>{

try
{
 await incomeModel.findByIdAndDelete(req.params.id);
 res.send(`The object(ID: ${req.params.id}) was deleted.`);
}
catch (error)
  {
    res.status(500).send(error);
  }

});


module.exports = app;
