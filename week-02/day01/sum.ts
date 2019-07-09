'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(inputNumber: number):number {
    let osszeg: number = 0;
    for (let i: number = 1; i <= inputNumber; i++) {
        osszeg += i;
    } 
    return osszeg;
}

    console.log(sum(6));
