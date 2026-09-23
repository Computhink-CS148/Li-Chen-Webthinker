// write your codes here

let countdown = 5;
let objectId;
let bgColor = "lightgray";
let sfx;

function preload() {
    sfx = loadSound("assets/bossaNova.mp3");
}

function setup() {
    createCanvas(400, 400);
    background(bgColor);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(bgColor);

    let hh = hour();
    let min = minute();
    let sec = second();
    fill(0);
    textSize(72);
    text(nf(hh,2)+ ":"+(nf(min, 2)) + ":"+(nf(sec,2)), width/2, height/2);

    fill("red");
    textSize(32);
    text(countdown, width/2, height/2+75);
    textSize(16);
    text("click here to start countdown", width/2, height/2+105);
}

function mousePressed() {
    console.log("i got mouse clicked!")
    objectId = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (countdown === 0) {
        clearInterval(objectId);
        bgColor = "red";
        sfx.play();
    }
    else {
        countdown = countdown - 1;
    }
}

