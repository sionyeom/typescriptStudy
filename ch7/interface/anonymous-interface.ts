interface IFormat {
  (data: string, toUpper?: boolean): string;
}

// let format: IFormat = function (str: string, isUpper: boolean) {
//   if (isUpper) {
//     return str.toUpperCase();
//   } else {
//     return str.toLowerCase();
//   }
// };

// console.log(format("1 : happy"));
