var fixedRect, movingRect;
var fixedRect1;

function setup()
 {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  fixedRect1 = createSprite(800, 600, 90, 20);
  fixedRect1.shapeColor = "green";
}

function draw() 
{
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect, movingRect))
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(fixedRect1, movingRect))
  {
    movingRect.shapeColor = "red";
    fixedRect1.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
  }

  drawSprites();
}







