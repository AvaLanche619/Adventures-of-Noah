function preload() {
  peanut = loadImage('peanut.png')
  font = loadFont('font.ttf')
}


function setup() {
  createCanvas(windowWidth, windowHeight)
  textFont(font)
}

function draw() {

  background(0)

  imageMode(CENTER)
  image(peanut, width/2, height/3.77, peanut.width/3, peanut.height/3)
  textbox()
  bigtext()
  text("Do you eat the peanut butter?", width/3.95, height/1.66)
  text("- Yes", width/3.95, height/1.15)
  text("- No", width/3.95, height/1.07)
  nametext()
  text("Use arrow keys to \nselect and press \nenter", 50, 50)


}




function textbox() {
  stroke(255)
  strokeWeight(8)
  fill(0)
  rectMode(CORNERS)
  rect(width/4.17, height/1.86, width/1.31, height + 50)
}

function nametext() {
  textAlign(LEFT)
  textSize(20)
  fill(255)
  strokeWeight(0)
}

function bigtext() {
  textAlign(LEFT)
  textSize(28)
  fill(255)
  strokeWeight(0)
}
