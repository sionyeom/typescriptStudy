class Flashlight {
  constructor(public lightIntensity) {}
}

class Bicycle {
  constructor(public numberOfWheel: number) {}

  getNumberOfWheel(): number {
    return this.numberOfWheel;
  }
}
// 상속 관계
class MountainBike extends Bicycle {
  flashLight: Flashlight;

  constructor(public numberOfWheel: number, public hasBackSaddle: boolean) {
    // Bicycle 클래스의 numberOfWheel를 상속받기 위해 super 메서드의 매개변수에 numberOfWheel를 포함시켜준다
    super(numberOfWheel);
    // 자전거가 후레쉬 라이트를 포함함 (HasA 관계)
    this.flashLight = new Flashlight(90);
  }

  getHasBackSaddle() {
    return this.hasBackSaddle;
  }

  getNumberOfWheel() {
    return this.numberOfWheel;
  }
}

let hasBackSaddle = true;
let numberOfwheel = 2;

let mountainBike = new MountainBike(numberOfwheel, hasBackSaddle);
console.log(mountainBike.getHasBackSaddle());
console.log(mountainBike.getNumberOfWheel());
