'use strict';

// Given a non-negative integer n, return the sum of its digits recursively (without loops).

// Hint
// Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)
// To remove the rightmost digit you must divide (/) the number by 10 
// and find a way to get the the whole number portion of that number.


function sumOfDigits(inputNumber: number): number {
    while (inputNumber >= 9) {
        inputNumber = inputNumber % 10 + (sumOfDigits(Math.floor(inputNumber / 10)));

    } return inputNumber;
}

console.log(sumOfDigits(1234567));

