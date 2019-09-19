'use strict'
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let input: number = 0;

let divideByZero = (num: number) => {

    if (num === 0) {
        throw new Error('fail');
    }
    console.log(10/num);
}

try {
    divideByZero(input);
}
catch (e) {
    console.log(e.message);
}