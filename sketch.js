var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png")
  leafImg=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
 

}

function createApples(){
apple= createSprite(random(50,350),40,10,10);
apple.addImage(appleImg)
apple.velocityY=4
apple.scale=0.04
apple.y=(Math.round(random(40,110)))
}

function createleaves(){
  leaf= createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg)
  leaf.velocityY=4
  leaf.scale=0.04
  leaf.y=(Math.round(random(40,110)))
  }
  

function draw() {
  rabbit.x =World.mouseX;
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
select_sprites=Math.round(random(1,2))
if(frameCount%80==0){

if(select_sprites==1){
createApples()

}
else{
  createleaves()
}}

 
  drawSprites();
}