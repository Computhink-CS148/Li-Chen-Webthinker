// write your codes here
// let colour = "white";
// let size = 50;
// let showCircle = false;
// let showRect = false;
// let showSquare = false;
let size = 25
let colour = "blue";

let xpos = 0;
let ypos = 0;

function setup() {
    createCanvas(600, 600);
    background("skyblue");
    // noStroke();

    xpos = width/2
    ypos = height/2
}



function draw() {
    background("skyblue");
    fill(colour);
    circle(xpos, ypos, size);

    if (keyIsDown(RIGHT_ARROW)) {
        xpos = xpos +2;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xpos = xpos - 2;
    }
    if (keyIsDown(UP_ARROW)) {
        ypos = ypos - 2;
    
    }
    if (keyIsDown(DOWN_ARROW)) {
        ypos = ypos + 2;
    }

    xpos = constrain(xpos, 0+12.5, width-12.5);
    ypos = constrain(ypos, 0+12.5, height-12.5)
}



















































































// function draw() {
    
// }

// function mousePressed() {
//     size = 5
//     colour = color(random(0,255), random(0, 255), random(0, 255));
// }

// function mouseDragged() {
//     fill(colour);
//     circle(mouseX, mouseY, size)
//     size = size + 0.5;
// }
// function draw() {
//     background("skyblue");
//     rect(width/2, height/2, size, size);
// }

// function keyPressed() {
//     size = 300;
// }

// function keyReleased() {
//     size = 50;
// }

// function draw() {
//     background("skyblue");
//     if (showCircle) {
//         circle(width/2, height/2, size);

//     }
//     if (showRect) {
//         fill("red");
//         rect(width/2-size, height/2-size, size, size*2);
//     }
//     if (showSquare) {
//         fill("blue");
//         rect(width/2, height/2, size, size);
//     }
// }

// function keyPressed() {
//     if (key === 'c') {
//         // ! is a NOT operator
//         showCircle = ! showCircle;
//     }
//     if (key === 's') {
//         showSquare = ! showSquare;
//     }
//     if (key === 'r') {
//         showRect = ! showRect;
//     }
// }
// function keyPressed() {
//     print(key);
//     print(keyCode);

//     if (keyCode === UP_ARROW) {
//         print("i have got UP ARROW key")
//     }
// }

// function keyPressed() {
//     if (keyCode === UP_ARROW) {
//         fill("red");
//         circle(width/2, height/2, size);
//     }
//     if (keyCode === DOWN_ARROW){
//         fill("black");
//         circle(width/2, height/2, size);
//     }
// }