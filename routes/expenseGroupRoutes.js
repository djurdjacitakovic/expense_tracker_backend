//const { request } = require("express");
const express = require("express");
const app = express.Router();
const expenseGroupModel = require("../models");



app.post('/', async (request, response) => {
   const exp = new expenseGroupModel(request.body);

    try 
    {
      await exp.save();
      response.send(exp);

    } catch (error)
     {
      response.status(500).send(error);
    }
});

app.put('/:Id', async(req, res) =>{

  await expenseGroupModel.findByIdAndUpdate(req.params.Id,{"name":`${req.body.name}`,"description":`${req.body.description}`});

  try
  {
     const y= await expenseGroupModel.findById(req.params.Id);
     res.send(y);
  }
  catch (error)
  { 
     res.status(500).send(error);
  } 

});
  

app.get('/', async(req, res)=>{
 
  const exp = await expenseGroupModel.find({});
  try 
  {
    res.send(exp);

  } catch (error)
   {
    res.status(500).send(error);
  }

});

app.get('/:Id', async (req, res) =>{

  const exp = await expenseGroupModel.findById(req.params.Id);
  try 
  {
    res.send(exp);
  } catch (error)
   {
    res.status(500).send(error);
  }

});


app.delete('/:Id', async(req, res)=>{
try{
 await expenseGroupModel.findByIdAndDelete(req.params.Id);
 res.send('izbrisano');
}
catch (error)
   {
    res.status(500).send(error);
  }

});


module.exports = app;

