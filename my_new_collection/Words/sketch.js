let font,
  fontsize = 40;
function preload() {
  font = loadFont("SourceCodePro-Bold.otf");
}
function setup() {
  createCanvas(innerWidth, innerHeight);
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(160);
  textAlign(RIGHT);
  drawWords(width*0.25);
  
  textAlign(CENTER);
  drawWords(width*0.5);

textAlign(LEFT);
drawWords(width*0.75);


}
function drawWords(x){
  fill(0);
  text('ajn404', x, 80)

  fill(65)
  text('means',x,150)
  fill(190)
  text('a jianai',x,220)
  
  fill(255)
  text('notfound',x,290)
}
