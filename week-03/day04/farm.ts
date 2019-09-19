'use strict';
import { Animal } from '../day03/animal'

// Reuse your Animal class 
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

class Farm {
    listOfAnimals: string[] = [];
    slots: number = 5;

    constructor(listOfAnimals: Animal[], slots: number) {
        this.listOfAnimals = this.listOfAnimals;
        this.slots = slots;
    }
    breed() {
        if (this.slots > 0) {
            this.listOfAnimals.push();
            this.slots--;
        }
    }
    slaughter() {
        //this.listOfAnimals.sort();
        this.listOfAnimals.reverse();
        this.listOfAnimals.pop();
        this.slots++;
    }
}

let newFarm = new Farm(Animal[0], 10);
newFarm.breed();
newFarm.breed();
newFarm.breed();
newFarm.slaughter();
console.log(newFarm);

