'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(reversed: string):string {

    let done:string = reversed.split("").reverse().join("");
return done;
}

//  V2
// function reverse(input: string): string {
//     let newinput: string = '';
//     for (let i = 1; i <= input.length; i++) {
//         let char: string = input.charAt(input.length - i);
//         newinput += char;
//     } return newinput;
// }

console.log(reverse(reversed));

export = reverse;