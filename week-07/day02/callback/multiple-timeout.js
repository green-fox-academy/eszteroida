'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

console.log('apple');

setTimeout(() => {
    console.log('pear');
}, 1000);

setTimeout(() => {
    console.log('melon');
}, 3000);

setTimeout(() => {
    console.log('grapes');
}, 5000);

//setTimeout(console.log, 1000, 'pear');
// setTimeout(console.log, 3000, 'melon');
// setTimeout(console.log, 5000, 'grapes');

// const fruits = () => {
//     console.log('apple');
//     setTimeout(() => {
//         console.log('pear');
//     }, 1000);
//     setTimeout(() => {
//         console.log('melon');
//     }, 3000);
//     setTimeout(() => {
//         console.log('grapes');
//     }, 5000);
// };
// fruits();