/*
https://vimeo.com/channels/learningp5js/138327558
*/
var circle = {
  x: 0,
  y: 200, 
  diameter: 50
};

var rectangle = {
  x: 100,
  y: 50,
  w: 40,
  h: 40
};

var r = 23;
var g = 160;
var b = 135;

function setup() {
  createCanvas(600, 400);  
  background(r, g, b); //changed background location to make ellipse leave a black trail
}

function draw() {
  // background
  // ellipse
  var ra = random([1],[255]);
  fill(ra, 100, ra);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  frameRate(100); //dont know why it applies to everything
  fill(150);
  rect(rectangle.x, rectangle.y, rectangle.w, rectangle.h); 
  
  circle.x = circle.x + 1;
  rectangle.y = rectangle.y + 1;
}