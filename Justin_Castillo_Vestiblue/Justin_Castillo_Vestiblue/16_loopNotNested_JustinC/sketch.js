var offset = 0;
var offset1 = 0;//new variables for other lines
var offset2 = 0;//new variables for other lines
 
function setup() {
  createCanvas(600, 400);  
}
 
function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);
 
  for (var x = 0; x <= width; x += 50) {
    fill(0, random(255), random(255));
    ellipse(x + offset, 100, 30, 30);
  }
   
 
  
  for (var x = 0; x <= width; x += 50) {// this starts the secound line in the program
    fill(0, random,(255), random(255));
    ellipse(x + offset1, 200, 30, 30);
  }
  
  for (var x = 0; x <= width; x += 50) {// this starts the third line in the program
    fill(0, random,(255), random(255));
    ellipse(x + offset2, 300, 30, 30);
  }
  
  offset1 = offset1 + 1;
  offset = offset + 1;//movement
  offset2 = offset2 + 1;
}