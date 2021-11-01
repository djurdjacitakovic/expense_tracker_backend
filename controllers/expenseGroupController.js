const expenseGroupService = require("../services/expenseGroupService");
const validation=require("../helper/validation");

module.exports=
{
    createExpenseGroup: async (req, res) =>
    {
        const whether=validation.validateRequiredField(req.body.name);

        if(whether==="")
        {
            const exp=await expenseGroupService.createExpenseGroup(req.body);
            res.send(exp);
        }
        else res.send(whether);
        
      
    },
    getAllExpenseGroups:async(req,res)=>
    {
        const { limit=5, page=1 } = req.query;
        const exp=await expenseGroupService.getAllExpenseGroups(limit,page);
        const docCount=await expenseGroupService.getCount();
        res.send(
            { 
              documentsCount: docCount,
              pagesCount: Math.ceil(docCount/limit),
              expenses: exp
        
            });

    },
    getExpenseGroupById: async(req,res)=>
    {
        const id=req.params.id;
        const exp=await expenseGroupService.getExpenseGroupById(id);

        res.send(exp);
    },
    updateExpenseGroup:async(req,res)=>
    {
        const whether=validation.validateRequiredField(req.body.name);
        const id=req.params.id;

        if(whether==="")
        {
            const exp=await expenseGroupService.updateExpenseGroup(id,req.body);
            res.send(exp);
        }
        else res.send(whether);
                  
      
    },
    deleteExpenseGroup:async(req,res)=>
    {
        const id=req.params.id;
        await expenseGroupService.deleteExpenseGroupById(id);

        res.send(`The object(ID: ${id}) was deleted.`);
    }

};
