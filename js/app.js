  /*====total income handling====*/
 function getIncomeTotal(){
    const totalIncomeText=document.getElementById('total-income').value;
    const totalIncome=parseFloat(totalIncomeText);
    return totalIncome;
 };
/*==== total expenses handling ====*/
 function getExpensesInput(expenses){
    //  find expenses
    const expensesText=document.getElementById(expenses +'-expenses').value;
    const expensesNumber=parseFloat(expensesText);
    return expensesNumber;
    
 };
   /*==== total expenses calculation ====*/
 function getTotalCost(){
   const foodExpense=getExpensesInput('food');
   const rentExpense=getExpensesInput('rent');
   const clothesExpense=getExpensesInput('clothes');
   const totalCostId=document.getElementById('total-cost');
   const totalCostText=totalCostId.innerText;
   const totalExpenses=foodExpense + rentExpense + clothesExpense;
   totalCostId.innerText=totalExpenses;
   return totalExpenses;

 }
 /* ==== balance calculation  ====*/
function getTotalBlance(){
  const totalBalanceId=document.getElementById('balance');
    const totalBalanceText=totalBalanceId.innerText;
    const inTotalIncome =getIncomeTotal();
    const inTotalCost=getTotalCost()
    const totalBalance=inTotalIncome -inTotalCost;
    totalBalanceId.innerText=totalBalance;
     return totalBalance;
};
/*==== get  save persent ====*/
function getSavePersent(){
  const savePersentInput=document.getElementById('save-percent').value;
  const savePersent=parseFloat(savePersentInput);
  return savePersent;
}
/*==== get save amount  ====*/
function getSaveAmount(){
 const saveAmountId=document.getElementById('save-amount');
 const saveAmountText=saveAmountId.innerText;
 const savePersent=getSavePersent();
 const inTotalIncome =getIncomeTotal();
 const saveAmount=(inTotalIncome * savePersent) / 100;
 saveAmountId.innerText=saveAmount;
 return saveAmount;
}
/* ==== get remaining blance ====*/
function getRemainingBlance(){
  const remainingBlanceId=document.getElementById('remaining-balance');
  const remainingBlanceText=remainingBlanceId.innerText;
  const totalBalance =getTotalBlance();
  const saveAmount =getSaveAmount();
  const remainingBlance= totalBalance -saveAmount;
  remainingBlanceId.innerText=remainingBlance;
  return remainingBlance;
}
/*==== save amount ====*/

  /*====calculate-btn event handling ====*/
document.getElementById('calculate-btn').addEventListener('click',function(){
  // getIncomeTotal fuction call  
   getIncomeTotal();
  //getTotalCost fuction call  
   getTotalCost();
  //getTotalBlance fuction call  
    getTotalBlance();
});
/* ==== save-btn event handling ====*/
document.getElementById('save-btn').addEventListener('click',function(){
  /*==== remaining Blance event handling  ====*/
// getSavePersent function call
 getSavePersent();
// getSaveAmount function call
 getSaveAmount();
//getRemainingBlance fuction call  
 getRemainingBlance();

})