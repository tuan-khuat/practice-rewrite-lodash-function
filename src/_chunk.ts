// _.chunk(['a', 'b', 'c', 'd'], 2);
// // => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// // => [['a', 'b', 'c'], ['d']]

const chunk = <T>(array: T[], size: number): T[][] => {
  const newArray: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    const start = i;
    const end = i + size;
    const sizeArray = array.slice(start, end);
    newArray.push(sizeArray);
  }
  return newArray;
};

const x = chunk([1, "b", "c", "d"], 1);
console.log(chunk(["a", "b", "c", "d"], 1));
console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk(["a", "b", "c", "d"], 3));
console.log(chunk(["a", "b", "c", "d"], 4));
