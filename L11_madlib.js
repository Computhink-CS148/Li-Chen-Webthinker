// write your codes here
let nounInput;
let verbInput;
let adjInput;
let advInput;
let placeInput;
let button;

let storyText;
let storyTemplates;

function setup() {
    storyTemplates = [
        "The {adj} {noun} decided to {verb} {adv} at the place.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
        "Did you hear aboutv the {adj} {noun} that tried to {verb} {adj} near {place}."
    ];

    templare = random(storyTemplates);
    storyText = storyTemplates.replace("{noun}", "dog");
    storyText = storyText.replace("{adj}", "brown");
    storyText = storyText.replace("{verb}", "barks");
    storyText = storyText.replace("{adj}", "brown");
    console.log(storyText),

    createCanvas(700, 700);

    nounInput = createInput();
    nounInput.position(width/2, 100);

    verbInput = createInput();
    verbInput.position(width/2, 130);

    adjInput = createInput();
    adjInput.position(width/2, 160);

    advInput = createInput();
    advInput.position(width/2, 190);

    placeInput = createInput();
    placeInput.position(width/2, 220);


    button = createButton("submit");
    button.position(width/2, 260);
    button.mousePressed(updateStory);
}

function draw() {
    background("violet");
    textSize(18);
    textAlign(RIGHT, CENTER);

    text("enter a noun:", width/2-10, 110);
    text("enter a verb:", width/2-10, 140);
    text("enter an adjective:", width/2-10, 170);
    text("enter an adverb:", width/2-10, 200);
    text("enter a place:", width/2-10, 230);
}

function updateStory() {
    print("hello " + nounInput.value());
    print("i am going to " + verbInput.value());
}