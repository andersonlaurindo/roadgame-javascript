let imageRoad;
let imageActor;
let imageCar1;
let imageCar2;
let imageCar3;

let audioSoundtrack;
let audioScore;
let audioTouch;

function preload(){
  imageRoad = loadImage('images/road.png');
  imageActor = loadImage('images/actor-1.jpg');
  imageCar1 = loadImage('images/car-1.png');
  imageCar2 = loadImage('images/car-2.png');
  imageCar3 = loadImage('images/car-3.png');
  imageCars = [imageCar1, imageCar2, imageCar3, imageCar1, imageCar2, imageCar3];
  
  audioSoundtrack = loadSound('songs/soundtrack.mp3')
  audioScore = loadSound('songs/score.wav')
  audioTouch = loadSound('songs/touch.mp3')
}