// write your codes here
let ballSize = 40;
let ballX = 0;
let ballY = 0;
let ballSpeedX = 1.5;
let ballSpeedY = 1.5;

function setup() {
    createCanvas(500, 600);
    background(200);
    noStroke()
    ballX = 50;
    ballY = 50;
    fill("white");
}

function draw() {
    
    
    circle(ballX, ballY, ballSize);
    
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (ballX > width) {
        ballSpeedX = -1.2 * ballSpeedX; // 2 -1 = -2
        fill(random(0, 255), 0, random(0, 255), random(10, 55));
    }
    if (ballX < 0) {
        ballSpeedX = -0.88 * ballSpeedX; // -2 * -1 = 2
        fill(  random(0, 255), 0, random(0, 255), random(10, 55));
    }

    if (ballY > height) {
        ballSpeedY = -1 * ballSpeedY;
        fill(random(0, 255), 0, random(0, 255), random(10, 55));
    }
    if (ballY < 0) {
        ballSpeedY = -1 * ballSpeedY;
        fill(random(0, 255), 0, random(0, 255), random(10, 55));
    }
}


function keyPressed() {
    if (keyCode === UP_ARROW) {
        ballSpeedX = ballSpeedX * 1.2;
        ballSpeedY = ballSpeedY * 1.2;
    }
    else if (keyCode === DOWN_ARROW) {
        ballSpeedX = ballSpeedX * 0.67;
        ballSpeedY = ballSpeedY * 0.67;
    }
}



























// let pico;
// let xpos, ypos;
// let sfx;
// let picoWidth;

// function preload() {
//     // any media, image or sound must load here
//     pico = loadImage("assets/pico-a.png");
//     sfx = loadSound("assets/pop.mp3");
// }

// function setup() {
//     createCanvas(600, 600);
//     background("lightblue");
//     xpos = width/2;
//     ypos = height/2;
// }

// function draw() {
//     background("lightblue");
//     imageMode(CENTER);
//     //          x      y       w    h
//     image(pico, xpos, ypos, picoWidth, 133);
//     if (keyIsDown(LEFT_ARROW)) {
//         xpos = xpos - 2;
//     }
//     if (keyIsDown(RIGHT_ARROW)) {
//         picoWidth = 110; //revert
//         xpos = xpos + 2;
//     }
//     if (keyIsDown(UP_ARROW)) {
//         ypos = ypos - 2;
//     }
//     if (keyIsDown(DOWN_ARROW)) {
//         ypos = ypos + 2;
//     }
//     xpos = constrain(xpos, 0+55, width-55);
//     ypos = constrain(ypos, 0+65, height-65)
// }

// function keyPressed() {
//     if (keyCode === 32) {
//         picoWidth = 55;
//         sfx.play();
//     }
// }