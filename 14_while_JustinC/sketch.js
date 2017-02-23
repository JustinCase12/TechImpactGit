function setup() {
  createCanvas(600, 480);
}
 
function draw() {
  background(235);
  strokeWeight(2);
  stroke(255);
   
  var x = 0;
  while (x <= width) {
    fill(125, 35, 255);
    ellipse(x, 200, 50, 50);
    x = x + 50;
  }
  
  for (x = 0; x <= width; x += 50){// added another line of ellipse to the while function
    fill(0, 0, 255);
    ellipse(x, 100, 50, 50)
  }
   
  for (x = 0; x <= width; x += 50) {
    fill(255, 0, 200);
    ellipse(x, 300, 50, 50);
  }
  for (x = 0; x <= width; x += 50){//
    fill(0, 255, 0);
    ellipse(x, 400, 50, 50)
  }
}