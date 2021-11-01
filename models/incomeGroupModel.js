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
      required:false
    },
   });
  
  const IncomeGroup = mongoose.model("IncomeGroup", IncomeGroupSchema);
  
  module.exports = IncomeGroup;