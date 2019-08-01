'use strict'
import Animal from './animals';
class Parrot extends Animal {

    constructor(name: string, ownerName: string, isHealthy: boolean, healCost?: number) {
        super(name,
            ownerName,
            isHealthy,
            healCost = Math.floor(Math.random() * 6) + 4)
    };
}
let Csicsorke: Parrot = new Parrot('Cső', 'Léna', true)
console.log(Csicsorke);

export default Parrot;
