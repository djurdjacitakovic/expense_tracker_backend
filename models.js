const mongoose = require("mongoose");

const ExpenseGroupSchema = new mongoose.Schema({
    name: 
    {
      type: String,
      required:true
    },
    description:
     {
      type: String,
      required:true
    },
   });
  
  const ExpenseGroup = mongoose.model("ExpenseGroup", ExpenseGroupSchema);
  
  module.exports = ExpenseGroup;