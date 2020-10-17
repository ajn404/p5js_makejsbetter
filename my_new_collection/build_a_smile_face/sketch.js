function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(255, 170, 0);
  strokeWeight(5);
  hair();
  face();
}

function face() {
  fill(250, 235, 212);
  bezier(175, 250, 155, 550, 465, 550, 445, 250);
  fill(250, 128, 114);
  ellipse(230, 410, 40, 20);
  ellipse(390, 410, 40, 20);
}

function hair() {
  var m = millis() / 1000;
  fill(54, 54, 54);
  beginShape();
  vertex(100 + 10 * sin(m), 450);
  bezierVertex(100, 20, 500, 20, 525 - 10 * sin(m), 450);
  endShape();
}
