'use strict';
// 1. store the element that says 'The King' in the 'king' variable and console.log it.
const king = document.getElementById('b325');
console.log(king.textContent);
// innerHTML vagy innerText is ok

// 2. store 'The Businessman' and 'The Lamplighter' in the 'businessLamp' variable.
// console.log each of them.

const businessLamp = document.querySelectorAll('.big');
businessLamp.forEach(function (element) {
  console.log(element.textContent)
});

// 3. store 'The King' and 'The Conceited Man' in the 'conceitedKing' variable.
// alert them one by one.

const conceitedKing = document.querySelectorAll('section .asteroid');
conceitedKing.forEach(function (element) {
  alert(element.textContent);
});

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter' in the 'noBusiness' variable.
// console.log each of them.

const noBusiness = document.querySelectorAll('div');
noBusiness.forEach(function (element) {
  console.log(element.textContent);
})
