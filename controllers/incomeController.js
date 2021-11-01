const incomeService = require("../services/incomeService");
const validation=require("../helper/validation");


module.exports=
{
    getLastFiveIncomes:async(req,res)=>
    {
        try{
        const exp=await incomeService.getLastFiveIncomes();
        res.send(exp);
        }
        catch(error)
        {
            res.status(500).send(error);

        }
    },
    createIncome: async (req, res) =>
    {
        const errorMessage=validation.validateIncome(req.body.amount,req.body.incomeGroup);

        if(errorMessage==="")
        {
            try{
            const exp=await incomeService.createIncome(req.body);
            res.send(exp);
        
        }catch(error){
            res.status(500).send(error);

        }
    }

        else res.send(errorMessage);
        
      
    },
    getAllIncomes:async(req,res)=>
    {
        const { limit=5, page=1 } = req.query;
        try{
        const exp=await incomeService.getAllIncomes(limit,page);
        const docCount=await incomeService.getCount();
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
    getIncomeById:async(req,res)=>
    {
        const id=req.params.id;
        try{

        const exp=await incomeService.getIncomeById(id);
        res.send(exp);
    }
        catch(error)
        {
            res.status(500).send(error);

        }
    },
    updateIncome:async(req,res)=>
    {
        const errorMessage=validation.validateIncome(req.body.amount,req.body.incomeGroup);
        const id=req.params.id;

        if(errorMessage==="")
        {
            try{
            const exp=await incomeService.updateIncomeById(id,req.body);
            res.send(exp);
            }
            catch(error)
            {
                res.status(500).send(error);

            }
        }
        else res.send(errorMessage);
    },
    deleteIncome:async(req,res)=>
    {
        const id=req.params.id;
        try{
        await incomeService.deleteIncomeById(id);

        res.send(`The object(ID: ${id}) was deleted.`);
    }catch(error)
    {
        res.status(500).send(error);

    }
}
};