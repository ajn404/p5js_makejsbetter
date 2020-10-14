function setup() {
  createCanvas(innerWidth, innerHeight);
}
function draw() {
  background(127);
  noStroke();
  for (let i = 0; i < width; i += 20) {
    fill(129, 206, 15);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}
