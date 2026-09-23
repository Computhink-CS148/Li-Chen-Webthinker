// write your codes here
let ypos = 0;
let lineY = 0;
let storyText = [];

function setup() {
    createCanvas(400, 600);
    ypos = height;

    storyText[0] = "long long long long long time ago.................";
    storyText[1] = "i was told a grandmother story";
    storyText[2] = "the end."
    print(storyText); //check js console
}

function draw() {
    background(220); //erase canvas
    textSize(18);
    fill("blue");
    lineY = 0
    textAlign(CENTER, CENTER);
    for (let count=0; count < storyText.length ; count++) {
        //                        x      y
        text(storyText[count], width/2, ypos + lineY);
        lineY = lineY + 25; // skip and puch lower
    }
    ypos = ypos - 1;

    if (ypos < 0) {
        ypos = height;
    }
}








let list = ["pizza", "burger", "sushi"];

function setup () {
    createCanvas(400, 400);
}

let yPos = 400;
let lineGap = 60;

function draw() {
    background("black");
    // textSize(20);
    // text("li chen", 50 ,50);
    // textSize(15);
    // text("12", 50, 70);
    // textSize(10);
    // text("nothing", 50, 90)



    // textSize(20);
    // textAlign(LEFT);
    // text["My favourite foods:"]
    // for(let i=0; i<list.length;i++) {
    //     text((i+1) + "." + list[i], 50, 1*30);

    // }

    fill(255, 255, 0);
    textSize(24);
    textAlign(CENTER);
    for(let i = 0; i<list.length; i++) {
        text((i+1) + "." + list[1], width/2, yPos + i*30);
    }
    yPos -= 0.6;
    if(yPos < -list.length * lineGap) {
        yPos = height;
    }
}