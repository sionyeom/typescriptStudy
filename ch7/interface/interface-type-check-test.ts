interface ICar {
  name: string;
}

class MyCar {}

let mCar: ICar = {
  name: "car",
};
console.log(typeof mCar);
