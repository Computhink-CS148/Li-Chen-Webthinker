// write your codes here
function setup() {
    createCanvas(600, 400);
    background("black");
}

function draw() {
    if (!gameStart) {
        drawStartScreen();
    }
    
}

function drawStartScreen() {
    fill("white");
    textSize(44);
    textAlign(CENTER, CENTER);
    text("Press SPACE to start", width/2, height/2);
}