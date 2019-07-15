'use strict';
import Plants from './plants';
// The Tree
// needs water if its current water amount is less then 10
// when watering it the tree can only absorb the 40% of the water
// eg. watering with 10 the tree's amount of water should only increase with 4

class Tree extends Plants {

    constructor(name: string, currentWaterAmount: number) {
        super(name, currentWaterAmount);
    }
    needsWater(): boolean {
        return this.currentWaterAmount < 10;
    }
    getsWater(wateringAmount: number): number {
        return this.currentWaterAmount += wateringAmount * 0.4;
    }
}

// let maple: Tree = new Tree('maple', 3);
// let pine: Tree = new Tree('pine', 40);
// let apple: Tree = new Tree('apple', 20);
// let oak: Tree = new Tree('oak', 33);
// let cherry: Tree = new Tree('cherry', 15);
// // console.log(maple);
// // console.log(maple.needsWater());

// // console.log(pine.getsWater(20));


export default Tree;
