// write your codes here
let gameStarted = false;
function setup() {
    createCanvas(600, 400);
    background("black");
}

function draw() {
    if (!gameStart) {
        drawStartScreen();
    }
    fill("white");
    textSize(14);
    textAlign(CENTER, CENTER);
    text("Press SPACE to jump", width/2, height/2);
}

function drawStartScreen() {
    fill("white");
    textSize(44);
    textAlign(CENTER, CENTER);
    text("Press SPACE to start", width/2, height/2);
}