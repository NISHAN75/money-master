  /*====total income handling====*/
 function getIncomeTotal(){
    const totalIncomeText=document.getElementById('total-income').value;
    const totalIncome=parseFloat(totalIncomeText);
    return totalIncome;
 };
/*==== total expenses handling ====*/
 function getExpensesTotal(num1,num2,num3){
    //  find expenses
    const foodExpensesText=document.getElementById(num1 +'-expenses').value;
    const foodExpenses=parseFloat(foodExpensesText);
    const rentExpensesText=document.getElementById(num2 +'-expenses').value;
    const rentExpenses=parseFloat(rentExpensesText);
    const clothesExpensesText=document.getElementById(num3 +'-expenses').value;
    const clothesExpenses=parseFloat(clothesExpensesText);
      // total expenses calculation
    const totalExpenses=foodExpenses + rentExpenses + clothesExpenses;
    const totalExpensesId=document.getElementById('total-expenses');
    const totalExpensesText=totalExpensesId.innerText;
    totalExpensesId.innerText=totalExpenses;
    return totalExpenses;
 };
 /* ==== balance calculation  ====*/
function getBlance(inTotalIncome,inTotalExpenses){
    const balance=inTotalIncome-inTotalExpenses;
    const balanceId=document.getElementById('balance');
    const balanceText=balanceId.innerText;
        balanceId.innerText =balance; 
}
  /*====calculate-btn event handling ====*/
document.getElementById('calculate-btn').addEventListener('click',function(){
    /* total income */
    const inTotalIncome=getIncomeTotal()
    /*====total expenses handling====*/
  const inTotalExpenses= getExpensesTotal('food','rent','clothes');
    /*==== total  blance ====*/
   getBlance(inTotalIncome,inTotalExpenses);
});