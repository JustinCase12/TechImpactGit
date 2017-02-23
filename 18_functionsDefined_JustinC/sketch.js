var ball = {
  x: 300, 
  y: 200, 
  xspeed: 4, 
  yspeed: -3
}
					//added a rect the does not follow the ellipse
var rect1 = {
	x1: 350,
  y1: 250,
  xspeed1: 3,
  yspeed1: -4
}
 
function setup() {
  createCanvas(600, 400);
}
 
function draw() {
  background(100);
  move();
  bounce();
  display();
   
   
}
 
function bounce() {
   
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  } 
   
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
  
  //Rect move------------------------------------------------
  if (rect1.x1 > width || rect1.x1 < 0) {
    rect1.xspeed1 = rect1.xspeed1 * -1;
  } 
   
  if (rect1.y1 > height || rect1.y1 < 0) {
    rect1.yspeed1 = rect1.yspeed1 * -1;
  }
}
 
function display() {
  stroke(255);
  strokeWeight(4);
  fill(200, 200, 100);
  ellipse(ball.x, ball.y, 24, 24);
  rect(rect1.x1, rect1.y1, 24, 24);
}
 
function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  	
  rect1.x1 = rect1.x1 + rect1.xspeed1;
  rect1.y1 = rect1.y1 + rect1.yspeed1;
  
   
}




   
  
 
