const incomeGroupModel = require('../models/incomeGroupModel');

module.exports={

createIncomeGroup: async (params) =>
{
    const exp = new incomeGroupModel(params);
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
getAllIncomeGroups: async(limit,page)=>
{
    try
    {
        const exp= await incomeGroupModel.find({}).limit(parseInt(limit)).skip((page-1)*limit).exec();
        return exp;
    }
    catch(error)
    {
        console.log(error);
    }
    
    
},

getIncomeGroupById: async(id)=>
{
    try
     {
        const exp = await incomeGroupModel.findById(id);
        return exp;

    } catch (error) 
    {
        console.log(error);

    }
    

},
updateIncomeGroup: async(id,params)=>
{
    try
    {
        const exp= await incomeGroupModel.findOneAndUpdate({ _id: id, },params,{new: true,});
        return exp;
    }
    catch(error)
    {
        console.log(error);

    }
       

},
deleteIncomeGroupById: async(id)=>
{
    try{
        await incomeGroupModel.findByIdAndDelete(id);
    }
    catch(error)
    {
        console.log(error);
        

    }
   
    
},
getCount:async()=>
{
    try {
        const docCount=await incomeGroupModel.countDocuments({});
        return docCount;
       }
   catch (error) 
   {
       console.log(error);
   }
}
};


