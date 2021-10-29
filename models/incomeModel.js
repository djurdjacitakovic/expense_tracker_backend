const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
    description:
     {
      type: String,
      required:true
    },
    amount:
    {
        type:Number,
        required:true
    },
    incomeGroup:
    {
        required:true,
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'IncomeGroup' 
    },
    created:
    {
        type:Date,
        default:Date.now()
    },
    updated:
    {
        type:Date,
        default:Date.now()
    }
   });
  
  const Income = mongoose.model("Income", IncomeSchema);
  
  module.exports = Income;