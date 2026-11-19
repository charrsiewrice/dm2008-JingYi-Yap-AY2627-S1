// DM2008 — Activity 1b [Georg Nees]
// Learning By Making (30 min)

let x = 10;
let y;
let w = 50;
let c = (240, 100, 71);

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#096213");
  frameRate (10);
  
  y = random(height);
  
  // background(240,40);

  fill (222, 24, random (10,200));
  ellipse (250,400,100,);
  fill (222, 24, random (10,200));
  ellipse (550,400,100,);
  fill ("#826464");
  ellipse (width/2, 800, 500, 1000);
  fill ("#030303");
  ellipse (350,500,10);
  fill ("#030303");
  ellipse (450,500,10);
  fill ("#ff0000");
  ellipse (width/2, 600, w, w);
  w = w + 1;
  fill ("#fbff00");
  rect (mouseX, mouseY, 100, x)
} function mousePressed () {
  x = random (50, 700);
}
