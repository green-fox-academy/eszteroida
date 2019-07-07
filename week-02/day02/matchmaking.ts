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

// function makingMatches(item1, item2) {
//     let matches: string[] ;
//     for (let i = 0; i <= item1.length -1; i++) {

//             matches[i] = (item1[i], item2[i]);
//             } return matches;
//         }

console.log(makingMatches(girls, boys));
