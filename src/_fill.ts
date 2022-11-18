
const _fill = <T>(
    array: T[],
    value: any,
    start: number = 0,
    end: number = array.length
) => {
    const newArr: T[] = [...array];
    for (let i = start; i < end; i++) {
        newArr[i] = value;
    }
    return newArr;
};

var array = [1, 2, 3];

console.log(_fill(array, 'a'));
console.log(_fill(Array(5), 2));
console.log(_fill([4, 6, 8, 10], '*', 1, 3));
// console.log(_.fill([4, 6, 8, 10], '*', 1, 3));
// => [4, '*', '*', 10]
