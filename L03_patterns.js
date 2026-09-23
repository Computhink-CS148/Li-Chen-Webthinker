function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
let circleDiameter = 50;
let circleY = 50;

// for (let num=1; num<9; num++){
//   circle(50*num,circleY, circleDiameter);
//   circleY = circleY + 50;
// }

// for (let num=1; num<9; num++){
//   circle(50*num,circleY+=2, circleDiameter);
// }

// circle(225, 200, 100)
// circle(375, 200, 100)
// circle(525, 200, 100)
  // Task 1: Colour Gradient
  for (let i = 0; i < 5; i++) {
    fill(0,i * 50,i * 50);
    circle(50 + i * 50, circleY, circleDiameter)
    print("no")
    print(circleY)
  }

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}