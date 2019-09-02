'use strict'
require('es6-promise');

// To select an exercise, run promise-it-wont-hurt and choose the task you want to work on.
// To test your solution, run promise-it-wont-hurt run mysolution.js.
// To verify your solution, run promise-it-wont-hurt verify mysolution.js. It will mark your exercise complete.

// task 1
// setTimeout(() => console.log('TIMED OUT!'), 300);

// task 2

// let promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => fulfill('FULFILLED!'), 300);
// });

// promise.then(result =>{
// console.log(result)
// })

// task 3
// let promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => reject(new Error('REJECTED!')), 300);
// });

// function onReject(error) {
//   console.log(error.message);
// }

// promise.then(null, onReject);

// task 4

// const promise = new Promise((resolve, reject) => {
//   resolve('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });

// function onRejected(error) {
//   console.log(error.message);
// }

// promise.then(console.log, onRejected);

// task 5

// let promise = new Promise((fulfill, reject)=> {
//   fulfill('PROMISE VALUE');
// });

// promise.then(console.log);

// console.log('MAIN PROGRAM');

// task 6

// let promiseReject = Promise.reject(new Error('this has gone wrong'));
// let promiseResolve = Promise.resolve('this is good');

// promiseResolve.then(console.log);
// promiseReject.catch((err) => {
//   console.log(err.message);
// });

// task 7