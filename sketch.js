
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);

  obstacleGroup = createGroup;
  
  

}


function draw() {
  background("lightblue");
  
   if (ground.x < 0){
   ground.x = ground.width/2;
    }
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }
  
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  monkey.collide(ground);
  
  
    
  
  spawnBanana();
  spawnObstacles();
  drawSprites();
}

function spawnBanana(){
   if (frameCount % 80 === 0) {
     banana = createSprite(200,180,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=70;
}
}

function spawnObstacles(){
   if (frameCount % 300 === 0) {
     obstacle = createSprite(250,325,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -3;
    obstacle.scale=0.1;
     obstacle.lifetime=80;
     obstacle.collide(monkey);
   }
}

