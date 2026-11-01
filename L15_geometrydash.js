// write your codes here
let gameStarted = false;
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
    fill("green";
        
    )
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