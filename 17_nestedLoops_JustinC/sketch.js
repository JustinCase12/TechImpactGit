function setup() {
  createCanvas(600, 400);  
}
 
function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
 
  for (var x = 0; x <= mouseY; x += 50) {//switched the mouse to vertical
    for (var y = 0; y <= width; y += 50) { //width has all the ellipse filled
    fill(random(255), 0, random(255));
    ellipse(y, x, 25, 25); // switched the xy to yx
    }
  }
   
 
   
}