'use strict';
//  Car
//      gasAmount
//      capacity
//      create constructor for Car where:
//          initialize gasAmount -> 0
//          initialize capacity -> 100
class Car {
    gasAmount: number;
    capacity: number;
    constructor(gasAmount: number = 0, capacity: number = 100) {
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}

// let Mazda = new Car();
// console.log(Mazda);


export {Car};
