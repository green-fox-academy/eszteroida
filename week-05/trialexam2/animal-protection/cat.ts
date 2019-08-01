'use strict'
import Animal from './animals';
class Cat extends Animal {

    constructor(name: string, ownerName: string, isHealthy: boolean, healCost?: number) {
        super(name,
            ownerName,
            isHealthy,
            healCost = Math.floor(Math.random() * 6))
    };
}
let cat: Cat = new Cat('Kitty', 'Missy', true);
console.log(cat);

export default Cat;
