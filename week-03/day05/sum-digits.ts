'use strict';

// Given a non-negative integer n, return the sum of its digits recursively (without loops).

// Hint
// Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)
// To remove the rightmost digit you must divide (/) the number by 10 
// and find a way to get the the whole number portion of that number.


function sumOfDigits(inputNumber: number) {
    if (inputNumber <= 9) {
        return inputNumber;
    } else {
        // let lastDigit: number = inputNumber % 10;
        return  Math.floor(inputNumber % 10 + sumOfDigits((inputNumber-inputNumber % 10)/10));
    }
}


console.log(sumOfDigits(514698));
