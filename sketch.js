var balloon,balloonImage1,balloonImage2;



function preload(){
   bg =loadImage("Images/cityImage.png");
   balloonImage1=loadAnimation("Images/HotAirBallon01.png");
   balloonImage2=loadAnimation("Images/HotAirBallon01.png","Images/HotAirBallon01.png",
   "Images/HotAirBallon01.png","Images/HotAirBallon02.png","Images/HotAirBallon02.png",
   "Images/HotAirBallon02.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png");
  }


function setup() {
 //chamar db aqui
   
   
  createCanvas(1500,700);

  balloon=createSprite(250,650,250,650);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  //bd
   
  textSize(20); 
}

// função para exibir a interface do usuário
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
   //imagem e direção do movimento

  }
   
  else if(keyDown(RIGHT_ARROW)){
  //
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
   
  else if(keyDown(UP_ARROW)){
   //
    balloon.scale=balloon.scale -0.005;
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
   
  else if(keyDown(DOWN_ARROW)){

    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale+0.005;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use as setas para mover o balão de ar quente!",40,40);

}


//função updateHeight


function readHeight(data){
 // adicionar propriedades dessa função
 }

function showError(){
  console.log("Erro ao escrever no banco de dados");
}
