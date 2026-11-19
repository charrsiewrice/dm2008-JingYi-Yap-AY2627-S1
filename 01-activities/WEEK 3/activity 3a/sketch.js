// DM2008 — Activity 3a [Guided]
// Array Sampler (25 min)
//
// An array stores a list of values — here it's colors, but it could be
// sizes, positions, or anything else.
// Press any key to cycle through the array one item at a time.
//
// Try these:
// - Replace the colors with your own values (sizes, positions, text).
// - Use mousePressed() instead of keyPressed().
// - Use push() to add new items or splice() to remove them.
// - Loop through the whole array to draw all items at once.
//
// Stretch: visualize all items in the array simultaneously instead of one at a time.

let palette = ["#feffad", "#8ec7a2", "#a2ddfb", "#ffbdd9"];
let words = ["Happy", "Birthday", "To", "You!"];
let wordIndex = 0;

function setup() {
  createCanvas(400, 400); 
  noStroke();
  frameRate (10);
}

function draw() {
  background(220);

  // Draw the ellipse using the current color in the array
  fill(palette[0]);
triangle (200, 380, 100, 200, 300, 200);

  for (let i = 0; i < palette.length; i++){
  fill (palette [i]); 
  rect (random (0, 400), random (0, 400), 20);

    textSize (32);
  text(words[wordIndex], 100, 100);
}
}

function keyPressed (){
 wordIndex = wordIndex + 1;
if (wordIndex >= words.length) {
    wordIndex = 0;
}
}