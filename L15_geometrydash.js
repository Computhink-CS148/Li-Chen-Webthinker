// write your codes here
let gameStarted = false;
let score = 0;

let playerX = 100;
let playerY;


function setup() {
    createCanvas(600, 400);
    background("black");
}

function draw() {
    background("black");
    if (!gameStarted) {
        drawStartScreen();
        return;
    }
    fill("white");
    textSize(14);
    textAlign(CENTER, CENTER);
    text("Press SPACE to jump", width/2, 50);
    text("Score: "+score, width/2, 80);

    fill("lime");
    rect(50, height-50, 50, 50);
}

function drawStartScreen() {
    fill("white");
    textSize(44);
    textAlign(CENTER, CENTER);
    text("Press SPACE to start", width/2, height/2);
}

function keyPressed() {
    if (keyCode === 32) {
        gameStarted = true;
    }
}