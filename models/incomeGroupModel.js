const mongoose = require("mongoose");

const IncomeGroupSchema = new mongoose.Schema({
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
  
  const IncomeGroup = mongoose.model("IncomeGroup", IncomeGroupSchema);
  
  module.exports = IncomeGroup;