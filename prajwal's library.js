function isTouching(fixedRect,movingRect)
{

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  return true;
}
else {
 return false;
}
}
function bounceOff(movingRect,fixedRect)
{
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
    {
      movingRect.velocityX=movingRect.velocityX*-1;
    }
 if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
 {
movingRect.velocityY=movingRect.velocityY*-1;
  
 } 
}