interface Person4 {
  name: string;
  city: string;
}

let person4: Person4[] = [
  { name: "a", city: "seoul" },
  { name: "a", city: "seoul" },
  { name: "a", city: "seoul" },
];

console.log(JSON.stringify(person4));
