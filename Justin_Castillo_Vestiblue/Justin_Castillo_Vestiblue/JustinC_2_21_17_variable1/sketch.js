function setup() {
  createCanvas(600,480);
}

function draw() {
  background(100);
  
  stroke(255);
  strokeWeight(2);
  noFill();
  
  if (mouseY > 300) {
    fill(255, 200, 255);
  }
  
  rect(300, 240, 50, 50);
}