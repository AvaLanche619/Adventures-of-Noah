
let overYes = true
let overNo = false
let level = 1

function preload() {
  noah = loadImage('noah.png')
  peanut = loadImage('peanut.jpg')
  font = loadFont('font.ttf')
}


function setup() {
  createCanvas(800, 600);
  textFont(font)
}

function draw() {
  background(0, 0, 0)

  if (level === 1) {
    image(noah, 50, 40, noah.width/2.5, noah.height/2.5)
    fill(255)
    textAlign(LEFT)
    textSize(20)
    text("Noah offers you a spoonfull of peanut \nbutter, accept?", 50, 350)

    if (overYes === true) {
      textSize(20)
      fill(255, 255, 0)
      text("- Yes", 50, 470)
      fill(255, 255, 255)
      textSize(20)
      text("- No", 50, 500)

        if (keyIsDown(DOWN_ARROW)) {
          overYes = false
          overNo = true
        }

      }

    if (overNo === true) {
      textSize(20)
      fill(255, 255, 255)
      text("- Yes", 50, 470)
      fill(255, 255, 0)
      textSize(20)
      text("- No", 50, 500)

        if (keyIsDown(UP_ARROW)) {
        overYes = true
        overNo = false
        }

    }

    if (keyIsDown(ENTER)) {
      level += 1
    }
  }

  if (level === 2) {
    imageMode(CENTER)
    image(peanut, width/2, height/2, peanut.width/4, peanut.height/4)
  }


}
