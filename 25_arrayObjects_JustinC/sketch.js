var bubbles = [];
var squares = [];
 
function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 5; i++) {
    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        stroke(255, 125, 35);
        noFill();
        ellipse(this.x, this.y, 38, 38);
      },
      move: function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }
  }
  
  for (var j = 0; j < 5; j++){
    squares[j] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        stroke(255, 125, 35);
        noFill();
        rect(this.x, this.y, 38, 38);
      },
      move: function() {
        this.x = this.y + random(-1, 1);
        this.y = this.y + random(-1, 1);
      }
    }
  }
 
}
 
function draw() {
  background(125, 0, 255);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  for (var j = 0; j < squares.length; j++){
    squares[j].move();
    squares[j].display();
  }
}