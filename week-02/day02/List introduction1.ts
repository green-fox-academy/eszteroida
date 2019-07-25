'use strict';

let namesList: string[] = [];

console.log(namesList.length);

namesList.push('William');

console.log(namesList);

namesList.push('John', 'Amanda');

console.log(namesList);

console.log(namesList.length);

console.log(namesList[2]);

// print out each name
// console.log(...names);

// OR in diff lines:
// names.forEach(function (element) {
//     console.log(element);
// })

for (let i: number = 0; i < namesList.length - 1; i++) {
    console.log(`${i + 1}. ${namesList[i]}`);
}

namesList.splice(1, 1);

console.log(namesList);

console.log(namesList.reverse());

namesList.splice(0, 2);

console.log(namesList);

console.log(namesList.length);