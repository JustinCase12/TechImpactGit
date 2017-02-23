function setup() {
  createCanvas(600, 400);
}
 
function draw() {
  background(50);
  lollipop(100, 50, 50);
  lollipop(300, 150, 150);
  lollipop(500, 250, 50);
  //Added more lollipops
  lollipop(100, 250,50);
  lollipop(500, 50, 50);
  
  //Added snow that follows similar logic to the lollipop
  
  snow(random([0],[600]), random([0],[400]), 20, 20);
  snow(random([0],[600]), random([0],[400]), 20, 20);
  snow(random([0],[600]), random([0],[400]), 20, 20);
  snow(random([0],[600]), random([0],[400]), 20, 20);
}
 
function lollipop(x, y, diameter) {
  fill(0, 200, 255);
  rect(x-10, y, 20, 150);
   
  fill(255, 0, 200);
  ellipse(x, y, diameter, diameter);
}


//Snow 
function snow(x, y, diameter) {
   
  fill(255, 255, 255);
  ellipse(x, y, diameter, diameter);
}