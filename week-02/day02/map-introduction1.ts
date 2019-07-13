'use strict';
export{};
// We are going to play with maps. Feel free to use the built-in methods where possible.
// Create an empty map where the keys are integers and the values are characters
let mapExample = {

};

// Print out whether the map is empt= new Object<:number, :string> ;y or not
console.log(Object.keys(mapExample).length);

// Add the following key-value pairs to the map
mapExample[97] = 'a';
mapExample[98] = 'b';
mapExample[99] = 'c';
mapExample[65] = 'A';
mapExample[66] = 'B';
mapExample[67] = 'C';

// Key	Value
// 97	a
// 98	b
// 99	c
// 65	A
// 66	B
// 67	C
// Print all the keys
console.log(Object.keys(mapExample));
// Print all the values

//console.log(Object.values(mapExample));
// Add value D with the key 68
mapExample[68] = 'D';
// Print how many key-value pairs are in the map
console.log(Object.keys(mapExample).length);
// Print the value that is associated with key 99
console.log(mapExample[99]);

// Remove the key-value pair where with key 97
delete mapExample[97];

// Print whether there is an associated value with key 100 or not
console.log(Object.hasOwnProperty(mapExample[100]));
// Remove all the key-value pairs
//delete mapExample[];
console.log(mapExample);
