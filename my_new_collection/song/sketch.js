let notes=[60,62,64,65,67,69,71];

let index=0;
let song=[
  {note:4,duration:400,display:"D"},
  {note:0,duration:200,display:"G"},
  {note:1,duration:200,display:"A"},
  {note:2,duration:200,display:"B"},
  {note:3,duration:200,display:"C"},
  {note:4,duration:400,display:"D"},
  {note:0,duration:400,display:"G"},
  {note:0,duration:400,display:"G"},
];
let trigger=0;
let autoplay=false;
let osc;
function setup() {
  createCanvas(800 , 400);
  let div=createDiv("CLick to play notes or")
  div.id("instruction")
  let button =createButton("play song automatically")
  button.parent("instruction")
  button.mousePressed(function(){
    if(!autoplay){
      index=0;
      autoplay=true;
    }
  })
  osc=new p5.TriOsc();
  osc.start();
  osc.amp(9);
}

function playNote(note,duration){
  osc.freq(midiToFreq(note));
  osc.fade(0.5,0.2);

  if(duration){
    setTimeout(() => {
      osc.fade(0,0.2)
    }, duration-50);
  }
}
function draw() {
  if(autoplay&&millis()>trigger){
    playNote(notes[song[index].note],song[index].duration);
    trigger=millis()+song[index].duration;

    index++;
  }
  else if(index>=song.length){
    autoplay=false;
  }

  let w=width/notes.length;
  for(let i=0;i<notes.length;i++){
    let x=i*w;
    if(mouseX>x&&mouseX<x+w&&mouseY<height){
      if(mouseIsPressed){
        fill(100,255,200)
      }
      else{
        fill(127);
      }
    }
    else{
      fill(200);
    }
    if(autoplay&& i==song[index-1].note){
      fill(100,255,200)
    }
    rect(x,0,w-1,height-1);
  }

}

function mousePressed(event){
  if(event.button==0&& event.clientX<width&&event.clientY<height){
    let key=floor(map(mouseX,0,width,0,notes.length));
    playNote(notes[key]);
  }
}

function mouseReleased(){
  osc.fade(0,0.5)
}