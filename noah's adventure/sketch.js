let overYes = true
let overNo = false

let timer1 = 0
let timer2 = 0
let timer3 = 0

let level = 1

function preload() {

  noah = loadImage('noah.png')
  noah_panda = loadImage('noah_panda.png')

  peanut = loadImage('peanut.png')
  panda = loadImage('panda.png')

  font = loadFont('font.ttf')
}


function setup() {
  createCanvas(800, 600);
  textFont(font)
}

function draw() {

  background(0)

    image(panda, 0, 0, panda.width, panda.height)

  if (frameCount % 30 == 0) {
    // if the frameCount is divisible by 60, then a second has passed
    timer1 = timer1 + 1
  }

  if (level === 1) {

    image(panda, 0, 0, panda.width, panda.height)

    if (timer1 > 1 && timer1 < 5) {
      textAlign(CENTER)
      fill(255, 255, 255)
      textSize(20)
      text("Location: Panda Restaurant ", width/2, height/2)
    }

    if (timer1 > 5) {

      //text box
      textbox()
      rect(40, 335, 720, 300)

    }

    if (timer1 > 6 && timer1 < 14) {
      textAlign(LEFT)
      strokeWeight(0)
      bigtext()
      text("It's your first day working at Panda.", 50, 370)
    }

    if (timer1 > 10 && timer1 < 14) {
      text("You are approached by an unknown \nemployee.", 50, 410)
    }

    if (timer1 > 14 && timer1 < 16) {

      //name box
      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("???", 50, 325)

      //dialouge
      textSize(20)
      text("Hi. You must be the new cashier.", 50, 370)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

    }

    if (timer1 === 16) {

      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      //name box
      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("???", 50, 325)

      bigtext()
      text("Hi. You must be the new cashier.", 50, 370)

    }

    if (timer1 > 16){

      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      //name box
      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("Noah", 48, 325)

      bigtext()
      text("Hi. You must be the new cashier.", 50, 370)
      text("I'm Noah.", 50, 410)

    }

    if (timer1 > 18){
      text("- Yes, I'm the new employee.", 50, 520)
      text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 50, 560)

      if (overYes === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes, I'm the new employee.", 50, 520)

        bigtext()
        text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          overYes = false
          overNo = true
        }

        if (keyIsDown(ENTER)) {
          level += 1
        }

      }

      if (overNo === true) {

        bigtext()
        text("- Yes, I'm the new employee.", 50, 520)

        fill(255, 255, 0)
        text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 50, 560)

          if (keyIsDown(UP_ARROW)) {
          overYes = true
          overNo = false
          }

          if (keyIsDown(ENTER)) {
            level += 2
          }

        }
      }
    }

    if (level === 2) {

      image(panda, 0, 0, panda.width, panda.height)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      if (frameCount % 30 == 0) {
        timer2 = timer2 + 1
      }

      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("Noah", 48, 325)

      //text box
      textbox()
      rect(40, 335, 720, 300)

      if (timer2 > 1) {
        bigtext()
        text("Nice.", 50, 370)
      }

      if (timer2 > 3){
        text("Do you want to come see where you'll be \nworking?", 50, 410)
      }

      if (timer2 > 6) {
        text("- Sure", 50, 520)
        text("- Nah", 50, 560)
      }


    }

    if (level === 3) {

      image(panda, 0, 0, panda.width, panda.height)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      if (frameCount % 30 == 0) {
        timer3 = timer3 + 1
      }

      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("Noah", 48, 325)

      //text box
      textbox()
      rect(40, 335, 720, 300)

      if (timer3 > 1) {
        bigtext()
        text("Wow.", 50, 370)
      }

      if (timer3 > 3){
        text("Sarcastic.", 50, 410)
      }

      if (timer3 > 5){
        text("Anyways, I was told to show you around.", 50, 450)
      }

      if (timer3 > 8) {
        text("- Okay", 50, 520)
        text("- Nah", 50, 560)
      }
    }

}

function textbox() {
  stroke(255)
  strokeWeight(8)
  fill(0)
}

function nametext() {
  textSize(15)
  fill(255)
  strokeWeight(0)
}

function bigtext() {
  textSize(20)
  fill(255)
  strokeWeight(0)
}
