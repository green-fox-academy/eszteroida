
'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables


let secondsPast: number = currentSeconds + (60 * currentMinutes) + (60 * 60 * currentHours);
let secondsLeft: number = ((24 * 60 * 60) - secondsPast);

console.log('There are ' + secondsLeft + ' seconds left till midnight.');


// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables