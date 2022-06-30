class Rectangle {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  // 생성자 생성

  getArea() {
    return this.x * this.y;
  }
  // 함수 생성
}

let rectangle = new Rectangle(1, 5);
let area: number = rectangle.getArea();
console.log(area);
