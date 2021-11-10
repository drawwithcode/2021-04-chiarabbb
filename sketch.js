const phrase = "It’s not what you look at that matters, it’s what you see.";
const words = phrase.split(" ");
let buttons;
let iterator = 0;

console.log(words);

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");

  words.forEach(word => {
    createElement("button", word);
  })

  buttons = selectAll("button");

  buttons.forEach(button => {
    button.style("position: absolute");
    button.mouseOver(noLoop);
    button.mouseOut(loop);
  });
  console.log(buttons);


}

function mouseClicked() {
  window.open('https://www.moma.org/', '_self')
}


function draw() {
  iterator++;
  buttons.forEach((button, i) => {
    let x = noise((iterator + (40 * i)) / 400) * windowWidth;
    let y = noise((iterator - (40 * i)) / 400) * windowHeight;
    button.position(x, y);
    ellipse(mouseX, mouseY, 10, 10);

  })
}