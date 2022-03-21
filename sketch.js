var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var fundo ;

function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
 createCanvas(400,400);

fundo=createSprite(150,200);
fundo.addImage(pathImg);
fundo.scale = 1.5 ;


boy=createSprite(200,200,10,10);
boy.addAnimation("runnig",boyImg);
boy.scale = 0.1 ;

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,10,800);
leftBoundary.visible = false;


rightBoundary=createSprite(400,0,10,800);
rightBoundary.visible = false ;

}


function draw() {
background("white");
fundo.velocityY = 4;

boy.x = mouseX;
boy.collide(leftBoundary);
boy.collide(rightBoundary);

if(fundo.y>400){

fundo.y=width/2;

}



 



 drawSprites();

 }




