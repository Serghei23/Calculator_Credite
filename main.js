// text input
const totalCost = document.getElementById('total-cost'),
      creditTerm = document.getElementById('credit-term');
// range input
const totalCostRange = document.getElementById('total-cost-range'), 
      creditTermRange = document.getElementById('credit-term-range');     
// monthly payment
const totalMonthlyPayment = document.getElementById('monthly-payment'); 
const inputsRange = document.querySelectorAll('.input-range');

const assignValue = () => {
    totalCost.value = totalCostRange.value;
    creditTerm.value = creditTermRange.value;   
}
assignValue();
for(let input of inputsRange){
   input.addEventListener('input', () => {
   assignValue(); 
   calculation (totalCost.value, creditTerm.value)     
   })   
}
const calculation = (totalCost=1000, creditTerm = 1) => {
let monthlyPayment
let lounAmount = totalCost;
let interestRate = 9.5;
let numberOfMonths = creditTerm;
monthlyPayment = totalCost/creditTerm + ((interestRate/100) * totalCost);
const monthlyPaymentAraunded = Math.round(monthlyPayment);
console.log (monthlyPaymentAraunded)
if(monthlyPaymentAraunded < 0){
return false;
} else {
 totalMonthlyPayment.innerHTML = `${monthlyPaymentAraunded} Lei`;
}
}
