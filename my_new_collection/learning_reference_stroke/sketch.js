// this is an example for me to learn the references in p5
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(220);
  // ellipse(200,200,50,70)//椭圆ellipse

  // line(-50,-100,500,500)//线line

  // rect(30,20,50,60)//方形

  // noStroke();
  // let c=color(0,126,255,102);
  // fill(c);
  // rect(15,15,35,70);
  // let value=alpha(c);
  // fill(value);
  // rect(50,15,35,70);
  noStroke();
  colorMode(RGB, 100);
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      stroke(i, j, 0);
      point(i, j);
    }
  }
}
