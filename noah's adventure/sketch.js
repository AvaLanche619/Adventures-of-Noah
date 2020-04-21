
function preload() {
  noah = loadImage('noah.png')
  font = loadFont('font.ttf')
}


function setup() {
  createCanvas(800, 600);
  textFont(font)
}

function draw() {
  background(0, 0, 0);

  image(noah, 50, 40, noah.width/2.5, noah.height/2.5);

  fill(255)
  textAlign(LEFT)
  textSize(20)
  text("Noah offers you a spoonfull of peanut \nbutter, accept?", 50, 350)

}
