let yActor = 366;
let xActor = 85;    

let myPoints = 0;

let hit = false;

function showActor(){
  image(imageActor, xActor, yActor, 30, 30);
}

function moveActor(){
  if(keyIsDown(UP_ARROW)){
    yActor = yActor - 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(canMove()){
      yActor = yActor + 3;
    }
  }
}

function canMove(){
  return yActor < 366;
}

function handleColision(){
  for(let i = 0; i < imageCars.length; i++){
    hit = collideRectCircle(xCars[i], yCars[i], widthCar, heightCar, xActor, yActor, 15);
    if(hit){
      returnActorInitialPosition();
      audioTouch.play();
      if(myPoints > 0){
        myPoints--;
      }
    }
  }  
}

function returnActorInitialPosition(){
  yActor = 366;
}

function showScoreboard(){
  fill(color(255, 240, 60))
  textAlign(CENTER);
  textSize(25);
  text(myPoints, width / 5, 27);
}

function scorePoint(){
  if(yActor < 15){
    myPoints++;
    returnActorInitialPosition();
    audioScore.play();
  }
}