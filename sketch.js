//for loop gradient
function setup() {
 createCanvas(600, 600);
  colorMode(RGB, height);
}
function draw() {

 for (let i = 0; i < height; i++) {
 stroke(i,mouseX,mouseY);
 line(i, 0, i, width);
 }
}