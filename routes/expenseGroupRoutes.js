//const { request } = require("express");
const express = require("express");
const app = express.Router();
const expenseGroupModel = require("../models");

app.post('/', async (request, response) => {
    try 
    {
      const exp = new expenseGroupModel(request.body);
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
     const exp=await expenseGroupModel.findByIdAndUpdate(req.params.id,{"name":`${req.body.name}`,
     "description":`${req.body.description}`}, {new: true});

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
    const exp = await expenseGroupModel.find({});
    res.send(exp);

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

