var circleX = 50;

function setup() {
    createCanvas(600, 400);

}

function draw() {
    background(250, 0, 250);
    noStroke();
    fill(0,0,255);
    ellipse(circleX, 200, 55, 55);
    
    circleX = circleX + 1;
}