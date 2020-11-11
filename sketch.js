
function setup() {
  hr = hour;
  mn = minuite;
  sc = second;
    angleMode(DEGREES);
  createCanvas(800,400);
  scAngle = map(sc, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
}
function draw() {
  background(255,255,255);  
  drawSprites();
}