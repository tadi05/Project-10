var shipImage, ship;
var seaImage, sea;
function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,10,10);
  sea.addImage(seaImage);
  sea.scale = 0.2;
  ship = createSprite(200,200,50,50);
  ship.addAnimation("ship",shipImage);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
 drawSprites()
}