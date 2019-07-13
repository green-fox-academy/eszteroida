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
    slots: number = 2;

    breed(): void {
        if (this.slots > 0) {
            let newaminal = new Animal();
            this.slots --;
        }
        
    }
    slaughter() {

    }

}

let newFarm = new Farm();
newFarm.breed();
console.log(newFarm);

