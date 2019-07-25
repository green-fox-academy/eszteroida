'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

function containsSeven(numberarray: number[]): string {
    let outputmsg: string;
    if (numberarray.some(function (element) {
        return element == 7;
    })) {
        outputmsg = `7 is at the ${numberarray.indexOf(7)}. position`;
    } else {
        outputmsg = 'Noooooo';
    }
    return outputmsg;
}

console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export = containsSeven;