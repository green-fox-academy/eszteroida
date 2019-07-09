'use strict';

// -  Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// -  Log the sum of the elements in `ai` to the console

let ai: number[] = [3, 4, 5, 6, 7];
let sumOf: number = 0;

//for (let i: number = 0; i <= ai.length - 1; i++) {
//    sumOf += ai[i];
// }
// console.log(sumOf);


ai.forEach(function (item) {
    sumOf += item;
})

console.log(sumOf);