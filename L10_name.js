// write your codes here
let textInput;
let someVar;

function setup() {
    createCanvas(400, 600);
    background("hotpink");

    textInput = createInput()
    textInput.position(width/2-100, height/2);
    textInput.input(updateMyVar);
}

function draw() {
    background("hotpink");
    textSize(34);
    text(someVar, width/2, height/2-80);
}

