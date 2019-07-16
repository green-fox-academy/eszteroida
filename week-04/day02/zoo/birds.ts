'use strict';
import Animal from './animals';

class Bird extends Animal {
    constructor(name: string, eyes: number = 2){
        super();
        this.name = name;
        this.eyes = eyes;
    }
    breed() {
        return 'laying eggs.';
    }
}

export default Bird;
