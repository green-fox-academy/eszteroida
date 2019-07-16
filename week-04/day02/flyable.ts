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
    land() {

}
fly() {

}
takeOff() {

}
}

abstract class Vehicle {
    typeOfVehicle: string;
    speedOfVehicle: number;
    color: string;
}
class Helicopter extends Vehicle {

}