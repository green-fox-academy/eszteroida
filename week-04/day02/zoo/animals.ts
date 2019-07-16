'use strict';

abstract class Animal {
    name: string;
    age: number;
    eyes: number;
    legs: number;
    placeToLive: string;
    getName() {
        return `${this.name}`
    };
    abstract breed(): string;

    constructor() { }
}

export default Animal;