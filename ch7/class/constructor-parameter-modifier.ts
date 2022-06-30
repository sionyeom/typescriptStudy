class Cube {
  constructor(
    public width: number,
    private length: number,
    protected height: number
  ) {}

  getVolume() {
    return this.width * this.height * this.length;
  }
}

let [cWidth, cLength, cHeight] = [1, 2, 3];

let cube = new Cube(cWidth, cLength, cHeight);

console.log(cube.width);
console.log(cube.getVolume());
