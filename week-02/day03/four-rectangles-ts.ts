'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.
let x: number;

ctx.fillStyle = "";

function createDiffRects(a: number, b: number, x: number, y: number) {
    ctx.fillRect(a, b, x, y);

}
ctx.fillStyle = "red";
createDiffRects(10, 20, 10, 20);
ctx.fillStyle = "green";
createDiffRects(50, 70, 200, 400);
ctx.fillStyle = "yellow";
createDiffRects(100, 300, 500, 100);
ctx.fillStyle = "lime";
createDiffRects(550, 350, 50, 10);


ctx.fill();