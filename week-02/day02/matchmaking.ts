'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(item1, item2) {
    let matches: string[] = [];
    for (let i = 0; i <= item1.length - 1; i++) {
        for (let j = 0; j <= item2.length - 1; j++) {
            if (i = j) {
                matches.push(item1[i], item2[j]);
            }
        }
    }
    return matches;
}

// V2
// function makingMatches(list1: string[], list2: string[]): string[] {
//     let matchings: string[] = [];
//     let firstelement: string;
//     while (list1.length > 0 || list2.length > 0) {
//         firstelement = list1.shift();
//         matchings.push(firstelement);
//         firstelement = list2.shift();
//         matchings.push(firstelement);
//     }
//     return matchings;
// }

console.log(makingMatches(girls, boys));
