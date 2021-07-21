let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let sppedCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let widthCar = 50;
let heightCar = 40;

function showCar(){
  for(let i = 0; i < imageCars.length; i++){
    image(imageCars[i], xCars[i], yCars[i], widthCar, heightCar);
  }  
}

function moveCar(){
  for(let i = 0; i < imageCars.length; i++){
    xCars[i] = xCars[i] - sppedCars[i];
  }
}

function returnInitialPositionCar(){
  for(let i = 0; i < imageCars.length; i++){
    if(carOutScreen(xCars[i])){
      xCars[i] = 600;
    }
  }  
}

function carOutScreen(xCar){
  return xCar < -50;
}