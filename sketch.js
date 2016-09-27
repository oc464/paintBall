var x = 50;
var y = 50;

var c;

function setup() {
  createCanvas(600,800);
  c = color(255,255,255);
}

function draw() {
  fill(c);
  ellipse(mouseX,mouseY,50,50);

}

function mousePressed(){
		c = color(random(255),random(255),random(255));		
}



