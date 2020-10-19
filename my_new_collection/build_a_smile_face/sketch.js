function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(255, 170, 0);
  strokeWeight(5);
  hair();
  face();
  bang();
  glasses();
  eye();
  mouse();
  if (mouseIsPressed === true) {
    SYC();
    hair();
    face();
    bang();
    glasses();
    eye2();
    mouse2();
    TF();
  }
}

//下面三个函数定义头发和脸部
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

function bang() {
  fill(54, 54, 54);
  rect(155, 170, 300, 140, 360, 180, 30, 30);
  fill(250, 235, 215);
  triangle(189, 310, 195, 310, 190, 280);
  triangle(197, 310, 205, 310, 198, 250);
}

function glasses() {
  fill(0, 0, 0);
  circle(250, 350, 100);
  circle(370, 350, 100);
  arc(310, 350, 25, 15, PI, TWO_PI);
  rect(180, 345, 30, 10);
  rect(410, 345, 30, 10);
  fill(250, 235, 215);
  circle(250, 350, 85);
  circle(370, 350, 85);
  arc(310, 355, 21, 15, PI, TWO_PI);
}
function eye() {
  fill(0, 0, 0); //眼睛
  var m = millis() / 20;
  ellipse(250, 350, 50, 60);
  ellipse(370, 350, 50, 60);
  fill(255, 250, 250);
  circle(250, 345 + (1 / 2) * sin(m), 30);
  circle(370, 345 + (1 / 2) * sin(m), 30);
  circle(235, 359 + (1 / 2) * sin(m), 15);
  circle(355, 359 + (1 / 2) * sin(m), 15);
  circle(250, 365 + (1 / 2) * sin(m), 15);
  circle(370, 365 + (1 / 2) * sin(m), 15);
}

function eye2() {
  fill(0, 0, 0); //眼睛闭眼
  ellipse(250, 350, 50, 60);
  fill(255, 250, 250);
  circle(250, 345, 30);
  circle(235, 359, 15);
  circle(250, 365, 15);
  line(350, 350, 380, 330);
  line(350, 350, 390, 350);
  line(350, 350, 380, 370);
}

function mouse() {
  fill(255, 64, 64);
  ellipse(310, 420, 20, 30);

  fill(250, 235, 215);

  arc(297, 405, 25, 25, 0, HALF_PI);
  arc(322, 405, 25, 25, HALF_PI, PI);
}
function mouse2() {
  fill(255, 64, 64);
  bezier(280, 410, 280, 450, 339, 450, 339, 410);
  strokeWeight(6);
  line(280, 410, 339, 410);
}
function SYC() {
  fill(0, 238, 0);
  arc(297, 100, 25, 35, 0, HALF_PI);
  arc(297, 100, 25, 35, HALF_PI, PI);
  arc(290, 100, 12, 10, PI, TWO_PI);
  arc(303, 100, 12, 10, PI, TWO_PI);
}

function TF() {
  line(mouseX - 50, mouseY, mouseX + 55, mouseY);
  line(mouseX - 50, mouseY, mouseX - 43, mouseY + 20);
  line(mouseX - 43, mouseY + 20, mouseX - 25, mouseY + 20);
  line(mouseX - 25, mouseY + 20, mouseX - 25, mouseY + 60);
  line(mouseX - 7, mouseY + 75, mouseX - 7, mouseY + 20);
  line(mouseX - 7, mouseY + 20, mouseX + 30, mouseY + 20);
  line(mouseX + 30, mouseY + 20, mouseX + 25, mouseY + 35);
  line(mouseX + 25, mouseY + 35, mouseX + 11, mouseY + 35);
  line(mouseX + 11, mouseY + 35, mouseX + 11, mouseY + 50);
  line(mouseX + 11, mouseY + 50, mouseX + 19, mouseY + 50);
  line(mouseX + 19, mouseY + 50, mouseX + 11, mouseY + 73);
  line(mouseX + 11, mouseY + 73, mouseX + 11, mouseY + 105);
  line(mouseX + 11, mouseY + 105, mouseX + 57, mouseY);
}
