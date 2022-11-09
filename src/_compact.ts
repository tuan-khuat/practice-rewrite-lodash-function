// _.compact([0, 1, false, 2, '', 3]);
// // => [1, 2, 3]

const compact = <T>(array: T[]): T[] => {
  return array.filter((a) => !!a);
  // return array.filter(Boolean);
};

console.log(compact([0, 1, false, 2, "", 3]));
console.log(compact(["", 1, false, 2, "", 3]));
console.log(compact([0, 1, false, true, "", 3]));
