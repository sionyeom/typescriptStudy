class Base {
  public birthYear = "2017";
}

class Member extends Base {
  public getBirthYear() {
    return this.birthYear;
  }
}

let member = new Member();
console.log(member.getBirthYear());

class Cube {
  constructor(
    public width: number,
    private length: number,
    protected height: number
  ) {}
}
