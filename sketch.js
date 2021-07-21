

function setup() {
  createCanvas(500, 400);
  audioSoundtrack.loop();
}

function draw() {
  background(imageRoad);
  showActor();
  moveActor();
  showCar();
  moveCar();
  returnInitialPositionCar();
  handleColision();
  showScoreboard();
  scorePoint();
}