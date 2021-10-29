var Number_Of_LTC = document.getElementById(NumberOfLTC).replace(/\D/g,''); //Extract from HTML and filter to remove non-numeric characters
var Number_Of_CRO = document.getElementById(NumberOfCRO).replace(/\D/g,'');

function CalculateTotalProfit(Number_Of_CRO,Number_Of_LTC)
{
  let LTC_Profit = Number_Of_LTC * 190;
  let CRO_Profit = Number_Of_CRO * 0.20;
  
  let Total_Profit =  LTC_Profit + CRO_Profit;
  
 return Total_Profit; 
  }

CalculateTotalProfit(Number_Of_CRO,Number_Of_LTC);
