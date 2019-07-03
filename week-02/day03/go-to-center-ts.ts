'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function drawLineToCenter(x: number, y: number) {
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
}

ctx.beginPath();

drawLineToCenter(25, 125);
drawLineToCenter(60, 200);
drawLineToCenter(90, 300);

ctx.stroke()