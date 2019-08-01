'use strict'
import Animal from './animals';
class Dog extends Animal {
    constructor(name: string, ownerName: string, isHealthy: boolean, healCost?: number) {
        super(name,
            ownerName,
            isHealthy,
            healCost = Math.floor(Math.random() * 8) + 1)
    };
}

export default Dog;
