'use strict';
import Animal from './animals';

class Mammal extends Animal {

    constructor(name: string, eyes: number = 2){
        super();
        this.name = name;
        this.eyes = eyes;
    }
    breed(): string {
        return 'pushing miniature versions out.';
    }
}

export default Mammal;