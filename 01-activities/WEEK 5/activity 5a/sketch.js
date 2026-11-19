// DM2008 — Activity 5a [Guided]
// Colliding Circles (30 min)
//
// A vector stores position and movement together — cleaner than separate x and y variables.
// Your job is to get two balls moving, then detect and respond to their collision.
//
// Suggested order:
// 1. Create two Ball objects in setup()
// 2. Check the distance between them in draw()
// 3. Trigger a visual response when they collide
// 4. Implement edge behaviour in move() — wrap or bounce, your choice
//
// Stretch: add a third ball, or make the collision response affect both balls.

let balls = [];
let radiusA = 30;
let radiusB = 50;

function setup() {
  createCanvas(400, 400);

  // Create two balls at different starting positions
  balls.push(new Ball(100, 200, radiusA));
  balls.push(new Ball(300, 200, radiusB));
}

function draw() {
  background(230);

  // Check collision between the two balls
  let d = dist(
    balls[0].pos.x,
    balls[0].pos.y,
    balls[1].pos.x,
    balls[1].pos.y
  );

  let colliding = d < balls[0].r + balls[1].r;

  // Make both balls respond when they collide
  if (colliding) {
    balls[0].wasColliding = true;
    balls[1].wasColliding = true;
  } else {
    balls[0].wasColliding = false;
    balls[1].wasColliding = false;
  }

  // Move and display all balls
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show(balls[i].wasColliding);
  }
}

class Ball {
  constructor(x, y, r) {
    // Position and velocity are stored as vectors
    this.pos = createVector(x, y);
    this.vel = createVector(random(-2, 2), random(-2, 2));

    this.r = r;
    this.wasColliding = false;
  }

  move() {
    // Move the ball using its velocity vector
    this.pos.add(this.vel);

    // Bounce off the edges
    if (this.pos.x + this.r > width || this.pos.x - this.r < 0) {
      this.vel.x *= -1;
    }

    if (this.pos.y + this.r > height || this.pos.y - this.r < 0) {
      this.vel.y *= -1;
    }

    // Keep the ball inside the canvas
    this.pos.x = constrain(this.pos.x, this.r, width - this.r);
    this.pos.y = constrain(this.pos.y, this.r, height - this.r);
  }

  show(colliding) {
    // Change colour when the balls collide
    if (colliding) {
      fill(255, 100, 100);
    } else {
      fill(100, 180, 220);
    }

    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}