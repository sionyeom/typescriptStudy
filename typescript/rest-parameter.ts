function colors(a: string, ...rest: string[]) {
  return a + " " + rest.join(" ");
}

let color1 = colors("red");
let color2 = colors("red", "blue");
let color3 = colors("red", "blue", "orange");

console.log(`color1 = ${color1}
color2 = ${color2}
color3 = ${color3}`);
