// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

   fill("#47d2f5");
  rect(0,0,400,400);
  
  // rgb value
  fill (245, 230, 157);
  // x,y,width,height
  ellipse(200, 200, 200, 50);
  // hex value 
  fill("#66b823");
  //fin
  triangle(151, 178,160, 150, 170, 175);
  // hex value 
  fill("#1a30db");
  //fin
  triangle(171, 175,179, 125, 224, 174);
  // hex value 
  fill("#d15715");
  //fin
  triangle(224, 174,250, 150, 261, 180);
  // hex value 
  fill("#714833");
  //eyeball
  ellipse(125, 199, 5, 5);
  // hex value 
    fill("#a932a5");
  triangle (192, 188, 192, 206, 223, 198);
  fill("#e52424");
  rect (150, 225, 100, 200);
  line(175, 288, 200, 264);
  strokeWeight(5);
  line(200,264, 200, 338);
  strokeWeight(5);
  line(175, 338, 225, 338);
  strokeWeight(5);
  fill("#d8e9e8");
  ellipse(85, 178, 20, 20);
  fill("#d8e9e8");
  ellipse(97, 150, 25, 25);
  fill("#d8e9e8");
  ellipse(77, 117, 30, 30);
  fill("#444b4a");
  ellipse(24, 400, 200, 100);
  
  
  // YOUR CODE HERE
  
  helperGrid(); // do not edit or remove this line
}
