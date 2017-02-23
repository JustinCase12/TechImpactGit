function setup() {
  createCanvas(500,500);
  background(100)
}

function draw() {
    //Earth
    strokeWeight(2);
    fill(51, 204, 255)
    ellipse(250,600, 600, 600);
    //Smol moon
    strokeWeight(5);
    fill(235, 235, 224);
    ellipse(100, 230, 45, 45)
    //meduim moon
    fill(235, 235, 224);
    ellipse(200, 130, 75, 75);
    //big moon
    fill(235, 235, 224);
    ellipse(370, 100, 120, 120);
    point(30, 20);
  point(20, 30);
  point(85, 75);
  point(30, 75);
}

//Dalini was the driver
//Justin was the writer