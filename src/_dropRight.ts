const _dropRight = <T>(array: T[], size: number = 1): T[] => {
    const newArr = [...array];
    newArr.reverse().slice(0, size);
    return newArr.reverse();
};

console.log(_dropRight([1, 2, 3]));
// => [1, 2]

console.log(_dropRight([1, 2, 3], 2));
// => [1]

console.log(_dropRight([1, 2, 3], 5));
// => []

console.log(_dropRight([1, 2, 3], 0));
// => [1, 2, 3]
