const express = require("express");
const app = express.Router();
const expenseGroupModel = require("../models/expenseGroupModel");
const validation=require("../helper/validation");
const myLogger = require('../middlewares/logging');

app.use(myLogger);

app.post('/', async (request, response) => {
    try 
    {
      const exp = new expenseGroupModel(request.body);
      const[whether,errorMess]=validation.validateRequiredField(request.body.name);
      
      if(whether)
      {
        await exp.save();
        response.send(exp);
      }
       else response.send(errorMess);
   
    }
     catch (error)
     {
       response.status(500).send(error);
     }
});

app.put('/:id', async(req, res) =>{

  try
  {    
    
    const[whether,errorMess]=validation.validateRequiredField(req.body.name);
      
    if(whether)
    {
       const exp=await expenseGroupModel.findByIdAndUpdate(req.params.id,{"name":`${req.body.name}`,
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
      const exp = await expenseGroupModel.find({}).limit(parseInt(limit)).skip((page-1)*limit).exec();
      const docCount=await expenseGroupModel.countDocuments({});
       res.send(
    { 
       documentsCount: docCount,
       pagesCount: Math.ceil(docCount/limit),
       expenses: exp

    });
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
    const exp = await expenseGroupModel.findById(req.params.id);
    res.send(exp);
  } catch (error)
   {
    res.status(500).send(error);
  }

});


app.delete('/:id', async(req, res)=>{

try
{
 await expenseGroupModel.findByIdAndDelete(req.params.id);
 res.send(`The object(ID: ${req.params.id}) was deleted.`);
}
catch (error)
  {
    res.status(500).send(error);
  }

});


module.exports = app;

