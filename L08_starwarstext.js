// write your codes here
let sfx;
let yPos = 400;
let lineGap = 60;
let started = false;

let storyText = [
    "A long time ago in a galaxy far",
    "far away",
    "It is a period of learning",
    "Our adventure begins here",
    "Anything is possible"
]

function preload() {
    sfx = loadSound("assets/star_wars_theme_8_bit.mp3");
}

function setup() {
    sfx.loop()
    createCanvas(400, 600);
}

function draw() {
    background("black");
    if (started){
        fill(255,255,0)
    textSize(20);
    textAlign(CENTER);
    for(let i = 0; i<storyText.length; i++) {
        text((i+1) + "." + storyText[i], width/2, yPos + i*lineGap);
    }
    yPos -= 0.6;
    if(yPos < -storyText.length * lineGap) {
        yPos = height;
    }
}
    else {
        fill(255,255,0)
    textSize(20);
    textAlign(CENTER);
    text("CLICK TO START SHOW", width/2, height/2);
    }
}

function mousePressed() {
    if(started === false) {
        started = true;
        sfx.loop()
    }
}