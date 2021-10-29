var Number_Of_LTC = document.getElementById(NumberOfLTC).replace(/\D/g,''); //Extract from HTML and filter to remove non-numeric characters
var Number_Of_CRO = document.getElementById(NumberOfCRO).replace(/\D/g,'');

function CalculateTotalProfit(Total_USD_Profit)
{
  var LTC_Profit = Number_Of_LTC * 190;
  var CRO_Profit = Number_Of_CRO * 0.20;
  var total = CRO_Profit + LTC_Profit; 
  
  Total_USD_Profit = "Total Profit in USD is" + total;
  return Total_USD_Profit
  }

document.getElementById("Total_Profit") = Total_USD_Profit;
