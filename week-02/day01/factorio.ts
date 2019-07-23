'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(item: number): number {
   let sumFact: number = 1;
    for (let i: number = 1; i <= item; i++) {
    sumFact *= i;
    
    } return sumFact;
}

// i indulhat 2-től is akár
console.log(factorio(4));