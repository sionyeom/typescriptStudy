class PC {
  constructor(public hddCapacity: string) {}

  private ram: string = "0g";
  set ramCapacity(value: string) {
    this.ram = value;
  }
  get ramCapacity() {
    return this.ram;
  }

  protected getHddCapacity() {
    return this.hddCapacity;
  }
}

class Desktop extends PC {
  constructor(public hddCapacity: string) {
    super(hddCapacity);
  }

  getInfo() {
    // console.log("1번 : " + super.getHddCapacity(), super.hddCapacity);
    console.log("2번 : " + this.getHddCapacity(), this.hddCapacity);

    this.hddCapacity = "2000G";
    // console.log("3번 : " + super.getHddCapacity(), super.hddCapacity);
    console.log("4번 : " + this.getHddCapacity(), this.hddCapacity);

    //   super.ramCapacity = "16G";
    // 부모 클래스의 set 프로퍼티로 값을 설정
    //   console.log("5번 : " + this.ramCapacity, super.ramCapacity);

    //   this.ramCapacity = "8G";
    // 부모 클래스의 set 프로퍼티로 값을 설정
    //   console.log("6번 : " + this.ramCapacity, super.ramCapacity);
  }
}

let myDesktop = new Desktop("1000G");
// myDesktop.getInfo();
