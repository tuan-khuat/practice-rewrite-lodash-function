// _.concat(array, [values]);

// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);

// console.log(other);
// // => [1, 2, 3, [4]]

// console.log(array);
// // => [1]

// import { concat } from "lodash";

const _concat = <T>(...array: (T | T[])[]): (T | T[])[] => {
  const newArr: (T | T[])[] = [];
  for (const item of array) {
    Array.isArray(item) ? newArr.push(...item) : newArr.push(item);
  }
  return newArr;
};

var array = [1];
// const x = concat<number | number[]>([1], 2, [3], [[4]]);
console.log(_concat<number | number[]>(array, 2, [[3]], [[4]]));
console.log(_concat<number | number[]>(array, 2, [3], [[4]]));
