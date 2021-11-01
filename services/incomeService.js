const incomeModel = require('../models/incomeModel');

module.exports={
    
    getLastFiveIncomes:async()=>
    {     
       try
        {
            const exp = await incomeModel.find({}).sort({ "dateUpdated": -1}).limit(5).exec();
            return exp;
        }
        catch(error)
        {
            console.log(error);


        }
        
    },
    createIncome: async (params) =>
    {
        const exp = new incomeModel(params);
        try
       {
            await exp.save();
       }
        catch (error)
        {
            console.log(error);

        }
        return exp;
    },

    getAllIncomes: async(limit,page)=>
    {
        try
        {
            const exp= await incomeModel.find({}).limit(parseInt(limit)).skip((page-1)*limit).exec();
            return exp;
        }
        catch(error)
        {
            console.log(error);

        }
        
    },
    getIncomeById: async(id)=>
    {
        try
     {
        const exp = await incomeModel.findById(id);
        return exp;

    } catch (error) 
    {
        console.log(error);

    }
    },
    updateIncomeById: async(id,params)=>
    {
        try
        {
            const exp=await incomeModel.findByIdAndUpdate(id,{"name":`${params.name}`,
            "description":`${params.description}`,"dateUpdated":`${Date.now()}`}, {new: true});
            return exp;
        }
        catch(error)
        {
            console.log(error);

        }
    },
    deleteIncomeById: async(id)=>
    {
        try{
            await incomeModel.findByIdAndDelete(id);
        }
        catch(error)
        {
            console.log(error);

        }
    },
    
    getCount:async()=>
    {
        try {
            const docCount=await incomeModel.countDocuments({});
            return docCount;
           }
       catch (error) 
       {
           console.log(error);
       }
    }
};
