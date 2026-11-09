let racerXs = [30, 40, 30, 20];
let startY = 50;
let yStep = 60;
let finishX = 560;
let fuckY = 500
let img;

async function setup() {
   img = await loadImage('/workspaces/austinzazzara28-source.github.io/tiny-race/sisyphus.png');

  // Draw the image.
  image(img, 0, 0);
}

function setup(){
    createCanvas(600, startY + yStep * racerXs.length);
}

function draw(){
    background (240);
     line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 4);
     
    }
    if (racerXs[i] >= fuckY) {
        racerXs[i] -= random(1, 4);
         fill("blue");
    }
    
    
    circle(racerXs[i], y, 24);
}
// Begin the drawing group.
  push();

  // Translate the origin to the mouse's position.
  translate(mouseX, mouseY);

  // Style the face.
  
  fill("yellow");

  // Draw a face.
  circle(0, 0, 60);

  // Style the eyes.
  fill('white');

  // Draw the left eye.
  push();
  translate(-20, -20);
  if (mouseIsPressed) (translate(20, 10 ));
  ellipse(5, 15, 20, 20);
  pop();
//other eye
  push();
  translate(10, -10);
  if (mouseIsPressed) (translate(15, 10 ));
  ellipse(10, 0, 20, 20);
  
  pop();
 
}