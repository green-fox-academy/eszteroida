'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 100);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(300, 300);
ctx.strokeStyle = 'green';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(100, 300);
ctx.strokeStyle = "blue";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(100, 100);
ctx.strokeStyle = "yellow";
ctx.stroke();