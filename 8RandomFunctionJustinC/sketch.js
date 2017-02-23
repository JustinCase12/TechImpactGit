var spot = {
  x: 150,
  y: 75
}

var spot1 = {// new variable for location
	x: 120,
	y: 63
}

var col1 = {// new variable for color
	r: 31,
	g: 231,
	b: 94,
}
 
var col = {
  r: 0,
  g: 125,
  b: 255
}
function setup() {
  createCanvas(600, 480);
  background(0);
}
 
function draw() {
  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 190);
 
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 24, 24);
	
	if (mouseIsPressed) { // when mouse is pressed, new dots will
		 col1.r = (100, 215, 0);//appear that are blue
  col1.g = 200;
  col1.b = (190, 80, 231);
 
  spot1.x = random(0, width);
  spot1.y = random(0, height);
  noStroke();
  fill(col1.r, col1.g, col1.b, 200);
  ellipse(spot1.x, spot1.y, 24, 24);
	}
	
		
}