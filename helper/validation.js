
function validateExpense(amount,id)
{
    let error="";
   if (id===undefined)
   {  
       error=error+` ExpenseGroup field is missing!\n`;
         
   } 
   if (amount===undefined)
   {  
       error=error+`Amount field is missing!\n`;
         
   } else 
   {
    if(!isNaN(amount))
    {
        if(amount<0  || amount>10000)
        {
            error=error+`The number you entered must be between 0 and 10000 \n`;
        } 

    } 
    else 
    {
        error=error+`${amount} is not a number!\n`;
    }
   }



   return error;

}


function validateIncome(amount,id)
{
    let error="";
   if (id===undefined)
   {  
       error=error+` IncomeGroup field is missing!\n`;
         
   } 
   if (amount===undefined)
   {  
       error=error+`Amount field is missing!\n`;
         
   } else 
   {
    if(!isNaN(amount))
    {
        if(amount<0  || amount>10000)
        {
            error=error+`The number you entered must be between 0 and 10000 \n`;
        } 

    } 
    else 
    {
        error=error+`${amount} is not a number!\n`;
    }
   }



   return error;

}


function validateRequiredField(name)
{
    let error="";
	if (name===undefined)
    {  
        error=error+`Name field is missing!\n`;
          
    } 
     return error;
}


function validateNumbers(no1,no2)
{ 
    let error="";

    if(!isNaN(no1))
    {
        if(no1<0  || no1>10000)
        {
            error=`The number you entered must be between 0 and 10000 \n`;
           
        } 

    } 
    else 
    {
        error=`Is not a number\n`;
      
    }

    if(!isNaN(no2))
    {
        if(no2<0 || no2>10000)
        {
            error=`The number you entered must be between 0 and 10000 \n`;
           
        } 

    } 
    else 
    {
        error=`Is not a number\n`;
      
    }

    return error;
}


module.exports = {validateExpense,validateIncome,validateRequiredField,validateNumbers};