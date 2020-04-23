let timer = 0
//let timer1 = 0
//let timer2 = 0
//let timer3 = 0

let optionOne0 = true
let optionTwo0 = false
let optionOne1 = true
let optionTwo1 = false
let optionOne2 = true
let optionTwo2 = false
let optionOne3 = true
let optionTwo3 = false
let optionOne4 = true
let optionTwo4 = false
let optionOne5 = true
let optionTwo5 = false
let optionOne6 = true
let optionTwo6 = false

let tint1 = 0
let tint2 = 0
let tint3 = 255
let tint4 = 255
let tint5 = 255
let tint6 = 0

let page = 0

function preload() {

  //load backgrounds
  panda = loadImage('panda.png')
  bedroom = loadImage('bedroom.jpg')

  //load sprites
  peanut = loadImage('peanut.png')
  noah = loadImage('noah.png')
  noah_panda = loadImage('noah_panda.png')

  font = loadFont('font.ttf')

}


function setup() {
  createCanvas(800, 600)
  textFont(font)
}

function draw() {

  background(0)

///*
  if (page === 0) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
    }

    if (timer > 4) {
      tint1 += 2
      tint(255, tint1)
      imageMode(CENTER)
      image(peanut, width/2, 200, peanut.width/4, peanut.height/4)
    }

    if (timer > 8) {
      tint2 += 2
      textbox()
      stroke(255, 255, 255, tint2)
      rect(40, 335, 720, 300)
    }

    if (timer > 12) {
      tint2 += 2
      textbox()
      stroke(255, 255, 255, tint2)
      rect(40, 335, 720, 300)
    }

    if (timer > 14) {
      bigtext()
      text("Do you eat the peanut butter?", 50, 370)
    }

    if (timer > 16) {
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
          page += 1
          timer = 0
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
            page += 1
            timer = 0
          }
        }
      }
    }

    if (page === 1) {

      if (frameCount % 30 == 0) {
          timer = timer + 1
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

        if (timer > 5) {
          tint6 += 1.5
          tint(255, tint6)
          imageMode(CORNER)
          image(bedroom, 0, 0, bedroom.width*1.05, bedroom.height*1.05)

        }

        if (timer > 13) {
         textbox()
         stroke(255, 255, 255)
         rect(35, 335, 720, 300)
        }

        if (timer > 15 && timer < 26) {
          bigtext()
          text("You wake up in your bedroom to the \nsound of an alarm clock.", 50, 370)
        }

        if (timer > 18 && timer < 26) {
          text("You’re tired from last night’s \npasta-eating frenzy.", 50, 450)
        }

        if (timer > 22 && timer < 26) {
          text("You remember it’s your first day working \nat Panda.", 50, 530)
        }

        if (timer > 26) {
          bigtext()
          text("Hit snooze?", 50, 370)
        }

        if (timer > 28) {

          if (optionOne1 === true) {

            fill(255, 255, 0)
            text("- Yes", 50, 520)

            bigtext()
            text("- No", 50, 560)

            if (keyIsDown(DOWN_ARROW)) {
              optionOne1 = false
              optionTwo1 = true
            }

            if (keyIsDown(ENTER)) {
              page += 1
              timer = 0
            }

          }

          if (optionTwo1 === true){

            text("- Yes", 50, 520)

            fill(255, 255, 0)
            text("- No", 50, 560)

            if (keyIsDown(UP_ARROW)) {
              optionOne1 = true
              optionTwo1 = false
            }

            if (keyIsDown(ENTER)) {
              level += 2
              timer = 0
            }

          }
        }
    }

  if (page === 2) {

    if (frameCount % 30 == 0 ) {
      timer = timer + 1
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
    text("Have fun suffering from protein \ndeficiency, loser.", 50, 370)

    if (timer > 5) {
      imageMode(CORNER)
      tint(255, 255)
      image(bedroom, 0, 0, bedroom.width*1.05, bedroom.height*1.05)
    }

    if (timer > 6) {
     textbox()
     stroke(255, 255, 255)
     rect(35, 335, 720, 300)
    }

    if (timer > 8 && timer < 17) {
      bigtext()
      text("You wake up in a cold sweat.", 50, 370)
    }

    if (timer > 11 && timer < 17) {
      text("You’re tired from last night’s \npasta-eating frenzy.", 50, 410)
    }

    if (timer > 14 && timer < 17) {
      text("You remember it’s your first day working \nat Panda.", 50, 500)
    }

    if (timer > 17) {
      bigtext()
      text("Hit snooze?", 50, 370)
    }

    if (timer > 28) {

      if (optionOne2 === true) {

        fill(255, 255, 0)
        text("- Yes", 50, 520)

        bigtext()
        text("- No", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne2 = false
          optionTwo2 = true
        }

        if (keyIsDown(ENTER)) {
          page += 1
          timer = 0
        }

      }

      if (optionTwo2 === true){

        text("- Yes", 50, 520)

        fill(255, 255, 0)
        text("- No", 50, 560)

        if (keyIsDown(UP_ARROW)) {
          optionOne2 = true
          optionTwo2 = false
        }

        if (keyIsDown(ENTER)) {
          level += 1
          timer = 0
        }

      }

  }

  if (page === 3) {


    if (frameCount % 30 == 0) {
        timer = timer + 1
      }

    imageMode(CORNER)
    image(panda, 0, 0, panda.width, panda.height)

    if (timer > 1 && timer < 5) {
      textAlign(CENTER)
      fill(255, 255, 255)
      textSize(20)
      text("Location: Panda Restaurant ", width/2, height/2)
    }

    if (timer > 5) {

      //text box
      textbox()
      rect(40, 335, 720, 300)

    }

    if (timer > 6 && timer < 14) {
      bigtext()
      text("It's your first day working at Panda.", 50, 370)
    }

    if (timer > 10 && timer < 14) {
      text("You are approached by an unknown \nemployee.", 50, 410)
    }

    if (timer > 14 && timer < 16) {

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

    if (timer === 16) {

      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      //name box
      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("???", 50, 325)

      bigtext()
      text("Hi. You must be the new cashier.", 50, 370)

    }

    if (timer > 16){

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

    if (timer > 18){
      text("- Yes, I'm the new employee.", 50, 520)
      text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 50, 560)

      if (optionOne3 === true) {

        bigtext()
        fill(255, 255, 0)
        text("- Yes, I'm the new employee.", 50, 520)

        bigtext()
        text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 50, 560)

        if (keyIsDown(DOWN_ARROW)) {
          optionOne3 = false
          optionTwo3 = true
        }

        if (keyIsDown(ENTER)) {
          page += 1
          timer = 0
        }

      }

      if (optionTwo3 === true) {

        bigtext()
        text("- Yes, I'm the new employee.", 50, 520)

        fill(255, 255, 0)
        text("- Nope, I just wanted to wear a uniform \nand pretend to work.", 50, 560)

          if (keyIsDown(UP_ARROW)) {
          optionOne3 = true
          optionTwo3 = false
          }

          if (keyIsDown(ENTER)) {
            page += 2
            timer = 0
          }

        }
      }
    }

    if (level === 4) {

      image(panda, 0, 0, panda.width, panda.height)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      if (frameCount % 30 == 0) {
        timer = timer + 1
      }

      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("Noah", 48, 325)

      //text box
      textbox()
      rect(40, 335, 720, 300)

      if (timer > 1) {
        bigtext()
        text("Nice.", 50, 370)
      }

      if (timer > 3){
        text("Do you want to come see where you'll be \nworking?", 50, 410)
      }

      if (timer > 6) {

        if (optionOne4 === true) {

          bigtext()
          fill(255, 255, 0)
          text("- Sure", 50, 520)

          bigtext()
          text("- Nah", 50, 560)

          if (keyIsDown(DOWN_ARROW)) {
            optionOne4 = false
            optionTwo4 = true
          }

          if (keyIsDown(ENTER)) {
            page += 1
          }

        }

        if (optionTwo4 === true) {

          bigtext()
          text("- Sure", 50, 520)

          fill(255, 255, 0)
          text("- Nah", 50, 560)

            if (keyIsDown(UP_ARROW)) {
            optionOne4 = true
            optionTwo4 = false
            }

            if (keyIsDown(ENTER)) {
              page += 2
            }

          }

      }


    }

    if (page === 5) {

      image(panda, 0, 0, panda.width, panda.height)
      image(noah_panda, 50, 30, noah_panda.width/2.5, noah_panda.height/2.5)

      if (frameCount % 30 == 0) {
        timer = timer + 1
      }

      textbox()
      rect(40, 300, 75, 35)

      nametext()
      text("Noah", 48, 325)

      //text box
      textbox()
      rect(40, 335, 720, 300)

      if (timer > 1) {
        bigtext()
        text("Wow.", 50, 370)
      }

      if (timer > 3){
        text("Sarcastic.", 50, 410)
      }

      if (timer > 5){
        text("Anyways, I was told to show you around.", 50, 450)
      }

      if (timer > 8) {
        if (optionOne5 === true) {

          bigtext()
          fill(255, 255, 0)
          text("- Okay", 50, 520)

          bigtext()
          text("- Nah", 50, 560)

          if (keyIsDown(DOWN_ARROW)) {
            optionOne5 = false
            optionTwo5 = true
          }

          if (keyIsDown(ENTER)) {
            page += 1
          }

        }

        if (optionTwo5 === true) {

          bigtext()
          text("- Okay", 50, 520)

          fill(255, 255, 0)
          text("- Nah", 50, 560)

            if (keyIsDown(UP_ARROW)) {
            optionOne5 = true
            optionTwo5 = false
            }

            if (keyIsDown(ENTER)) {
              page += 2
            }

          }

      }
    }
//*/
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
