'use strict';

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals = ['koal', 'pand', 'zebr'];
animals[0] = animals[0] + 'a';
animals[1] = animals[1] + 'a';
animals[2] = animals[2] + 'a';

console.log(animals);


// version 2 

// animals.forEach(function (element) {
//     console.log(element += "a");
// })