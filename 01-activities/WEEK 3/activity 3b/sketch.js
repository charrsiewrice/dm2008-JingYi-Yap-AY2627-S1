// DM2008 — Activity 3b
// One Function Wonder (30 min)
//
// Write a function that draws a shape or group of shapes.
// It should take at least one parameter — try x, y, size, or color.
// Call it several times with different values to create variation.
//
// Ideas: a simple face, a flower, a house, an icon.
// Example: myShape(100, 200, 50); myShape(300, 200, 80);
//
// Stretch: call your function inside a for loop to create a repeating pattern.
let rot = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  noStroke();
}

function draw() {
   background ("#bd0505", 40)
  for (let i = 0; i < 10; i++) {
    carrot(
      random(width),
      random(height),
      color(random(255), random(255), random(255))
    );
  }
  rot++;
}

// Define your function outside draw()
// It can be called from anywhere in your sketch

function carrot(x, y, c) {
  push();
  fill(c);
  translate(x,y);
  rotate(radians(rot));
  triangle(0, 0, 0 - 30, 0 + 150, 0 + 30, 0 + 150);
  fill("#fba40e");
  triangle(0, 0 / 2, 0 - 50, 0 + 120, 0 + 50, 0 + 120);
  fill ("#000000");
  rect (0 - 7, 0 + 40, 0+40, 0+5);
  fill ("#000000")
  rect (0 - 10, 0 + 70, 0 + 50, 0 + 5);
  pop();
}
