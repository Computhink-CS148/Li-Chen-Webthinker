// write your codes here
let score = 0;
let streak = 0;
let max = 0;
let message = "";

let scrambled = "";
let hiddenword = "";

let scrambledButton;
let guessInput = "";
let submitButton;

const WORDS = ["Expression", "International", "Bumblebee", "Coincidentally", "notebook",
     "scrambled", "seventeen", "nigeria","bookstore", "photographs", 
     "millenium", "milliliters", "Incomprehensible",
     "Mississippi", "Accommodation", "Unnecessary", "overexaggerate"];

function setup() {
    createCanvas(800, 600);

    scrambledButton = createButton("Re-scramble");
    scrambledButton.position(150, 280);
    scrambledButton.style("font-size", "18px"); // px = pixel
    scrambledButton.size(150, 30);
    scrambledButton.mousePressed(doScrambleAgain);

    guessInput = createInput();
    guessInput.position(315, 280);
    guessInput.style("font-size", "18px");
    guessInput.size(150, 30);

    submitButton = createButton("Submit");
    submitButton.position(485, 280);
    submitButton.style("font-size", "18px");
    submitButton.size(110, 30);
    submitButton.mousePressed(checkGuess);
}

function doScrambleAgain() {

}

function checkGuess() {

}

function chooseHiddenWord() {
    hiddenword = random(WORDS);
    hiddenword = hiddenword.toUpperCase();
    scrambled = scrambleWord(hiddenword)
}

function scrambleWord(aWord) {
    let arrLetters = aWord.split(""); //split string into array
    for(let index=arrLetters.length-1;
        index > 0;
        index--) {
            //swap
            first = arrLetters[index];
            who = floor(random(0, index+1));
            second = arrLetters[who];
            temp = first; //temp = temporary
            arrLetters[index] = second;
            
        }
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
    text(message, width/2, height/2+140);
}