'use strict';
import Plants from './plants';
// The Flower
// needs water if its current water amount is less then 5
// when watering it the flower can only absorb the 75% of the water
// eg. watering with 10 the flower's amount of water should only increase with 7.5

class Flower extends Plants {

    constructor(name: string, currentWaterAmount: number) {
        super(name, currentWaterAmount);
    }
    needsWater(): boolean {
        return this.currentWaterAmount < 5;
    }
    getsWater(wateringAmount: number): number {
        return this.currentWaterAmount += wateringAmount * 0.75;
    }
}

// let daffodil: Flower = new Flower('daffodil', 10);
// let rose: Flower = new Flower('rose', 20);
// let daisy: Flower = new Flower('daisy', 0);
// let lily: Flower = new Flower('lily', 3);
// console.log(lily.needsWater());
// lily.currentWaterAmount = 8;
// console.log(lily.needsWater());
// console.log(lily);
// console.log(lily.getsWater(10));

// console.log(daisy);
// console.log(daisy.getsWater(20));

// console.log(rose);
// console.log(rose.getsWater(40));


export default Flower;

