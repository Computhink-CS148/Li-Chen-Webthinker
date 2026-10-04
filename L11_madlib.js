// write your codes here
let nounInput;
let verbInput;
let adjInput;
let advInput;
let placeInput;
let button;

function setup() {
    createCanvas(700, 700);

    nounInput = createInput();
    nounInput.position(width/2, 100);

    verbInput = createInput();
    verbInput.position(width/2, 130);

    adjInput = createInput();
    adjInput.position(width/2, 160);

    advInput = createInput();
    advInput.position(width/2, 190);

    placeInput = createInput();
    placeInput.position(width/2, 220);


    button = createButton("submit");
    button.position(width/2, 260);
    button.mousePressed(updateStory);
}

function draw() {
    background("violet");
    textSize(18);
    textAlign(RIGHT, CENTER);

    text("enter a noun:", width/2-10, 110);
    text("enter a verb:", width/2-10, 140);
    text("enter an adjective:", width/2)
}

function updateStory() {
    print("hello " + nounInput.value());
    print("i am going to " + verbInput.value());
}