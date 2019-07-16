'use strict';
import Animal from './animals';
import Flyable from '../flyable/flyable';

class Bird extends Animal implements Flyable {
    constructor(name: string, eyes: number = 2) {
        super();
        this.name = name;
        this.eyes = eyes;
    }
    breed() {
        return 'laying eggs.';
    }

    land(): string {
        return 'lands on ground.'
    }
    fly(): string {
        return `${this.name} flies shortly.`
    }
    takeOff(): string {
        return 'takes off anywhere.'
    }
}

let birdie = new Bird('duck');

console.log(birdie.fly());

export default Bird;
