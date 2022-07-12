interface Car {
  speed: number;
}
interface SportCar {
  acceleration: number;
}

interface MyOptimizedCar extends Car, SportCar {
  waterproof: boolean;
}

let myCar = <MyOptimizedCar>{};
myCar.speed = 100;
myCar.acceleration = 100;
myCar.waterproof = true;
