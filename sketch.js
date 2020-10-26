var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);

 bullet= createSprite(50, 200, 60, 30);
 wall=createSprite(1500,200,thickness,800);
 wall.shapeColor=color(80,80,80);

 thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

//if(car.isTouching(wall)){
  bullet.velocityX=speed;
}
  function draw() {

    background(0);
    

//if(wall.x-car.x<(car.width+wall.width)/2)

//var deformation=0.5*weight*speed*speed/22500;
//if(deformation>180)
//{
  //car.shapeColor=color(255,0,0);
//}
//if(deformation<180 && deformation>100)
//{
//car.shapeColor=color(230,230,0);
//}
//if(deformation<100)
//{
  //car.shapeColor=color(0,255,0);
//}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }

}





drawSprites();

}

function hasCollided(bullet,wall){

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x

if(bulletRightEdge>=wallLeftEdge){
  return true;
}

  return false;
}


/*bullet.velocityX=0;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapecolor=color(255,0,0);
  }
  
  if(damage<10)
  {
    wall.shapecolor=color(0,255,0);
  }
}*/



  


