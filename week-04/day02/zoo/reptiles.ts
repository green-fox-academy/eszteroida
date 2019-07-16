'use strict';
import Animal from './animals';

class Reptile extends Animal {

    constructor(name: string, eyes: number = 2){
        super();
        this.name = name;
        this.eyes = eyes;
    }
    breed(): string {
        return 'laying eggs.';
    }
}

export default Reptile;