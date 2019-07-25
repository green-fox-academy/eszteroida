'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.

let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(item) {
  for(let i: number = 0; i<=item.length-1;i++) {
      item[i] += 'a';
  }
  return item;
}

console.log(appendA(far));

// V2
// function appendA(list: string[]): string[] {
//   let newList :string [] = [];
//   list.forEach(function (element) {
//       element += 'a';
//       newList.push(element); 
//   })
//   return newList;
// }

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'

//export = appendA;