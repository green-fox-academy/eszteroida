'use strict';
import Flower from './flower';
import Tree from './tree';
import Plants from './plants';

// The Garden
// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

class Garden {
    plants: (Flower | Tree)[];

    constructor(plants?: (Flower | Tree)[]) {
        this.plants = [];
    }
    addPlants(plant: Flower | Tree) {
        this.plants.push(plant);
    }

    watering(wateringAmount: number) {
        let plantsNeedingWater: (Flower | Tree)[] = [];
        this.plants.forEach(function (element) {
            if (element.needsWater()) {
                plantsNeedingWater.push(element);
            }
        })

        plantsNeedingWater.forEach(function (element) {
            element.getsWater(wateringAmount / plantsNeedingWater.length);
        })
    }
}


let daffodil: Flower = new Flower('daffodil', 1);
let rose: Flower = new Flower('rose', 20);
let daisy: Flower = new Flower('daisy', 3);
let lily: Flower = new Flower('lily', 0);

let mygarden: Garden = new Garden();
console.log(mygarden);
mygarden.addPlants(rose);
console.log(mygarden.plants);
mygarden.addPlants(lily);
mygarden.addPlants(daisy);
mygarden.addPlants(daffodil);
console.log(mygarden.plants);

mygarden.watering(10);
console.log(mygarden.plants);
