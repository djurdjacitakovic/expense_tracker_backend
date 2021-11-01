const incomeGroupService = require("../services/incomeGroupService");
const validation=require("../helper/validation");

module.exports=
{
    createIncomeGroup: async (req, res) =>
    {
        const errorMessage=validation.validateRequiredField(req.body.name);

        if(errorMessage==="")
       {    try{
            const exp=await incomeGroupService.createIncomeGroup(req.body);
            res.send(exp);
        }catch(error)
        {
            res.status(500).send(error);

        }
    }
        else res.send(errorMessage);
        
      
    },
    getAllIncomeGroups:async(req,res)=>
    {
        const { limit=5, page=1 } = req.query;

        try{
        const exp=await incomeGroupService.getAllIncomeGroups(limit,page);
        const docCount= await incomeGroupService.getCount();
        res.send(
            { 
              documentsCount: docCount,
              pagesCount: Math.ceil(docCount/limit),
              expenses: exp
        
            });
        }catch(error)
        {
            res.status(500).send(error);

        }
    },
    getIncomeGroupById: async(req,res)=>
    {
        const id=req.params.id;
        try{
             const exp=await incomeGroupService.getIncomeGroupById(id);
             res.send(exp);
        }catch(error)
        {
            res.status(500).send(error);

        }
},
    updateIncomeGroup:async(req,res)=>
    {
        const errorMessage=validation.validateRequiredField(req.body.name);
        const id=req.params.id;

        if(errorMessage==="")
        {
            try{
                const exp=await incomeGroupService.updateIncomeGroup(id,req.body);
                res.send(exp);
            }catch(error)
            {
                res.status(500).send(error);

            }

        }
        else res.send(errorMessage);
                  
      
    },
    deleteIncomeGroup:async(req,res)=>
    {
        const id=req.params.id;
        try{
            await incomeGroupService.deleteIncomeGroupById(id);
            res.send(`The object(ID: ${id}) was deleted.`);
        } catch(error)
        {
            res.status(500).send(error);

        }
}


};
