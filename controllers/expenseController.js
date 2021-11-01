const expenseService = require("../services/expenseService");
const validation=require("../helper/validation");


module.exports=
{
    getLastFiveExpenses:async(req,res)=>
    {
        try{
            const exp=await expenseService.getLastFiveExpenses();
            res.send(exp);
        }
        catch(error)
        {
            res.status(500).send(error);

        }
       
    },
    createExpense: async (req, res) =>
    {
        const errorMessage=validation.validateExpense(req.body.amount,req.body.expenseGroup);

        if(errorMessage==="")
        {
            try{
                const exp=await expenseService.createExpense(req.body);
                res.send(exp);
            }
            catch(error)
            {
                res.status(500).send(error);
            }
            
        }
        else res.send(errorMessage);
        
      
    },
    getAllExpenses:async(req,res)=>
    {
        const { limit=5, page=1 } = req.query;

        try{
        const exp=await expenseService.getAllExpenses(limit,page);
        const docCount=await expenseService.getCount();
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
    getExpenseById:async(req,res)=>
    {
        const id=req.params.id;
        try{
        const exp=await expenseService.getExpenseById(id);
        res.send(exp);

        }
        catch(error)
        {
            res.status(500).send(error);

        }
    },
    updateExpense:async(req,res)=>
    {
        const errorMessage=validation.validateExpense(req.body.amount,req.body.expenseGroup);
        const id=req.params.id;

        if(errorMessage==="")
        {
            try{
            const exp=await expenseService.updateExpenseById(id,req.body);
            res.send(exp);
            }
            catch(error)
            {
                res.status(500).send(error);

            }
        }
        else res.send(errorMessage);
    },
    deleteExpense:async(req,res)=>
    {
        const id=req.params.id;
        try{
        await expenseService.deleteExpenseById(id);

        res.send(`The object(ID: ${id}) was deleted.`);    
    }
    catch(error)
    {
        res.status(500).send(error);

    }
}
};