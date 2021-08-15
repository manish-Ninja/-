function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(250, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(30,15, 100,);
    circle(100,15, 100,);
    circle(175,15, 100,);
    circle(250,15, 100,);
    circle(325,15, 100,);
    circle(400,15, 100,);
    circle(475,15, 100,);
    circle(550,15, 100,);
    circle(625,15, 100,);
  }

function take_snapshot() {
    save('myFilterWebsite.png');
}
/*
function setup() {
           createCanvas(720, 400);
           background(51);
           noStroke();
           noLoop();
         }

         function draw() {
           drawTarget(width * 0.25, height * 0.4, 200, 4);
           drawTarget(width * 0.5, height * 0.5, 300, 10);
           drawTarget(width * 0.75, height * 0.3, 120, 6);
         }

         function drawTarget(xloc, yloc, size, num) {
           const grayvalues = 255 / num;
           const steps = size / num;
           for (let i = 0; i < num; i++) {
             fill(i * grayvalues);
             ellipse(xloc, yloc, size - i * steps, size - i * steps);
           }
         }
         */