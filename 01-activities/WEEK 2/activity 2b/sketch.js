// DM2008 — Activity 2b
// Pattern Making (40 min)
//
// Use a for loop to draw a repeating pattern of shapes.
// Add a condition to introduce variation, and one interaction that changes the rule.
//
// Stretch: try a second row, or turn your row into a 2D grid.

let shapeColour;
let circleSize = 20;
const spacing = 10

function setup() {
  createCanvas(400, 400);
  frameRate(10);
   background(240);
}

function draw() {

  // % (modulo) is handy for alternating every other shape
  for (let i = 0; i < width; i += 50) {
    if ((i/spacing) % 2 ==1) {
      fill(229, 207, 230);
      ellipse(i, height / 2, circleSize);
    } else {
      fill(167, 232, 223);
      ellipse(i, height / 2, circleSize);
    }
  }
  circleSize = circleSize + 5;

   for (let i = 0; i < width; i += 50) {
    if ((i/spacing) % 2 ==1) {
      fill(255, 133, 139);
      rect (i, height / 6, circleSize/2);
    } else {
      fill(167, 232, 137);
      ellipse(i, height / 6, circleSize/2);
    }
  }
  circleSize = circleSize + 5;

  if (circleSize > 200) {
    frameRate (5);
  }
}

function keyPressed (){
  switch (key){
    case 'r':
      background(255, 255, 161);
      break;
    case 'g':
      background(120, 178, 255);
      break;
    case 'b':
      background(255, 156, 222);
      break;
    default: 
      background(240);
  }
}
