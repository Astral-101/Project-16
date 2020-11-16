var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = "white";


  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "grey";
  speed = random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;
  thickness = Math.round(random(22, 83));

}

function draw() {
  background(255,255,255);  

  if (bullet.x - wall.x < bullet.width/2  + wall.width/2){
    var damage = (0.5*weight*speed*speed) / (thickness*thickness*thickness);
    console.log(damage);  
    
    if (damage<3.28){
      wall.shapeColor = "green";


    }
    else if(damage>12.43){
      wall.shapeColor = "red";
    }
  }


  drawSprites();
}