const Engine = Matter.Engine 
const World  = Matter.World
const Bodies = Matter.Bodies
var snowball = [],Max = 10
var engine, world, t
function preload(){
  bg_img = loadImage("snowBEST.jpg") 
}



function setup() {

  createCanvas(1950,950);
  engine = Engine.create();
  world = engine.world
//createSprite(400, 200, 50, 50);
//t = framecount/60
for(var i = 0; i <= Max; i++){
  snowball[i] = new Snow (random(0,1950),random(-50,0))

}
for(var i = Max; i <= Max * 2; i++){
  snowball[i] = new Snow (random(0,1950),random(-150,0))

}
}

function draw() {
  background(bg_img);  
  
  //drawSprites();
Engine.update(engine);
  for(var j = 0; j <= Max; j++){

    snowball[j].display();

  }
  for(var j = Max; j <= Max * 2; j++){

    snowball[j].display();

  }
  
}