var wall,thickness;
var bullet, speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=random(23,21);
  weight=random(30,52);
  thickness = random(22,88);

  bullet=createSprite(50, 200, 100, 10);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  
if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.7*width*speed*speed/(thickness*thickness*thickness);


  if(damage>10){
    wall.shapeColor =color ("red") ;
  }
  if(damage<10){
    wall.shapeColor = color("green");
  }
}
}

function draw() {
  background("blue");  

bullet.collide(wall);


  drawSprites();
}
function hascollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.Width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  {
    return false;
  }

}