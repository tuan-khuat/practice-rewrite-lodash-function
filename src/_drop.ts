const _drop = <T>(array: T[], size: number = 1): T[] => {
    const newArr = [...array];
    newArr.splice(0, size);
    return newArr;
};

console.log(_drop([1, 2, 3]));
// => [2, 3]

console.log(_drop([1, 2, 3], 2));
// => [3]

console.log(_drop([1, 2, 3], 5));
// => []

console.log(_drop([1, 2, 3], 0));
// => [1, 2, 3]
