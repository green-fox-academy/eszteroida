'use strict';
import Flower from './flower';
import Tree from './tree';
// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4

class Plants {
    name: string;
    currentWaterAmount: number;
    wateringAmount: number;

    constructor(name: string, currentWaterAmount: number) {
        this.name = name;
        this.currentWaterAmount = currentWaterAmount;
    }

    needsWater(): boolean {
        return this.currentWaterAmount < 10;
    }

    getsWater(wateringAmount: number): number {
        return wateringAmount * 0.75;
    }
}


export default Plants;