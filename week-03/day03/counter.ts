'use strict';

// Create a Counter class
// - which has an integer property
// - when creating it should have a default value 0 or we can specify it when creating
// - we can add(number) to increase the counter's value by a whole number
// - or we can add() without parameters just increasing the counter's value by one
// - and we can get() the current value as string
// - also we can reset() the value to the initial value

class counter {
    integer: number;
    constructor(integer: number = 0) {
        this.integer = integer;
    }
    add(item: number = 1) {
        this.integer += item;
    }
    get(): string {
        return this.integer.toString();
    }

    reset() {
        this.integer = 0;
    }
}

let trial = new counter();
console.log(trial);
trial.add(3);
console.log(trial);
trial.reset();
console.log(trial);
trial.add();
console.log(trial);

console.log(typeof trial.get());