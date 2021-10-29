const express = require("express");
const app = express.Router();
const expenseModel = require("../models/expenseModel");

const myLogger = require('../middlewares/logging');
app.use(myLogger);

app.get('/last-five', async(req, res)=>{
 
  try 
  {
    const exp = await expenseModel.find({}).sort({ "dateUpdated": -1}).limit(5).exec();
    res.send(exp);
    
  } catch (error)
   {
    res.status(500).send(error);
  }

});

app.post('/', async (request, response) => {
    try 
    {
      const exp = new expenseModel(request.body);
      await exp.save();
      response.send(exp);

    } catch (error)
     {
      response.status(500).send(error);
    }
});

app.put('/:id', async(req, res) =>{

  try
  {
     const exp=await expenseModel.findByIdAndUpdate(req.params.id,{"name":`${req.body.name}`,
     "description":`${req.body.description}`,"dateUpdated":`${Date.now()}`}, {new: true});

     res.send(exp);

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
    const exp = await expenseModel.find({}).limit(parseInt(limit)).skip((page-1)*limit).exec(); 
    const docCount=await expenseModel.countDocuments({});
    res.send(
    { 
      documentsCount: docCount,
      pagesCount: Math.ceil(docCount/limit),
      expenses: exp

    }
    );

  } catch (error)
   {
    res.status(500).send(error);
  }

});

app.get('/:id', async (req, res) =>{

  try 
  {
    const exp = await expenseModel.findById(req.params.id);
    res.send(exp);
  } catch (error)
   {
    res.status(500).send(error);
  }

});


app.delete('/:id', async(req, res)=>{

try
{
 await expenseModel.findByIdAndDelete(req.params.id);
 res.send(`The object(ID: ${req.params.id}) was deleted.`);
}
catch (error)
  {
    res.status(500).send(error);
  }

});


module.exports = app;

