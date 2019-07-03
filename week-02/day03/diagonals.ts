'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, 
//otherwise it should be red.
let i: number = 0;

if (i === 0) {
    ctx.strokeStyle = "green";

} else {
ctx.strokeStyle = "red";

}


//ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(i, i);
ctx.lineTo(600, 400);
ctx.stroke();

//ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(i, 400);
ctx.lineTo(600, i);
ctx.stroke();



// if-fel
