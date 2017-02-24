var nums = [200, 43, 29, 96];
var num = 55;
 
function setup() {
    createCanvas(400, 400);
}
 
function draw() {
    background(255, 135, 23);
    ellipse(100, 200, num, num);
    ellipse(200, 200, nums[3], nums[3]);
    ellipse(300, 300, nums[2], nums[2]);
    
    rect(160, 132, nums[3], nums[2]);//added rect to see where it will land and what size it would be
    rect(250, 250, nums[1], nums[3]);
}