let racerXs = [30, 40, 30, 20];
let startY = 50;
let yStep = 60;
let finishX = 560;
let fuckY = 500

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
        racerXs[i] -= random(1, 4)
    }
    circle(racerXs[i], y, 24);
}

}