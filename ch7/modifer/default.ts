class Account {
  balance: number;

  // 적금 얻기 (get 프로퍼티 이용)
  get getBalance() {
    return this.balance;
  }

  // 적금 하기 (set 프로퍼티 이용)
  set setBalance(amount) {
    this.balance += amount;
  }

  // 적금하기 (메서드 이용)
  deposite(depositeAmount: number) {
    this.setBalance = depositeAmount;
  }

  // 기본 적금액을 설정학
  constructor(
    defaultBalance: number = 0,
    protected bankName: string = "happy bank",
    readonly interestRate: number = 0.1
  ) {
    this.balance = defaultBalance;
  }

  // interestRate는 public으로 설정되어 있어서 접근 가능
  getInterestRate() {
    return this.interestRate;
  }

  // 생성자 매개변수 defaultBalance는 private이므로 호출 불가
  getDefaultBalance() {
    // return this.defaultBalance
  }
}

class MyAccount extends Account {
  // 테스트
  constructor() {
    super();
    // 1000원 적금
    this.deposite(1000);
    // 1000원 적금
    this.setBalance = 1000;
    console.log(`2번) 적금 : ${this.balance}, ${this.getBalance} /
    이율 : ${this.interestRate}, ${this.getInterestRate()}% /
    은행명 : ${this.bankName}
    `);
  }
}

let account = new Account();
console.log(`1번) 적금 : ${account.balance}, ${account.getBalance} /
이율 : ${account.interestRate}, ${account.getInterestRate()}% /
`);

let myAccount = new MyAccount();
