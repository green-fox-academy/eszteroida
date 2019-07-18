'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3
let inputNumber: number = 8;
let sum: number = 0;


for (let i: number = 1; i <= inputNumber; i++) {
    sum += i;

}

console.log('Sum: ' + sum + ', Average: ' + sum / inputNumber);

//version 2

// let sum: number = 0;
// let average: number = 0;

// function program(inputNumber: number) {
//     for (let i = 0; i <= inputNumber; i++) {
//         sum += i;
//     }
//     average = sum / inputNumber;
//     console.log(`Sum is: ${sum}, average is ${average}`);
// }

// program(5);
