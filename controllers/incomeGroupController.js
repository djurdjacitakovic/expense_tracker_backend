const incomeGroupService = require("../services/incomeGroupService");
const validation=require("../helper/validation");

module.exports=
{
    createIncomeGroup: async (req, res) =>
    {
        const whether=validation.validateRequiredField(req.body.name);

        if(whether==="")
       {
            const exp=await incomeGroupService.createIncomeGroup(req.body);
            res.send(exp);
        }
        else res.send(whether);
        
      
    },
    getAllIncomeGroups:async(req,res)=>
    {
        const { limit=5, page=1 } = req.query;
        const exp=await incomeGroupService.getAllIncomeGroups(limit,page);

        const docCount= await incomeGroupService.getCount();
        res.send(
            { 
              documentsCount: docCount,
              pagesCount: Math.ceil(docCount/limit),
              expenses: exp
        
            });

    },
    getIncomeGroupById: async(req,res)=>
    {
        const id=req.params.id;
        const exp=await incomeGroupService.getIncomeGroupById(id);

        res.send(exp);
    },
    updateIncomeGroup:async(req,res)=>
    {
        const whether=validation.validateRequiredField(req.body.name);
        const id=req.params.id;

        if(whether==="")
        {
            const exp=await incomeGroupService.updateIncomeGroup(id,req.body);
            res.send(exp);
        }
        else res.send(whether);
                  
      
    },
    deleteIncomeGroup:async(req,res)=>
    {
        const id=req.params.id;
        await incomeGroupService.deleteIncomeGroupById(id);

        res.send(`The object(ID: ${id}) was deleted.`);
    }

};
