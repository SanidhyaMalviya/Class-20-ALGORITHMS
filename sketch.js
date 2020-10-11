var movingRect, fixedRect
var object1,object2

function setup() {
  createCanvas(800,400);
  
  object1 = createSprite(100,50,50,50)
  object1.velocityY = 4

  object2 = createSprite(100,350,50,50)
  object2.shapeColor = "red"
  object2.velocityY = -4

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"

  movingRect = createSprite(300, 200, 50, 50);
  movingRect.shapeColor = "green"
}

function draw() {
  background(0); 

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if (object1.x-object2.x < object1.width/2 + object2.width/2
    && object2.x-object1.x < object2.width/2 + object1.width/2) {
     object1.velocityX = object1.velocityX * -1
     object2.velocityX = object2.velocityX * -1
  } 
  
  if (object1.y-object2.y < object1.height/2 + object2.height/2
  && object2.y-object1.y < object2.height/2 + object1.height/2) {
   object1.velocityY = object1.velocityY * -1
   object2.velocityY = object2.velocityY * -1
  }

  if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 
    && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2) {
    fixedRect.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  } else {
    fixedRect.shapeColor = "green"
    movingRect.shapeColor = "green"
  }

  drawSprites();
}