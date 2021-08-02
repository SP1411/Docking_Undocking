var backGround;
var astronaut;



function preload() {

  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym2.png", "images/gym11.png", "images/gym12.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png", "images/move1.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");

}


function setup() {
  createCanvas(800,400);
  
  backGround.addImage(bg);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}