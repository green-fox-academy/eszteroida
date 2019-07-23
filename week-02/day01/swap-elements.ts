'use strict';
// -  Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `abc`


let abc: string[] = ["Arthur", "Boe", "Chloe"];

console.log(abc.reverse());

// version 2

let a = abc.shift();
let c = abc.pop();

abc.unshift(c);
abc.push(a);

console.log(abc);
