interface Person {
  name: string;
  city: string;
}

interface PersonItems extends Array<Person> {}

let person5: PersonItems = [
  { name: "a", city: "seoul" },
  { name: "a", city: "seoul" },
];
