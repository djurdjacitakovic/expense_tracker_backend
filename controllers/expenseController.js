const expenseService = require("../services/expenseService");
const validation=require("../helper/validation");


module.exports=
{
    getLastFiveExpenses:async(req,res)=>
    {
        const exp=await expenseService.getLastFiveExpenses();

        res.send(exp);
    },
    createExpense: async (req, res) =>
    {
        const whether=validation.validateExpense(req.body.amount,req.body.expenseGroup);

        if(whether==="")
        {
            const exp=await expenseService.createExpense(req.body);
            res.send(exp);
        }
        else res.send(whether);
        
      
    },
    getAllExpenses:async(req,res)=>
    {
        const { limit=5, page=1 } = req.query;
        const exp=await expenseService.getAllExpenses(limit,page);

        const docCount=await expenseService.getCount();
        res.send(
            { 
              documentsCount: docCount,
              pagesCount: Math.ceil(docCount/limit),
              expenses: exp
        
            });
    },
    getExpenseById:async(req,res)=>
    {
        const id=req.params.id;
        const exp=await expenseService.getExpenseById(id);

        res.send(exp);
    },
    updateExpense:async(req,res)=>
    {
        const whether=validation.validateExpense(req.body.amount,req.body.expenseGroup);
        const id=req.params.id;

        if(whether==="")
        {
            const exp=await expenseService.updateExpenseById(id,req.body);
            res.send(exp);
        }
        else res.send(whether);
    },
    deleteExpense:async(req,res)=>
    {
        const id=req.params.id;
        await expenseService.deleteExpenseById(id);

        res.send(`The object(ID: ${id}) was deleted.`);
    }
};