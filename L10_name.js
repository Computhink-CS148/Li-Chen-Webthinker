// write your codes here
let textInput;
let someVar;

function setup() {
    createCanvas(600, 400);
    background("hotpink");

    textAlign(CENTER, CENTER)
    textInput = createInput()
    textInput.position(width/2-100, height/2);
    textInput.input(updateMyVar);
}

function draw() {
    background("hotpink");
    rect(300, 150, 300, 80);
    textSize(34);
    text(someVar, width/2, height/2-80);
}

function updateMyVar() {
    someVar= textInput.value()
}