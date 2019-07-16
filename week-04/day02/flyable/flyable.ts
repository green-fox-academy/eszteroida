'use strict';

// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
// it should have at least 3 fields
// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement yourˇFlyable interface

interface Flyable {
    land(): string;
    fly(): string;
    takeOff(): string;
}

abstract class Vehicle {
    typeOfVehicle: string;
    speedOfVehicle: number;
    color: string;
    constructor() { }
}
class Helicopter extends Vehicle implements Flyable {
    name: string;
    land(): string {
        return 'lands on ground.'
    }
    fly(): string {
        return `${this.name} flies quick.`
    }
    takeOff(): string {
        return 'takes off anywhere.'
    }
    constructor(name: string) {
        super()
        this.name = name;
    }
}

let helicop = new Helicopter('MI-8');
console.log(helicop.fly());

export default Flyable;