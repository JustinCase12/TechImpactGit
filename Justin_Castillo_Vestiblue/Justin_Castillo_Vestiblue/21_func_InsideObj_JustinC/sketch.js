var bubble = {
  x: 300,
  y: 200,
  display: function() {
    stroke(255, 0, 255);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 50, 50);
  },
  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

//new bubble 1
var bubble1 = {
  x: 150,
  y: 75,
  display: function() {
    stroke(255, 0, 255);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 50, 50);
  },
  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
// bubble 2
var bubble2 = {
  x: 450,
  y: 75,
  display: function() {
    stroke(255, 0, 255);
    strokeWeight(2);
    noFill();
    ellipse(this.x, this.y, 50, 50);
  },
  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  
}
 
function setup() {
  createCanvas(600, 400);
}
 
function draw() {
  background(0);
  bubble.move();
  bubble.display();
  
  //new bubble 1
  bubble1.move();
  bubble1.display();
  
  //new bubble 1
  bubble2.move();
  bubble2.display();
}