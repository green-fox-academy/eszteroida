'use strict'
import Animal from './animals';
class Cat extends Animal {

    constructor(name: string, isHealthy: boolean, ownerName?: string, healCost?: number) {
        super(name,
            isHealthy,
            ownerName,
            healCost = Math.floor(Math.random() * 6))
    };
}

export default Cat;
