//Create variables here
var dog,happyDog,food,foodS,foodStock;
var database;

function preload()
{
  //load images here
  dogImg=loadImage("Dog.png");
  dogImg2=loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

database=firebase.database();

  dog=createSprite(250,360,10,10);
  dog.addImage(dogImg);
  dog.scale=0.4;
  //happyDog=createSprite(10,10);
  //happyDog.addImage(dogImg2);
  //happyDog.scale=0.2;

  foodStock=database.ref('food')
  foodStock.on("value",readStock)

  fill("white");
}


function draw() { 
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg2);
  }

  drawSprites();
  //add styles here
text("foodStock :"+foodS,100,80);
text("MEET SHIRO :)",100,20)
text("PRESS UP ARROW KEY TO FEED SHIRO",100,50);

}

//read values from database
function readStock(data){
  foodS=data.val();
}

//write values in database
function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}

  database.ref('/').update({
    food:x
  })
}



