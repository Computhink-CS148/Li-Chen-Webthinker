// write your codes here
let nounInput;
let verbInput;
let adjInput;
let 
let button;

function setup() {
    createCanvas(700, 700);

    noun = createInput();
    noun.position(width/2, 100);

    verb = createInput();
    verb.position(width/2, 130);


    button = createButton("submit");
    button.position(width/2, 160);
    button.mousePressed(updateStory);
}

function draw() {
    background("violet");
    textSize(18);
    textAlign(RIGHT, CENTER);
    text("name:", width/2-10, 110);
    text("home address:", width/2-10, 140);
}

function updateStory() {
    print("hello " + textInput.value());
    print("i am going to " + secondInput.value());
}