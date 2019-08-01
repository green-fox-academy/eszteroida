'use strict'
import Animal from './animals';
class Dog extends Animal {
    constructor(name: string, isHealthy: boolean, ownerName?: string, healCost?: number) {
        super(name,
            isHealthy,
            ownerName,
            healCost = Math.floor(Math.random() * 8) + 1)
    };
}

export default Dog;
