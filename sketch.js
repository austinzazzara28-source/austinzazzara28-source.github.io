let pX = 50;
let pY = 300;

let PX = 100;
let PY = 300;

let tearX = 200;
let tearY = 200;


function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);
//spriting 
// ears
  fill("white");
  triangle(25, 300, 60, 252, 10, 250);
  triangle(125, 300, 144, 252, 90, 252);
  fill("pink")
  triangle(26, 295, 55, 255, 15, 255);
  triangle(124, 295, 139, 255, 85, 255);
// head
  fill("white")
   triangle (57, 345, 15, 330, 30, 300)
  triangle (95, 345, 140, 330, 120, 300);
  circle(75, 300, 100);

// sad ass car
  

  
// eyes that follow mouse
  
  fill(71, 71, 71);
  let offsetVector = createVector(pX - mouseX, pY - mouseY);
  offsetVector.normalize();
  offsetVector.mult(5);
  circle(pX - offsetVector.x, pY - offsetVector.y, 30);

  let offsettVector = createVector(PX - mouseX, PY - mouseY);
  offsettVector.normalize();
  offsettVector.mult(5);
  circle(PX - offsettVector.x, PY - offsettVector.y, 30);
  
  // mouth 

   line(63, 330, 75, 320);
  line(75, 320, 86, 330);


// enemy

  fill ("pink")
  circle (300, 100, 100)
 
  fill ("black")
  
  circle (325, 100, 40)
  rect (290, 125, 20, 20, 0, 0, 100, 100)
  fill ("white")
  circle (330, 95, 20)
  rect (290, 125, 20, 5)
  
 // actual code
  
  fill ("skyblue")
  circle (tearX, tearY, 25)
  if (keyIsDown("w")) {
    tearX = tearX;
    tearY = tearY - 5;
 }
  
  if (keyIsDown("d")) {
    tearX = tearX + 5;
    tearY = tearY;
  }

  if (keyIsDown("a")) {
    tearX = tearX - 5;
    tearY = tearY;
  }

  if (keyIsDown("s")) {
    tearX = tearX ;
    tearY = tearY + 5;
  }
  //barriers
  
  if (tearX >= 389) {
    tearX = 389
  }
  if (tearX <= 12){
    tearX = 12
  }
  if (tearY <= 12){tearY = 12}
  if (tearY >= 388){tearY = 388}
    textSize(25)
text ("I'm a target!", 250, 170)
  text ("👍🏻", 350, 110)

  if (tearX >= 240 && tearX <= 350 && tearY <= 150 && tearY >= 50){
    line (285, 100, 260, 90,)
    line (260, 100, 285, 100,)
    line (260, 110, 285, 100,)
  }else {
    fill ("black")
  circle (275, 100, 40)
    fill ("white")
  circle (280, 95, 20)}



  }
 
