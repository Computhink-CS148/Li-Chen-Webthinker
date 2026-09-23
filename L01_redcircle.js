function setup(){
    createCanvas(600, 400);
    background('white'); // 220
}

function draw(){
    fill('red'); // 255, 0, 0
    noStroke(); // no outline
    //       x   y   w   h
    ellipse(300,100,100,100);
    fill('orange')
    ellipse(300,200,100,100);
    fill('green')
    ellipse(300,300,100,100)
    // Todo: Challenge 3 Traffic Light
}