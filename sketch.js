

function preload(){
  bg = loadImage("assets/TheKing.jpg");
  pic = loadImage("assets/Ovi.png");
}

function setup() {
  createCanvas(594,402);
}

function draw() {
  image(bg,0,0);
  image(pic,mouseX,mouseY);
  pic.resize(80,80);
}