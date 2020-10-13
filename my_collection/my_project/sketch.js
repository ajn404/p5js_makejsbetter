// a clock using lines
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  // put drawing code here
  // if(mouseIsPressed){
  // 	fill(0);
  //   }
  //   else{
  // 	fill(255);
  //   }
  //   ellipse(mouseX,mouseY,80,80);
  background(69, 103, 148); //an RGB color for the canvas' background
  //circle
  let HR = hour(); // I'm telling js that i want to use the time
  let MN = minute(); //same as above
  let SC = second(); // same as above

  strokeWeight(8); // I'm giving the drawing a stroke size
  stroke(255, 100, 150); // color
  noFill(); //It is an empty shape
  let end1 = map(HR, 0, 24, 0, 360); // I'm mapping the shape to the
  arc(250, 250, 300, 300, 0, end1); // I'm drawing the shape for the hour

  stroke(78, 22, 9); // color
  let end2 = map(MN, 0, 60, 0, 360); //mapping the minutes
  arc(250, 250, 280, 280, 0, end2); // drwing the shape for the minutes

  stroke(0, 191, 255); // color
  let end3 = map(SC, 0, 60, 0, 360); //mapping the seconds
  arc(250, 250, 260, 260, 0, end3); //drawing the shape for the seconds
}
