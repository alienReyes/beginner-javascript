console.log('this is me');

// Functions and declarations

// anonymous function gives error on FF
// function (name){
//  return `Dr ${name}`
// }
// expression
const taco = function (name) {
  return `Dr ${name}`
}

// ! arrow function
// Step 1
// function inchToCM(inches){
//   let cm =inches *2.54;
//   return cm;
// } 
// Step 2
// function inchToCM(inches) {
//   return inches * 2.54;
// }
// Step 3
// const inchToCM=function (inches) {
//   return inches * 2.54;
// }
// Step 4
const inchToCM=  (inches)=>  inches * 2.54;

const add = (a,b=3)=> a+b;

// Methods
 const tacoLin={
   name: 'Taco perro',
   saluda: function(){
     console.log('Hola guey');
     return('Hola guey');
   },
  //  shorthand method
  ladra(){
    console.log('Barf barf')
  },
  // arrow way
  chilla:()=>{
    console.log('waoouaaoua');
  }
 }


