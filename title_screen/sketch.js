let tint01 = 0

let timer = 0

function preload() {
  logo = loadImage('logo.png')
  font = loadFont('font.ttf')
}

function setup() {
  createCanvas(800, 600)
  textFont(font)
}



function draw() {

  background(0)
  
  if (frameCount % 30 == 0 ) {
    timer = timer + 1
  }

  if (timer > 3 && timer < 12) {
    tint01 +=3
    imageMode(CENTER)
    tint(255, tint01)
    image(logo, width/2, height/2, logo.width/3, logo.height/3)
  }

  if (timer > 12 && timer < 25) {
    bigtext()
    textAlign(CENTER)
    text("LEAD ART DIRECTOR", width/2, 200)
  }

  if (timer > 14 && timer < 25) {
    fill(151, 255, 255)
    text("Adia Sheeler", width/2, 250)
  }

  if (timer > 17 && timer < 25) {
    bigtext()
    textAlign(CENTER)
    text("LEAD PROGRAMMER", width/2, 350)
  }

  if (timer > 19 && timer < 25) {
    fill(151, 255, 255)
    text("Ava Saunders", width/2, 400)
  }

  if (timer > 25) {
    bigtext()
    textAlign(CENTER)
    text("This is basically a giant meme that \ngot way out of hand.", width/2, 200)
  }

  if (timer > 28) {
    text("Enjoy.", width/2, 300)
  }

}

function bigtext() {
  textAlign(LEFT)
  textSize(20)
  fill(255)
  strokeWeight(0)
}
