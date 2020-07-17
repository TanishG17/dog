//Create variables here
var dog, happyDog, database, foodS, foodStock;


function preload()
{
  //load images here
  dogs = loadImage("dogImg.png");
  dog2 = loadImage("dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  

  dog =createSprite(dog,500,500,200.150);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStocks(foodS);
  dog.addImage(dogHappy);
}


text("Note: Press UP_ARROW KEY To Feed Drago Milk");
   fill();
  textSize(3);
  stroke();



  drawSprites();
  //add styles here
  
}



function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
