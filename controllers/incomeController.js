const incomeService = require("../services/incomeService");
const validation=require("../helper/validation");


module.exports=
{
    getLastFiveIncomes:async(req,res)=>
    {
        const exp=await incomeService.getLastFiveIncomes();

        res.send(exp);
    },
    createIncome: async (req, res) =>
    {
        const whether=validation.validateIncome(req.body.amount,req.body.incomeGroup);

        if(whether==="")
        {
            const exp=await incomeService.createIncome(req.body);
            res.send(exp);
        }
        else res.send(whether);
        
      
    },
    getAllIncomes:async(req,res)=>
    {
        const { limit=5, page=1 } = req.query;
        const exp=await incomeService.getAllIncomes(limit,page);

        const docCount=await incomeService.getCount();
        res.send(
            { 
              documentsCount: docCount,
              pagesCount: Math.ceil(docCount/limit),
              expenses: exp
        
            });

    },
    getIncomeById:async(req,res)=>
    {
        const id=req.params.id;
        const exp=await incomeService.getIncomeById(id);

        res.send(exp);
    },
    updateIncome:async(req,res)=>
    {
        const whether=validation.validateIncome(req.body.amount,req.body.incomeGroup);
        const id=req.params.id;

        if(whether==="")
        {
            const exp=await incomeService.updateIncomeById(id,req.body);
            res.send(exp);
        }
        else res.send(whether);
    },
    deleteIncome:async(req,res)=>
    {
        const id=req.params.id;
        await incomeService.deleteIncomeById(id);

        res.send(`The object(ID: ${id}) was deleted.`);
    }
};