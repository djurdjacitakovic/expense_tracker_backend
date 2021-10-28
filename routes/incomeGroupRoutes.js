const express = require("express");
const app = express.Router();
const incomeGroupModel = require("../models/incomeGroupModel");

const myLogger = require('../middlewares/logging');
app.use(myLogger);

app.post('/', async (request, response) => {
    try 
    {
      const exp = new incomeGroupModel(request.body);
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
    
     const exp=await incomeGroupModel.findByIdAndUpdate(req.params.id,{"name":`${req.body.name}`,
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
    const { page = 1, limit = 4 } = req.query;
    const exp = await incomeGroupModel.find({}).limit(parseInt(limit)).skip((page-1)*limit).exec();
    res.send(exp);

  } catch (error)
   {
    res.status(500).send(error);
  }

});

app.get('/:id', async (req, res) =>{

  try 
  {
    const exp = await incomeGroupModel.findById(req.params.id);
    res.send(exp);
  } catch (error)
   {
    res.status(500).send(error);
  }

});


app.delete('/:id', async(req, res)=>{

try
{
 await incomeGroupModel.findByIdAndDelete(req.params.id);
 res.send(`The object(ID: ${req.params.id}) was deleted.`);
}
catch (error)
  {
    res.status(500).send(error);
  }

});


module.exports = app;
