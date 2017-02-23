/*
https://vimeo.com/channels/learningp5js/138327548
*/

//typer is James
//talker is Justin


//background/canvas
function setup() {
  frameRate(5); //changed frame rate
  createCanvas(600, 400);
  background(250, 250, 100);
}

//ellipse/mouse movement
function draw() {
  fill(250, 200, 200);
  rect(mouseX, mouseY, 100, 100); //changed ellipse to circle
}

//mousePressed function 
function mousePressed() {
  var r = random([1],[255]); //random variable only worked inside this function.
  background(r, r, 100); //background changes to a random color when pressed.
  
}

