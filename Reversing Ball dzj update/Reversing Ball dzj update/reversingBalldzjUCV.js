//Typer both: Zahra and Dalini, Driver, Dalini and Zahra

var x = 0;//Var for x
var w= 70// Var for w
var y = 300 //Var for y
var speed = 5;// Varfor speed// changed speed from 3 to 5


function setup() {
  createCanvas(600, 480);
}

function draw() {
  background(255,0,255);
  //ellipse
  stroke(125);
  strokeWeight(2);
  fill( 85);
  rect (x, y, w, 60);//rect shape
  
  //if statement for speed. If x greater than width OR X is less than zero it will reverse.
  if (x > height || x < 0) { // changed x> to height from width to make circle stop within the boarder.
    speed = speed * -1
    if(y>200 && x< 35);//if y is greater than 200 and x is less 35 a black ellipse will appear on those cordinates. 
    fill(0);
     ellipse(200,200,200,200);
  }
  
 x = x + speed; 
 
}