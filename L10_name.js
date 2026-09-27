// write your codes here
let textInput;
let ageInput;
let someVar = "";

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
    rect(150, 80, 300, 80  , 15, 15, 15, 15);
    textSize(34);
    text(someVar, width/2, height/2-80);
    
    textSize(14);
    fill("black");
    textAlign(LEFT, CENTER);
    stroke("black");
    strokeWeight(0);
    text("Name:", 70, height/2 + 10);
    text("Age:", 70, height/2 + 50);
}

function updateMyVar() {
    someVar= textInput.value()
}