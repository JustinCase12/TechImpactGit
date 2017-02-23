function setup() {
  createCanvas(600,480);
}
 
function draw() {
  background(100);
   
  stroke(255);
  strokeWeight(2);
  noFill();
   
  if (mouseX > 300) {
    fill(255, 200, 255);
  }
   
  ellipse(300, 240, 50, 50);
}