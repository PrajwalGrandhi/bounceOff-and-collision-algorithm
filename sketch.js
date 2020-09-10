var fixedRect, movingRect,ob;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob=createSprite(200,400,50,50);
  ob.velocityX=1;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(fixedRect,movingRect))
 {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }
 else
 {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 }
 bounceOff(ob,fixedRect);
  drawSprites();
}
