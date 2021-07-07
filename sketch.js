
var ship,shipImg1

function preload(){
seaImg=loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}


function setup(){
  createCanvas(400,400);
  sea=createSprite(200,180,400,20)
  sea.addImage("sea",seaImg)
  ship = createSprite(50,180,20,50);
  ship.addAnimation(shipImg1);

}

function draw() {
  background("blue");
  sea.velocityX = -2
 if (sea.x<0){
    sea.x = sea.width/2;
}
}