'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.


function drawLinesToCenter(x: number, y: number) {
    ctx.moveTo(x, y);
    ctx.lineTo(canvas.width/2, 200);
}

for() {

    ctx.beginPath();
}


drawLineToCenter(, );


ctx.stroke()