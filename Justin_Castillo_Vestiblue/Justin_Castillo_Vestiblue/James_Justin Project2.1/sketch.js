/*
https://vimeo.com/channels/learningp5js/138331676
*/

//James is driving
//Justin is typing


var j = 0; //swinging test
var y = 0;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  // background
  background(250, 0, 250);
  // ellipse
  noStroke();
  fill(0, 0, 255);
  ellipse(
    500 + sin(j)*100,
    500 + sin(y)*100, //we do not fully understand sin yet, but we tried.
    mouseX, mouseY); //made the ellipse change shape (must move the mouse)
  j += .1; //part of swinging test
  y += .2;
}