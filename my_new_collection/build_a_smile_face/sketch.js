function setup() {
  createCanvas(620, 530);
}

function draw() {
  background(255, 170, 0);
  strokeWeight(5);
  hair();
}

function face() {
  fill(250, 235, 212);
}

function hair() {
  var m = millis() / 1000;
  fill(54, 54, 54);
  beginShape();
  vertex(100 + 10 * sin(m), 450);
  bezierVertex(100, 20, 500, 20, 525 - 10 * sin(m), 450);
  endShape();
}
