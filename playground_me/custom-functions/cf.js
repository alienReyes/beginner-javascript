//! function definition
function calculateBill(billAmmount, taxRate=0.13, tipRate=0.15){
  console.log('runing calculate bill');
  const total= billAmmount+billAmmount*taxRate+billAmmount*tipRate; 
  return total;
}

//! running the function/ call
console.log(`Your total is $${Math.ceil( calculateBill(100,1.13))}`) ;

// Function definition
function sayHiTo(firstName){
  return `Hello ${firstName};`
}
const greeting= sayHiTo('Taco');
console.log(greeting);
console.log(calculateBill(100));
// this how we fall back to defaults using undefined
console.log(calculateBill(100,undefined,.2));

