let person: { name: string; city: string }[];
person = [
  { name: "a", city: "seoul" },
  { name: "b", city: "daejeon" },
  { name: "c", city: "daegu" },
];

console.log(JSON.stringify(person));
