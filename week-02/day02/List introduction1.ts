'use strict';

let namesList: string[] = [];

console.log(namesList.length);

namesList.push('William');

console.log(namesList);

namesList.push('John', 'Amanda');

console.log(namesList);

console.log(namesList.length);

console.log(namesList[2]);

for (let i: number = 0; i < namesList.length; i++) {
    console.log(`${i + 1}. ${namesList[i]}`);

    console.log(`édslkasdlkfj ${}`)
}

namesList.splice(1, 1);

console.log(namesList);

console.log(namesList.reverse());

namesList.splice(0, 2);

console.log(namesList);

console.log(namesList.length);