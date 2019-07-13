'use strict';

// Create a Counter class
// - which has an integer property
// - when creating it should have a default value 0 or we can specify it when creating
// - we can add(number) to increase the counter's value by a whole number
// - or we can add() without parameters just increasing the counter's value by one
// - and we can get() the current value as string
// - also we can reset() the value to the initial value

class Counter {
    integer: number;

    add(number?: number) {
        this.integer += number || 1;
    }

    // another solution
    // add(number: number = 1) {
    //     this.integer += number;
    // }

    get() {
        console.log(this.integer);
    }
    reset() {
        this.integer = this.integer;
    }
    constructor(integer?: number) {
        this.integer = integer || 0;
    }

}

let szamolo = new Counter(65);
console.log(szamolo);
szamolo.add(13);
szamolo.get();
console.log(szamolo.reset());

