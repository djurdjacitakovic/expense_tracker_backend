
function validateExpense(amount,id)
{
    var temp=true;
    var error="";
   if (id===undefined)
   {  
       error=error+` ExpenseGroup field is missing!\n`;
       temp=false;
         
   } 
   if (amount===undefined)
   {  
       error=error+`Amount field is missing!\n`;
       temp=false;
         
   } else 
   {
    if(!isNaN(amount))
    {
        if(amount<0  || amount>10000)
        {
            error=error+`The number you entered must be between 0 and 10000 \n`;
            temp=false;
        } 

    } 
    else 
    {
        error=error+`${amount} is not a number!\n`;
        temp=false;
    }
   }



   return [temp,error];

}


function validateIncome(amount,id)
{
    var temp=true;
    var error="";
   if (id===undefined)
   {  
       error=error+` IncomeGroup field is missing!\n`;
       temp=false;
         
   } 
   if (amount===undefined)
   {  
       error=error+`Amount field is missing!\n`;
       temp=false;
         
   } else 
   {
    if(!isNaN(amount))
    {
        if(amount<0  || amount>10000)
        {
            error=error+`The number you entered must be between 0 and 10000 \n`;
            temp=false;
        } 

    } 
    else 
    {
        error=error+`${amount} is not a number!\n`;
        temp=false;
    }
   }



   return [temp,error];

}


function validateRequiredField(name)
{
    var error="";
    var temp=true;
	if (name===undefined)
    {  
        error=`Name field is missing!\n`;
        temp=false;
          
    } 
     return [temp,error];
}


function validateNumbers(no1,no2)
{ 
    var error="";
    var temp=true;

    if(!isNaN(no1))
    {
        if(no1<0  || no1>10000)
        {
            error=`The number you entered must be between 0 and 10000 \n`;
            temp=false;
        } 

    } 
    else 
    {
        error=`Is not a number\n`;
        temp=false;
    }

    if(!isNaN(no2))
    {
        if(no2<0 || no2>10000)
        {
            error=`The number you entered must be between 0 and 10000 \n`;
            temp=false;
        } 

    } 
    else 
    {
        error=`Is not a number\n`;
        temp=false;
    }

    return [temp,error];
}


module.exports = {validateExpense,validateIncome,validateRequiredField,validateNumbers};