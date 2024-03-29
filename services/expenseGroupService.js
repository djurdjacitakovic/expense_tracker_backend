const expenseGroupModel = require('../models/expenseGroupModel');



module.exports={

createExpenseGroup: async (params) =>
{
    const exp = new expenseGroupModel(params);
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
getAllExpenseGroups: async(limit,page)=>
{
    try
    {
        const exp= await expenseGroupModel.find({}).limit(parseInt(limit)).skip((page-1)*limit).exec();
        return exp;
    }
    catch(error)
    {
        throw new Error({"Error":error});

    }
    
    
},

getExpenseGroupById: async(id)=>
{
    try
     {
        const exp = await expenseGroupModel.findById(id);
        return exp;

    } catch (error) 
    {
     
        throw new Error({"Error":error});

    }
    

},
updateExpenseGroup: async(id,params)=>
{
    try
    {
        const exp= await expenseGroupModel.findOneAndUpdate({ _id: id, },params,{new: true,});
        return exp;
    }
    catch(error)
    {
        throw new Error({"Error":error});
      
    }
       

},
deleteExpenseGroupById: async(id)=>
{
    try{
        await expenseGroupModel.findByIdAndDelete(id);
    }
    catch(error)
    {
        throw new Error({"Error":error});

    }
   
    
},
getCount:async()=>
{  
   
        try {
             const docCount=await expenseGroupModel.countDocuments({});
             return docCount;
            }
        catch (error) 
        {
            throw new Error({"Error":error});
        }
}
};









