const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
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
    expenseGroup:
    {
        required:true,
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ExpenseGroup' 
    }
   });
  
  const Expense = mongoose.model("Expense", ExpenseSchema);
  
  module.exports = Expense;