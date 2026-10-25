// write your codes here
function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("word scramble game!", width/2, 100);
    text("scrambled word: COITAARN", width/2, 160);

    textSize(24);
    text("score: 0" + score, width/2, height/2+80);
    text("streak: " + streak + "(max: "+ max +")", width/2, height/2+110);
    text(MessageChannel, width/2, )
}