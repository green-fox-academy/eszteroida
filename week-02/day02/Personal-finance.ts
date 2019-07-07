'use strict';

let moneySpent: number[] = [500, 1000, 1250, 175, 800, 120];

//How much did we spend?
let sum: number = 0;
for (let i: number = 0; i <= moneySpent.length - 1; i++) {
    sum += moneySpent[i];
}
console.log(sum);

//Which was our greatest expense?
let greatestExpense: number = Math.max(...moneySpent);
console.log(greatestExpense);

//Which was our cheapest spending?
let cheapestExpense: number = Math.min(...moneySpent);
console.log(cheapestExpense);

//What was the average amount of our spendings?
let avrgAmount: number = sum / (moneySpent.length);

console.log(avrgAmount);