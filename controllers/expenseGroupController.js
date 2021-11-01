const expenseGroupService = require("../services/expenseGroupService");
const validation=require("../helper/validation");

module.exports=
{
    createExpenseGroup: async (req, res) =>
    {
        const errorMessage=validation.validateRequiredField(req.body.name);

        if(errorMessage==="")
        {
            try{
            const exp=await expenseGroupService.createExpenseGroup(req.body);
            res.send(exp);
        }
        catch(error)
        {
            res.status(500).send(error);

        }
    }

        else res.send(errorMessage);
        
      
    },
    getAllExpenseGroups:async(req,res)=>
    {
        const { limit=5, page=1 } = req.query;

        try{
        const exp=await expenseGroupService.getAllExpenseGroups(limit,page);
        const docCount=await expenseGroupService.getCount();
        res.send(
            { 
              documentsCount: docCount,
              pagesCount: Math.ceil(docCount/limit),
              expenses: exp
        
            });
        }
        catch(error)
        {
            res.status(500).send(error);

        }

    },
    getExpenseGroupById: async(req,res)=>
    {
        const id=req.params.id;
        try{
        const exp=await expenseGroupService.getExpenseGroupById(id);

        res.send(exp);
        }
        catch(error)
        {
            res.status(500).send(error);

        }
    },
    updateExpenseGroup:async(req,res)=>
    {
        const errorMessage=validation.validateRequiredField(req.body.name);
        const id=req.params.id;

        if(errorMessage==="")
        {
            try{
            const exp=await expenseGroupService.updateExpenseGroup(id,req.body);
            res.send(exp);
            }
            catch(error)
            {
                res.status(500).send(error);

            }
        }
        else res.send(errorMessage);
                  
      
    },
    deleteExpenseGroup:async(req,res)=>
    {
        const id=req.params.id;
        try{
        await expenseGroupService.deleteExpenseGroupById(id);

        res.send(`The object(ID: ${id}) was deleted.`); 
       }
       catch(error)
       {
        res.status(500).send(error);

       }
}

};
