let timer0 = 0
let timer1 = 0
let timer2 = 0
let timer3 = 0

let optionOne0 = true
let optionTwo0 = false
let optionOne1 = true
let optionTwo1 = false
let optionOne2 = true
let optionTwo2 = false
let optionOne3 = true
let optionTwo3 = false

let tint1 = 0
let tint2 = 0
let tint3 = 255
let tint4 = 255
let tint5 = 255

let level = 0

function preload() {

  noah = loadImage('noah.png')
  noah_panda = loadImage('noah_panda.png')

  peanut = loadImage('peanut.png')
  panda = loadImage('panda.png')
  black = loadImage('black.jpg')

  font = loadFont('font.ttf')
}


function setup() {
  createCanvas(800, 600);
  textFont(font)
}

function draw() {

  background(0)

  if (level === 0) {

    if (frameCount % 30 == 0 ) {
      timer0 = timer0 + 1
    }

    if (timer0 > 4) {
      tint1 += 2
      tint(255, tint1)
      imageMode(CENTER)
      image(peanut, width/2, 200, peanut.width/4, peanut.height/4)
    }

    if (timer0 > 8) {
      tint2 += 2
      textbox()
      stroke(255, 255, 255, tint2)
      rect(40, 335, 720, 300)
    }

    if (timer0 > 12) {
      tint2 += 2
      textbox()
      stroke(255, 255, 255, tint2)
      rect(40, 335, 720, 300)
    }

    if (timer0 > 14) {
      bigtext()
      text("Do you eat the peanut butter?", 50, 370)
    }

    if (timer0 > 16) {
      nametext()
      text("Use arrow keys to \nselect and press \nenter", 50, 50)

      if (optionOne1 === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes", 50, 520)

        bigtext()
        text("- No", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne0 = false
          optionTwo0 = true
        }

        if (keyIsDown(ENTER)) {
          level += 1
        }

      }

      if (optionTwo0 === true) {

        bigtext()
        text("- Yes", 50, 520)

        fill(255, 255, 0)
        text("- No", 50, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne0 = true
          optionTwo0 = false
          }

          if (keyIsDown(ENTER)) {
            level += 1
          }
        }
      }
    }

    if (level === 1) {

      if (frameCount % 30 == 0) {
          timer1 = timer1 + 1
        }

        tint3 = tint3 - 2
        tint(255, tint3)
        imageMode(CENTER)
        image(peanut, width/2, 200, peanut.width/4, peanut.height/4)

        textbox()
        tint4 -= 2
        stroke(255, 255, 255, tint4)
        rect(40, 335, 720, 300)

        bigtext()
        tint5 -= 2

        fill(255, 255, 255, tint5)
        text("Yum.", 50, 370)

        if (keyIsDown(ENTER)) {
          level += 1
        }

    }


  if (level === 2) {


    if (frameCount % 30 == 0) {
        timer2 = timer2 + 1
      }

    imageMode(CORNER)
    image(panda, 0, 0, panda.width, panda.height)

    if (timer2 > 1 && timer2 < 5) {
      textAlign(CENTER)
      fill(255, 255, 255)
      textSize(20)
      text("Location: Panda Restaurant ", width/2, height/2)
    }

    if (timer2 > 5) {

      //text box
      textbox()
      rect(40, 335, 720, 300)

    }

    if (timer2 > 6 && timer2 < 14) {
      bigtext()
      text("It's your first day working at Panda.", 50, 370)
    }

    if (timer2 > 10 && timer2 < 14) {
      text("You are approached by an unknown \nemployee.", 50, 410)
    }

    if (timer2 > 14 && timer2 < 16) {

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

    if (timer2 === 16) {

      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      //name box
      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("???", 50, 325)

      bigtext()
      text("Hi. You must be the new cashier.", 50, 370)

    }

    if (timer2 > 16){

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

    if (timer2 > 18){
      text("- Yes, I'm the new employee.", 50, 520)
      text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 50, 560)

      if (optionOne1 === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes, I'm the new employee.", 50, 520)

        bigtext()
        text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne1 = false
          optionTwo1 = true
        }

        if (keyIsDown(ENTER)) {
          level += 1
        }

      }

      if (optionTwo1 === true) {

        bigtext()
        text("- Yes, I'm the new employee.", 50, 520)

        fill(255, 255, 0)
        text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 50, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne1 = true
          optionTwo1 = false
          }

          if (keyIsDown(ENTER)) {
            level += 2
          }

        }
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
        text("Nice.", 50, 370)
      }

      if (timer3 > 3){
        text("Do you want to come see where you'll be \nworking?", 50, 410)
      }

      if (timer3 > 6) {

        if (optionOne2 === true) {

          bigtext()
          fill(255, 255, 0)
          text("- Sure", 50, 520)

          bigtext()
          text("- Nah", 50, 560)

          if (keyIsDown(DOWN_ARROW)) {
            optionOne2 = false
            optionTwo2 = true
          }

          if (keyIsDown(ENTER)) {
            level += 1
          }

        }

        if (optionTwo2 === true) {

          bigtext()
          text("- Sure", 50, 520)

          fill(255, 255, 0)
          text("- Nah", 50, 560)

            if (keyIsDown(UP_ARROW)) {
            optionOne2 = true
            optionTwo2 = false
            }

            if (keyIsDown(ENTER)) {
              level += 2
            }

          }

      }


    }

    if (level === 4) {

      image(panda, 0, 0, panda.width, panda.height)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      if (frameCount % 30 == 0) {
        timer4 = timer4 + 1
      }

      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("Noah", 48, 325)

      //text box
      textbox()
      rect(40, 335, 720, 300)

      if (timer4 > 1) {
        bigtext()
        text("Wow.", 50, 370)
      }

      if (timer4 > 3){
        text("Sarcastic.", 50, 410)
      }

      if (timer4 > 5){
        text("Anyways, I was told to show you around.", 50, 450)
      }

      if (timer4 > 8) {
        if (optionOne3 === true) {

          bigtext()
          fill(255, 255, 0)
          text("- Okay", 50, 520)

          bigtext()
          text("- Nah", 50, 560)

          if (keyIsDown(DOWN_ARROW)) {
            optionOne3 = false
            optionTwo3 = true
          }
/*
          if (keyIsDown(ENTER)) {
            level += 1
          }
*/
        }

        if (optionTwo3 === true) {

          bigtext()
          text("- Okay", 50, 520)

          fill(255, 255, 0)
          text("- Nah", 50, 560)

            if (keyIsDown(UP_ARROW)) {
            optionOne3 = true
            optionTwo3 = false
            }
/*
            if (keyIsDown(ENTER)) {
              level += 2
            }
*/
          }

      }
    }
    
}

function textbox() {
  stroke(255)
  strokeWeight(8)
  fill(0)
}

function nametext() {
  textAlign(LEFT)
  textSize(15)
  fill(255)
  strokeWeight(0)
}

function bigtext() {
  textAlign(LEFT)
  textSize(20)
  fill(255)
  strokeWeight(0)
}
