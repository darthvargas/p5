var xVal = 200;
var yVal = 300;
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background('#DE177A');
}

function draw() {
  var xVal = 100;
  var yVal = 200;
  // put drawing code here
  fill('#0BB049');
  triangle(30, 75, 58, 20, 86, 75);
  fill('#0CAF45');
  stroke(202, 245, 68);
  square(400,100,100);
  ellipse(mouseX, mouseY, 100, 100)
  square(700,100,100);
  fill('#0DEF77');
  circle(800,400,300);
  fill('#0AA092');
  circle(xVal, yVal,200);
  ellipse(mouseX, mouseY, 100, 100);

  if(mouseIsPressed) {
    square(400, 300, 100);
  }
  else {
    ellipse (mouseX, mouseY, 100, 100);

}
}
