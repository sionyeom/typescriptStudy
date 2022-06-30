class Rectacle {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getArea(): number {
    return this.x * this.y;
  }
}
