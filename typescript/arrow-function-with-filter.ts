let numberList = [1, 2, 3, 4, 5];

numberList = numberList.filter((e) => {
  return e % 2 === 0;
});

console.log(numberList);
