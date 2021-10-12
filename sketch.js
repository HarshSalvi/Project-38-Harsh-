//Create variables here
var dog,happydog,database,foodS,foodStock,dogImg,dogImg1,dogImage;
var background


function preload(){

	//load images here
  dogImage=loadImage("images/dogImg.png")
  happydogImage=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  

  dog=createSprite(250,250,50,50)
  dog.addImage("2",dogImage)
  dog.scale=0.5

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){

  
  
  writeStock(foodS);
  dog.addImage("2",happydogImage)
}
  drawSprites();
  //add styles here
  
  fill("red");
  textSize(25)
  stroke("0.5");
  text("Food remaining:"+foodS,170,480);
  textSize(20);
text("Note Press UP_ARROW Key to Feed Drago Milk!",50,50);

}
function readStock(data){

  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
  x=0;

  }else{

    x=x-1
  }

  database.ref('/').update({

    Food:x
  })
}

