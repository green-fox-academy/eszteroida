'use strict'
// 1) replace the list items' content with items from this list:
// ['apple', 'banana', 'cat', 'dog']
let elementList = document.querySelectorAll('li');
let contentList = ['apple', 'banana', 'cat', 'dog'];
for (let i = 0; i < elementList.length; i++) {
  elementList[i].textContent = contentList[i];
}

// 2) change the <ul> element's background color to 'limegreen'
// - use css class to change the color instead of the style property
let ul = document.querySelector('ul');
ul.classList.add('a');
// ul - en belül li tag - ek:
// let ul = document.querySelector('ul > li');
