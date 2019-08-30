'use strict'
//   Write the image's url to the console.
console.log(document.querySelector('img').getAttribute('src'));

//   Replace the image with a picture of your favorite animal.
document.querySelector('img').setAttribute('src', 'http://www.geocities.ws/pamnock/DHCA1.jpg');

//   Make the link point to the Green Fox Academy website.
document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com');

//   Disable the second button.
document.getElementsByClassName('this-one')[0].setAttribute('disabled', true);

//   Replace its text with 'Don't click me!'.
document.getElementsByClassName('this-one')[0].textContent = 'Don\'t click me!';
