var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color("white");

}

function draw() {
  background(0);  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

      if (damage > 10){
        wall.shapeColor = color(255, 0, 0);
        wall.depht = bullet.depht;
        bullet.depht ++;
      }
      if (damage < 10){
        wall.shapeColor = color(0, 255, 0);
        wall.depht = bullet.depht;
        bullet.depht ++;
      }
  }
  drawSprites();
}

function hasCollided(object1, object2){

  var bulletRightEdge = object1.x + object1.width;
  var wallLeftEdge = object2.x;

  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }else{
    return false;
  }
}