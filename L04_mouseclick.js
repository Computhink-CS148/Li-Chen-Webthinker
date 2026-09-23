// write your codes here
// function setup() {
//     //            w    h
//     createCanvas(500, 500);
//     background(220);
//     // noLoop();
//     noStroke();
// }

// function draw() {
//     let ypos = 50;
//     let xpos = 50;
//     let ggColour = 0;
//     for (let num = 0; num < 6; num++){
//         fill(0, ggColour, 0);
//         circle(xpos, ypos, 50);
//         xpos = xpos+50;
//         ypos = ypos+50;
//         ggColour = ggColour+50;
//     }
// }

// let shapeColor = "pink";

// function draw() {
//     fill(shapeColor);
//     circle(500/2, 500/2, 200);
// }

// function mousePressed() {
//     shapeColor = color(random(0,255));
// }

// function mouseReleased() {
//     shapeColor = "white";
// }

let shapeColor = "white";

function setup() {
    createCanvas(500, 500);
    background("blue");
    // noLoop();
    noStroke();
}

// function mousePressed() {
//     shapeColor = color(random(0,225), random(0,225), random(0,225))
// }

// function mouseReleased() {
//     shapeColor = "white";
// }

function mouseDragged() {
    fill(shapeColor);
    circle(mouseX, mouseY, 20);
}