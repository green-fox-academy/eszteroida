'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"

let line: string = 'I won\'t cheat on the exam!'
let a: number = 0;

while (a < 100) {
    console.log(line);
    a++;

}


for (let i = 1; i <= 100; i++) {
    console.log(`${i} "I won't cheat on the exam!"`);
}