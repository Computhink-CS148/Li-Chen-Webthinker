/*
Task 1: Add the setup() function
*/

function setup() {
  //            w    h
  createCanvas(400, 800);
  background(255); // grayscale 0: black, 225: white, 220: grey
}

function draw() {
// Challenge 1: An eye using ellipse() function
  // ellipse(100, 100, 80, 50);
  // ellipse(200, 100, 80, 50);

  // Challenge 2: A face using circle() function
//   fill("gold");
//  //      x   y  diameter
//   circle(80, 80, 100);

  // Challenge 3: A house using rect() function
  // rect(100, 200, 100, 200)
  // Challenge 4: A rocketship using triangle() function
  fill("white")
  ellipse(200, 300, 200, 400)
  // x1 is a smaller no. than x2
  //       x1  y1     x2  y2   x3  y3
  triangle(190, 180, 226, 70, 282, 180)
  rect(100, 450, 200, 50)
  circle(200, 300, 50)
  // Challenge 5: A square face using quad() function

  // Challenge 6: Add some colours to the drawings in the above challenges

  // Challenge 7: Create a funny Pokemon
}