const expenseModel = require('../models/expenseModel');

module.exports={
    getLastFiveExpenses:async()=>
    {    
        try
        {
            const exp = await expenseModel.find({}).sort({ "dateUpdated": -1}).limit(5).exec();
            return exp;
        }
        catch(error)
        {
            throw new Error({"Error":error});

        }
        
       
    },
    createExpense: async (params) =>
    {
        const exp = new expenseModel(params);
        try
       {
            await exp.save();
       }
        catch (error)
        {
            throw new Error({"Error":error});       

        }
        return exp;
    },

    getAllExpenses: async(limit,page)=>
    {
        try
        {
            const exp= await expenseModel.find({}).limit(parseInt(limit)).skip((page-1)*limit).exec();
            return exp;
        }
        catch(error)
        {
            throw new Error({"Error":error});       

        }
        
    },
    getExpenseById: async(id)=>
    {
        try
     {
        const exp = await expenseModel.findById(id);
        return exp;

    } catch (error) 
    {
        throw new Error({"Error":error});

    }
    },
    updateExpenseById: async(id,params)=>
    {
        try
        {
            const exp=await expenseModel.findByIdAndUpdate(id,{"name":`${params.name}`,
            "description":`${params.description}`,"dateUpdated":`${Date.now()}`}, {new: true});
            return exp;
        }
        catch(error)
        {
            throw new Error({"Error":error});

        }
    },
    deleteExpenseById: async(id)=>
    {
        try{
            await expenseModel.findByIdAndDelete(id);
        }
        catch(error)
        {
            throw new Error({"Error":error});
        }
    },
    
    getCount:async()=>
    {
        try {
            const docCount=await expenseModel.countDocuments({});
            return docCount;
           }
       catch (error) 
       {
           throw new Error({"Error":error});
       }
    }
};
