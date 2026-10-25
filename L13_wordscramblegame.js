// write your codes here
let score = 0;
let streak = 0;
let max = 0;
let message = " ";

let scrambled = " ";
let hiddenword = " ";

let scrambledButton;
let guessInput = " ";
let submitButton;

const WORDS = ["Expression", "International", "Bumblebee", "Coincidentally", "notebook",
     "scrambled", "seventeen", "nigeria",
      "bookstore", "photographs", "millenium", "milliliters", ];

function setup() {
    createCanvas(800, 600);

    scrambledButton = createButton("Re-scramble");
    scrambledButton.position(150, )
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
    text(MessageChannel, width/2, height/2+140);
}