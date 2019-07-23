'use strict';

let massInKg: number =  81.2;
let heightInM: number = 1.78;
let bmi: number = massInKg / (heightInM * heightInM);

console.log('BMI is: ' + (bmi));
console.log('BMI is: ' + Math.round(bmi));
console.log('BMI is: ' + Math.round((bmi * 10)) / 10);
console.log('BMI is: ' + (bmi).toFixed(1));
console.log('BMI is: ' + Math.round((bmi /10 )) * 10);

