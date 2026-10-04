// write your codes here
let textInput;
let button;

function setup() {
    createCanvas(700, 700);

    textInput = createInput();
    textInput.position(width/2, 100);

    button = createButton("click me");
    button.position(width/2, 130);
}

function draw() {
    background("violet");
    textSize(38);
    textAlign
    text("name:", width/2, 120);
}