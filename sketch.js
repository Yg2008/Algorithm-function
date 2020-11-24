var fixed,moving;
var a,b;
var c,d;

function setup() {
  createCanvas(800,400);

  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "black";

  moving = createSprite(400,300,50,50);
  moving.shapeColor = "red";

  a = createSprite(100,100,10,10);
  a.shapeColor = "pink";
  a.velocityX = 2;
  a.velocityY = 2;

  b = createSprite(300,300,10,10);
  b.shapeColor = "purple";
  b.velocityX = -2;
  b.velocityY = -2;

  c = createSprite(300,100,10,10);
  c.shapeColor = "yellow";
  c.velocityX = -2;
  c.velocityY = 2;

  d = createSprite(100,300,10,10);
  d.shapeColor = "orange";
  d.velocityX = 2;
  d.velocityY = -2;
}

function draw() {
  background("grey"); 

  moving.x = World.mouseX;
  moving.y = World.mouseY;

  bounceOff(a,b);
  collide(c,d);

  if(isTouching(moving,fixed)){
  moving.shapeColor = "yellow";
  fixed.shapeColor = "orange";
  }

  else{
    moving.shapeColor = "red";
    fixed.shapeColor = "black";
  }

  drawSprites();
}

