interface PersonType {
  name: string;
  hello(this: PersonType, name2: string): string;
  // 자신의 타입을 선언
}

let typedPerson: PersonType = {
  name: "Happy",
  hello: function (this: PersonType, name2: string): string {
    let message = `hello, ${this.name + name2}`;
    return message;
  },
};

console.log(typedPerson.hello("world"));

let myConcat = function (str1: string, str2: string): string {
  return str1 + str2;
};

let myConcat: (str1: string, str2: string) => string = (str1, str2) => {
  return str1 + str2;
};
