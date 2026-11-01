// write your codes here
let gameStarted = false;
let score = 0;

let playerX = 100;
let playerY;
let playerSize = 50;
let velocity = 0; //speed of player
let isGrounded = false;

function setup() {
    createCanvas(600, 400);
    background("black");
    playerY = height - playerSize;
}

function draw() {
    background("black");

    if (!gameStarted) {
        drawStartScreen();
        return;
    }

    velocity += 0.8;
    playerY += velocity;

    if (playerY >= height - playerSize) {

    }
    else {
        isGrounded
    }

    fill("white");
    textSize(14);
    textAlign(CENTER, CENTER);
    text("Press SPACE to jump", width/2, 50);
    text("Score: "+score, width/2, 80);

    fill("lime");
    rect(playerX, playerY, playerSize, playerSize);
}

function drawStartScreen() {
    fill("white");
    textSize(44);
    textAlign(CENTER, CENTER);
    text("Press SPACE to start", width/2, height/2);
}

function keyPressed() {
    if (keyCode === 32 && isGrounded) {
        velocity = -18;
    }
    else if (keyCode === 32) {
        gameStarted = true;
    }
}