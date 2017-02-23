/*
https://vimeo.com/channels/learningp5js/138327558
*/
//james is typing
//justin is talking

//we're trying to add more shapes moving in different directions

//ellipse shape
var x = 0;
var y = 200;
var diameter = 50; 
var r = 23;
var g = 160;
var b = 135;

//rect shape
var rectx = 400
var recty = 100

//triangle shape

var t1 = 200
var t2 = 200
var t3 = 300
var t4 = 100
var t5 = 400
var t6 = 200

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  ellipse(x, y, diameter, diameter);
  fill(16,78,139);
  rect(rectx,recty,50,50);
  fill(0);
  triangle(t1,t2,t3,t4,t5,t6)
  x = x + 1;
  rectx = rectx - 1;
  recty = recty +1;
  t1 =  t1  - 1;
  t2 = t2 - 1;
  t3 = t3 - 1;
  t4 = t4 - 1;
  t5 = t5 - 1;
  t6 = t6 - 1;
  //we couldn't think of any easier way to do move the triangle
  
}