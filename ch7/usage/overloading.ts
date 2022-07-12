class SingleChecker {
  constructor() {}
  typeCheck(value: string): void {
    console.log(`${typeof value} : ${value}`);
  }
}

class UnionTypeChecker extends SingleChecker {
  constructor() {
    super();
  }

  typeCheck(value: number): void;
  typeCheck(value: string): void;
  // any 타입에 제약을 가하여 number와 string만 받을 수 있도록 한다.

  typeCheck(value: any) {
    if (typeof value === "number") {
      console.log("숫자 : ", value);
    } else if (typeof value === "string") {
      console.log("문자열 : ", value);
    } else {
      console.log("기타 : ", value);
    }
  }
}

let unionTypeChecker = new UnionTypeChecker();
unionTypeChecker.typeCheck(123);
unionTypeChecker.typeCheck("happy");
