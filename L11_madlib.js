// write your codes here
let textInput;
let secondInput
let button;

function setup() {
    createCanvas(700, 700);

    textInput = createInput();
    textInput.position(width/2, 100);

    secondInput = createInput();
    secondInput.position(width/2, 130);


    button = createButton("submit");
    button.position(width/2, 160);
    button.mousePressed
}

function draw() {
    background("violet");
    textSize(18);
    textAlign(RIGHT, CENTER);
    text("name:", width/2-10, 110);
    text("home address:", width/2-10, 140);
}